import React from 'react'
import Form from "./Form"
function Generator(props) {
        return (
            <div>
                <div id="genParent">
                    <h1>React Meme Generator!</h1>
                    <Form state={props.state} onChange={props.onChange}/>
                    <div className="memeFormat">
                        <form>
                            <div className="imageBox">
                                <img src={props.imgUrl} alt="meme"/>
                                <h2 className="top">{props.state.topText}</h2>
                                <h2 className="bottom">{props.state.bottomText}</h2>
                            </div>
                            <h3>Meme Name: {props.name}</h3>
                            <button onClick={props.handleClick}>New Meme</button>
                        </form>
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