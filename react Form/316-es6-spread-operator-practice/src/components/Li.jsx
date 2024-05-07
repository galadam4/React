import React, {useState} from "react";

function Li(props){
    const lineThroughStyle = {
        textDecoration: 'line-through',
      };
    const [isStriked,setIsStriked] = useState(false);
    function handlClick(){
        setIsStriked((prev) => {
           return !prev
        });
    }
    return <li 
    onClick = {()=> {
        props.onChecked(props.id)
    }}
    style = {isStriked ? lineThroughStyle : {}}
    >{props.item}</li>
}
export default Li;