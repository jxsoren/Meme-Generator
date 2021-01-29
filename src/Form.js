import React from 'react'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input 
                    type= "text"
                    name = "topText"
                    placeholder = "Top Text"
                    onChange={props.handleChange}
                    value = {props.topText}
                    maxLength = "10"
                />

                <input 
                    type= "text"
                    placeholder = "Bottom Text"
                    value = {props.bottomText}
                    name = "bottomText"
                    onChange={props.handleChange}
                    maxLength = "10"
                />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
