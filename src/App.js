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
            bottomText: "",
            userMemes: []
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
        const {name, value} = event.target
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    handleSubmit = (e) => {
        this.addMemes(this.state.memes)

        this.setState(prevState  => {
            return {
                ...prevState,
                topText: "",
                bottomText: ""
            }
        })
        e.preventDefault()
        console.log(this.state.topText)
    }

    addMemes = (createdMeme) => {
        this.setState(prevState => {
            return {
                userMemes: [...prevState.userMemes, createdMeme]
            }
        })
        console.log(this.state.userMemes)
    }

    render(){
        const currentMeme = this.state.memes
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
                
               {this.state.userMemes.map((memes) => 
               <CreatedMemes 
                    {...memes}
                    lastText={this.state.lastText}
                    key={memes.id}
               />
                )} 

            </div>
        )
    }
}

export default App 
