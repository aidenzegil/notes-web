import "./styling/App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [takingNote, setTakingNote] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null)
  const testObject = { "test1" : "testBody1", "test2" : "testBody2", "test3" : "testBody3" };

  function getNotes() {
  //fetch list of notes from backend
  //will be called on start up and when new notes are submitted
  }
  
  function handleNav() {
    //takes in object from getNotes list
    //creates a list from object keys using Object.keys(object)
    //alphebetically organizes keys
    //makes a button from each key that displays value
    //set selected note to obj key that is clicked
    //returns array of buttons
    //would this be better as a component?
  }

  function sendNote() {
    //post title and body to backend
  }
  console.log(Object.keys(testObject));








  return (
    <div className="App">
      <div className="NavContainer">
        <div className="Nav">

        </div>
      </div>
      {takingNote ? (
        <div className="NoteContainer">
          <header className="Header">Title:</header>
          <textarea
            className="Input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <header className="Header">Note:</header>
          <textarea
            className="Input"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      ) : (
        <div className="NoteContainer">
          <header className="Header">Title</header>
          <body className="note"> This is where a note would be </body>
          <button onClick={setTakingNote(true)}> + </button>
        </div>
      )}
    </div>
  );
}

export default App;
