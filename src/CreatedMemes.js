import React from 'react'

function CreatedMemes(props){
    return(
        <div>
            <div className="genParent">
                <span className="imageBox">
                    <p className="topText">{props.topText}</p>   
                    <img src={props.url} alt="meme"/>
                    <p className="bottomText">{props.bottomText}</p>
                </span>
            </div>
            <hr />
        </div>
    )
}

export default CreatedMemes