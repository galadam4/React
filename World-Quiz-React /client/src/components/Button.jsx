import React, {useState} from "react";

function Button(props){
    

    return (
        <button
        onClick = {props.onClick}>
        SUBMIT
        </button>
    );

}

export default Button;