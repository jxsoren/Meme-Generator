import React from 'react'
import EditMeme from "./EditMeme"

function CreatedMemes(props){
    return(
        <div>
            <div className="genParent">
                <span className="imageBox">
                    <p className="topText">{props.topText}</p>   
                    <img src={props.url} alt="meme"/>
                    <p className="bottomText">{props.bottomText}</p>
                </span>
                <button className="deleteButton" onClick={() => props.handleDelete(props.id)}>Delete</button>
                <button className="editButton" onClick={() => props.handleEdit(props.id)}>Edit</button>
                <div>
                    {props.item.isEditing === true ? <EditMeme id={props.item.uniqueId} handleEditChange={props.handleEditChange} handleSave={props.handleSave}/> : null}
                </div>
                
            </div>
            <hr />
        </div>
    )
}

export default CreatedMemes