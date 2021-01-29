import React from 'react'
import Generator from './Generator'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            topText: "",
            bottomText: "",
            memes: {}
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        const currentMeme = this.state.memes
        const stateObject = this.state
        return (
            <div>
                
                <Generator name={currentMeme.name} key={currentMeme.id} imgUrl={currentMeme.url} handleClick={this.handleClick} state={stateObject} onChange={this.handleChange}/>

                {/* {this.state.memes.map((target) => 
                <Generator {...target} key={target.id}/>)} */}
            </div>
        )
    }
}

export default App 

  // {this.state.memes.map((target) => 
    //     <Generator {...target} 
    //     key={target.id}/>
    //     )}
