import React, {useState} from "react";

function Input(props){

    return (
        <input 
        type="text" 
        value ={props.value} 
        id="userInput" 
        placeholder= {props.tempHolder} 
        autoFocus autoComplete="off"
        onChange={props.onChange}
        />
    );
}


export default Input;
