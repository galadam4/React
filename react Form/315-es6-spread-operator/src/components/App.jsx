import React, { useState } from "react";

function App() {
  //declare useState to hold dynamic proparties for the form element.
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  //handle useState change
  function handleChange(event){
    const {name, value} = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name] : value
      };
    });
  }

  //all this is what gets rendered, 
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange = {handleChange} value = {contact.fName} name="fName" placeholder="First Name" />
        <input onChange = {handleChange} value = {contact.lName} name="lName" placeholder="Last Name" />
        <input onChange = {handleChange} value = {contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
