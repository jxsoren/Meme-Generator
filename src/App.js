import React from 'react'
import Generator from './Generator'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            memes: {},
        }
        this.handleClick = this.handleClick.bind(this)
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

    handleClick(){
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

    render(){
        const currentMeme = this.state.memes
        return (
            <div>
                
                <Generator name={currentMeme.name} key={currentMeme.id} imgUrl={currentMeme.url} handleClick={this.handleClick}/>

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
