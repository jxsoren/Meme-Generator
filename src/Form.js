import React from "react"

function Form(props) {
    return (
        <div>
            <form>
                <input
                type="text" 
                placeholder="Top Text"
                name="topText"
                value={props.state.topText}
                onChange={props.onChange}
                />
                <input 
                type="text"
                placeholder="Bottom Text"
                name="bottomText"
                value={props.state.bottomText}
                onChange={props.onChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
