import React from 'react'
import Form from "./Form"

function Generator(props) {
        return (
            <div>
                <div className="genParent">

                    <h1>React Meme Generator!</h1>

                    <Form 
                        topText = {props.topText}
                        bottomText = {props.bottomText}
                        handleChange = {props.handleChange} 
                        handleSubmit = {props.handleSubmit}
                    />

                    <div className="memeFormat">
                        <span className="imageBox">
                            <p className="topText">{props.topText}</p>
                
                            <img src={props.imgUrl} alt="meme"/>

                            <p className="bottomText">{props.bottomText}</p>
                        </span>
                        <h3>Meme Name: {props.name}</h3>
                        <button onClick={props.handleClick}>New Meme</button>
                    </div>
                </div>

                <div className="userCreatedMemes">
                    <hr />
                    <h1>Created Memes</h1>
                </div>

            </div>
        )
}
export default Generator