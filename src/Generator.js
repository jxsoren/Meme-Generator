import React from 'react'
import Form from "./Form"
function Generator(props) {
        return (
            <div>
                <div id="genParent">
                    <h1>React Meme Generator!</h1>
                    <Form />
                    <div className="memeFormat">
                        <span className="imageBox">
                            <img src={props.imgUrl} alt="meme"/>
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