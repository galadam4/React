import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(note){
    console.log(note);
    setItems((prev) =>{
      return [...prev,note]
    });
  }
  function deleteItem(id){
      setItems((prev) => {
        return prev.filter((item,index) =>{
          return index !== id;

        });
      });
  }
  return (
    <div>
      <Header />
      <CreateArea
        onAdd = {addItem}  //sending the function addItem, as a prop to CreateArea.jsx
      />
      {items.map((currentNote,index) => {
         return (<Note 
            key = {index}
            id = {index}
            title = {currentNote.noteTitle}
            content = {currentNote.noteContent}
            onDelete = {deleteItem} //sending the function onDelete, as a prop to Note.jsx
          />);
      })}
      <Footer />
    </div>
  );
}

export default App;
