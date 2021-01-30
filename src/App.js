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
            userMemes: [],
            uniqueId: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditChange = this.handleEditChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
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

    handleSubmit(event) {
        event.preventDefault()
        // this.addMemes(this.state.memes)

        this.setState(prevState  => {
            let id = this.state.uniqueId
            id += 1

            const memeObject = {
                topText: this.state.topText,
                bottomText: this.state.bottomText,
                url: this.state.memes.url,
                uniqueId: id
            }
            
            const userMemes = this.state.userMemes
            userMemes.push(memeObject)
            
            return {
                ...prevState,
                topText: "",
                bottomText: "",
                userMemes: userMemes,
                uniqueId: id,
                isEditing: false
            }
        })
        console.log(this.state.userMemes)
    }

    handleDelete(id) {
        let index
        const memesArray = this.state.userMemes
        for (let i = 0; i < memesArray.length; i++) {
            if (memesArray[i].uniqueId === id) {
                index = i
            }
        }
        memesArray.splice(index, 1)
        this.setState({
            userMemes: memesArray
        })
    }

    handleEdit(id){
        let index
        const memesArray = this.state.userMemes
        for (let i = 0; i < memesArray.length; i++) {
            if (memesArray[i].uniqueId === id) {
                index = i
                memesArray[index].isEditing = true
            }
        }
        this.setState({
            userMemes: memesArray
        })
        //console.log(this.state.userMemes[index].isEditing)
    }

    handleEditChange(event) {
        const {value, name} = event.target
        const dataNumber = event.target.dataset.number
        const id = Number(dataNumber)
        let index
        const memesArray = this.state.userMemes
        for (let i = 0; i < this.state.userMemes.length; i++) {
            if (memesArray[i].uniqueId === id) {
                index = i
            }
        }
        memesArray[index][name] = value
        
        this.setState({
            userMemes: memesArray
        })
    }

    handleSave(event) {
        event.preventDefault()
        const dataNumber = event.target.dataset.number
        const id = Number(dataNumber)
        let index
        const memesArray = this.state.userMemes
        for (let i = 0; i < this.state.userMemes.length; i++) {
            if (memesArray[i].uniqueId === id) {
                index = i
            }
        }
        memesArray[index].isEditing = false
        this.setState({
            userMemes: memesArray
        })
    }


    // addMemes = (createdMeme) => {
    //     this.setState(prevState => {
    //         return {
    //             userMemes: [...prevState.userMemes, createdMeme]
    //         }
    //     })
    //     console.log(this.state.userMemes)
    // }

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
                    item={memes}
                    lastText={this.state.lastText}
                    key={memes.uniqueId}
                    id={memes.uniqueId}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    handleEditChange={this.handleEditChange}
                    handleSave={this.handleSave}
               />
                )} 

            </div>
        )
    }
}

export default App 
