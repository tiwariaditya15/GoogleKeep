import { useState } from "react";
import Notes from "./components/Notes/Notes";
import Input from "./components/Input/Input";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (note) => {
    setNotes([...notes, { ...note, id: Math.floor(Math.random() * 100) + 1 }]);
  };
  const handleDeleteNote = (e, id) => {
    setNotes(notes.filter((note) => note["id"] !== id));
  };
  const handlePinNote = (e, id) => {
    setNotes(
      notes.map((note) => {
        return note["id"] === id
          ? {
              ...note,
              pin: !note["pin"],
            }
          : {
              ...note,
            };
      })
    );
  };
  const handleChangeColor = (changedNote) => {
    setNotes(
      notes.map((note) => {
        return note["id"] === changedNote["id"]
          ? {
              ...changedNote,
            }
          : {
              ...note,
            };
      })
    );
  };
  const handleEditNote = (e, id) => {};
  console.log(notes);
  return (
    <div className="App">
      <Input handleAddNote={handleAddNote} />
      <br />
      <br />
      <Notes
        notes={notes}
        handlePinNote={handlePinNote}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}
        setNote={handleChangeColor}
      />
    </div>
  );
}

export default App;
