import "./styling/App.css";
import { useState, useEffect } from "react";
import {postNote} from './utils/postNote'

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [takingNote, setTakingNote] = useState(true);
  const [nav, setNav] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const testObject = {
    ctest1: "testBody1",
    btest2: "testBody2",
    atest3: "testBody3",
  };

  function getNotes() {
    //fetch list of notes from backend
    //will be called on start up and when new notes are submitted
  }

  const handleClick = (e) => {
    setSelectedNote(e.target.value);
    setTakingNote(false);
  };

  function handleNav(navArray, navButtons = []) {
    if (navButtons.length >= navArray.length) return setNav(navButtons);

    const newNavButton = (
      <button
        value={navArray[navButtons.length]}
        className="NavBtn"
        onClick={handleClick}
      >
        {navArray[navButtons.length]}
      </button>
    );

    return handleNav(navArray, [...navButtons, newNavButton]);
    //would this be better as a component?
  }

  function sendNote() {
    return postNote(title, body)
  }

  function handleSwitch() {
    setTakingNote(true)
    setSelectedNote(null);
  }

  useEffect(() => {
    handleNav(Object.keys(testObject).sort());
    console.log("useEffect");
  }, []);



  console.log(Object.keys(testObject).sort());
  console.log(selectedNote);
  return (
    <div className="App">
      <div className="NavContainer">
        <div className="Nav">{nav}</div>
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
            style={{ height: 600 }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button style={{ width: "fit-content", fontSize: 30}}className="Add" onClick={sendNote}>Post</button>
        </div>
      ) : (
        <div className="NoteContainer">
          <header className="Header">{selectedNote}</header>
          <body className="Header">{testObject[selectedNote]}</body>
          <button className="Add" onClick={handleSwitch}> + </button>
        </div>
      )}
    </div>
  );
}

export default App;
