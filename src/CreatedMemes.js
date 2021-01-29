import React from 'react'

function CreatedMemes(props){
    return(
        <div>
            <div className="genParent">
                <span className="imageBox">
                    <p className="topText"></p>   
                    <img src={props.imgUrl} alt="meme"/>
                    <p className="bottomText"></p>
                </span>
            </div>
        </div>
    )
}

export default CreatedMemes