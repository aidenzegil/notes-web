import "./styling/App.css";
import { useState, useEffect } from "react";
import "./firebase";
import { getDatabase, ref, update, onValue } from "firebase/database";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [takingNote, setTakingNote] = useState(true);
  const [nav, setNav] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notesObject, setNotesObject] = useState({"placeholder": "object"});
  const notesRef = ref(getDatabase(), "notes");

  function getNotes() {
    return onValue(notesRef, (snapshot) => {
      const notes = Object(snapshot.val());
      handleNav(Object.keys(notes).sort());
      setNotesObject(notes);
    });
  }

  function sendNote() {
    update(notesRef, {
      [title]: body,
    });
    setTitle("");
    setBody("");
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
  }

  function handleSwitch() {
    setTakingNote(true);
    setSelectedNote(null);
  }

  useEffect(() => {
    getNotes();
    console.log("useEffect");
  }, []);

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
          <button
            style={{ width: "fit-content", fontSize: 30 }}
            className="Add"
            onClick={sendNote}
          >
            Post
          </button>
        </div>
      ) : (
        <div className="NoteContainer">
          <header className="Header">{selectedNote}</header>
          <body className="Header">{notesObject[selectedNote]}</body>
          <button className="Add" onClick={handleSwitch}>
            {" "}
            +{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
