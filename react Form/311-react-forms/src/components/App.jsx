import React, {useState} from "react";

function App() {

  const [name, setName] = useState("");
  const [greeting,setGreeting] = useState("Hello ");
  
  function handleChange(event){
    setName(event.target.value);
  }
  function handleGreet(){
    setGreeting("Hello "+ name);
  }




  return (
    <div className="container">
      <h1>{greeting} </h1>
      <input
      onChange = {handleChange}
      type="text" 
      placeholder="What's your name?" 
      value = {name}
      />
      <button onClick = {handleGreet}>Submit</button>
    </div>
  );
}

export default App;
