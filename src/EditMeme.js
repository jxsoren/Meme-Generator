import React from "react"

function EditMeme(props) {
    return (
        <div>
            <form>
                <input 
                placeholder="Top Text"
                type="text"
                name="topText"
                data-number={props.id}
                onChange={props.handleEditChange}
                />         
                <input 
                placeholder="Bottom Text"
                type="text"
                name="bottomText"
                data-number={props.id}
                onChange={props.handleEditChange}
                />         
                <button onClick={props.handleSave} data-number={props.id}>Save</button>
            </form>
        </div>
    )
}

export default EditMeme
