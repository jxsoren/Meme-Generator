import React from 'react'
import Generator from './Generator'
import CreatedMemes from './CreatedMemes'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            memes: {},
            topText: "",
            bottomText: ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount(){
        this.setState({loading: true})
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(getData => {
                const arrayLength = getData.data.memes.length - 1
                const randomIndex = Math.floor(Math.random() * arrayLength);
                console.log(arrayLength)
                this.setState({
                    memes: getData.data.memes[randomIndex]
                })
                console.log(getData.data.memes)
            })
            console.log(this.state.topText)
    }

    handleClick(event){
        event.preventDefault()
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(getData => {
                const arrayLength = getData.data.memes.length - 1
                const randomIndex = Math.floor(Math.random() * arrayLength);
                console.log(arrayLength)
                this.setState({
                    memes: getData.data.memes[randomIndex]
                })
            })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            topText: "",
            bottomText: ""
        })
        e.preventDefault()
    }

    render(){
        const currentMeme = this.state.memes
        const stateObject = this.state
        return (
            <div>
                <Generator 
                    name = {currentMeme.name} 
                    key = {currentMeme.id} 
                    imgUrl = {currentMeme.url} 

                    handleChange = {this.handleChange}
                    handleClick = {this.handleClick}
                    handleSubmit = {this.handleSubmit}

                    topText = {this.state.topText}
                    bottomText = {this.state.bottomText}
                />

                <CreatedMemes 
                    imgUrl = {currentMeme.url} 
    
                />
            </div>
        )
    }
}

export default App 
