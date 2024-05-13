import React from "react";

function Score(props){
    return(
        <h3> Total Score:&nbsp;  
            <span id="score">
                {props.currentScore}
            </span>
        </h3>
    );
}

export default Score;