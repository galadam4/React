import React, {useState} from "react";
import Li from "./Li";

function App() {
  const [text, setText] = useState("");
  const [currentArray,setArray] = useState([])

  function handleText(event){
      const {value} = event.target;
      return setText(value);
  }
  
  function handleClick(){
    if(text === "") return;
     setArray((prevValue)=>{
      return [...prevValue,text];
    });
    setText("");
  }
  function isEnter(event){
    event.key === "Enter" && handleClick();
  }

  //rendered in index.jsx
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        type="text"
        onChange = {handleText}
        value = {text}
        onKeyDown={isEnter}
        />
        <button 
        onClick ={handleClick}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {currentArray.map((item, index) => 
            <Li
            key = {index}
            item = {item}
            />
            
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
