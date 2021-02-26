import { useState } from "react";
import { card, icons } from "./styles";
import { AiFillPushpin, AiOutlinePushpin, AiFillDelete } from "react-icons/ai";
import { IoColorPaletteSharp } from "react-icons/io5";
import ColorPallets from "../../ColorPallets/ColorPallets";
import { colors } from "../../Input/styles";
export default function Note({
  note,
  handlePinNote,
  handleDeleteNote,
  setNote,
}) {
  const [colorSelector, setColorSelector] = useState(false);
  return (
    <div
      style={{
        ...card,
        backgroundColor: note["color"],
        color: note["foreground"],
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>{note["title"]}</h3>
        {note["pin"] ? (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            onClick={(e) => handlePinNote(e, note["id"])}
          >
            <AiFillPushpin />
          </span>
        ) : (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem" }}
            onClick={(e) => handlePinNote(e, note["id"])}
          >
            <AiOutlinePushpin />
          </span>
        )}
      </div>
      <h5>{note["content"]}</h5>

      {/* footer in notes to store color palette and delete */}
      <div style={icons}>
        {/* color pallets */}
        <div
          style={{
            maxWidth: "70%",
          }}
        >
          {colorSelector ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100%",
              }}
              onClick={(e) => setColorSelector((prevColor) => !prevColor)}
            >
              <IoColorPaletteSharp style={{ fontSize: "32px" }} />
              {colors.map((pallete) => {
                return (
                  <ColorPallets
                    pallete={pallete}
                    setNote={setNote}
                    note={note}
                  />
                );
              })}
            </div>
          ) : (
            <div onClick={(e) => setColorSelector((prevColor) => !prevColor)}>
              <IoColorPaletteSharp style={{ fontSize: "32px" }} />
            </div>
          )}
        </div>
        <span
          style={{ fontSize: "2rem" }}
          onClick={(e) => handleDeleteNote(e, note["id"])}
        >
          <AiFillDelete />
        </span>
      </div>
    </div>
  );
}
