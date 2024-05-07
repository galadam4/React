import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  
  const [note,setNote] = useState({noteTitle : '', noteContent : ''})
  
  
  //function updates note when theres new input
  function changeNote(event){
    const {name, value} = event.target;
    setNote((prevNote)=> ({
    //by using [name] the only part of the object that gets 
    //change is the one that that triggered the event
    //this allows us to use 1 function, and edit both parts of the object, the title and the content
        ...prevNote,
        [name]: value, 
    }));
  }
  //this basically sends a note to App.jsx, to add into an array of Notes.
  //and resets the create area note to be able to accept a new note.
  function handleClick(event){
    event.preventDefault();
    props.onAdd(note);
    setNote({noteTitle : '', noteContent : ''});

  }


  return (
    <div>
      <form>
        <input
         name="noteTitle"
         placeholder="Title" 
         onChange ={changeNote} 
         value = {note.noteTitle} 
         />
        <textarea
         name="noteContent" 
         placeholder="Take a note..." 
         rows="3"
         onChange={changeNote}
         value = {note.noteContent} 
         />
        <button onClick = {handleClick} type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
