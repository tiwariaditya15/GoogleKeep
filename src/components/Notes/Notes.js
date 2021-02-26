import Note from "./Note/Note";
import { flex, cards } from "./styles";
export default function Notes({
  notes,
  handlePinNote,
  handleDeleteNote,
  handleEditNote,
  setNote,
}) {
  return (
    <div style={flex}>
      <h1>Pinned</h1>
      <br />
      {notes.map((note) => {
        return note["pin"] ? (
          <Note
            note={note}
            handlePinNote={handlePinNote}
            handleDeleteNote={handleDeleteNote}
            setNote={setNote}
          />
        ) : (
          ""
        );
      })}
      <br />
      <h2>Others</h2> <br />
      {notes.map((note) => {
        return !note["pin"] ? (
          <Note
            note={note}
            handlePinNote={handlePinNote}
            handleDeleteNote={handleDeleteNote}
            setNote={setNote}
          />
        ) : (
          ""
        );
      })}
    </div>
  );
}
