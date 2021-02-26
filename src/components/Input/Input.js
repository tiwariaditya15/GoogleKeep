import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { IoColorPaletteSharp } from "react-icons/io5";
import { useState } from "react";
import { card, colors, input, pin, flexEnd } from "./styles";
import ColorPallets from "../ColorPallets/ColorPallets";

export default function Input({ handleAddNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    pin: false,
    color: "inherit",
    foreground: "inherit",
    close: false,
    tags: [],
  });
  const [toggle, setToggle] = useState(false);
  const [colorSelector, setColorSelector] = useState(false);
  const handleClick = (e) => {
    if (note["title"].length && note["content"].length) {
      handleAddNote(note);
      setToggle(false);
      setNote({
        title: "",
        content: "",
        pin: false,
        color: "inherit",
        foreground: "inherit",
        close: false,
        tags: [],
      });
    } else {
      setToggle(true);
    }
  };
  // console.log("input>>", note);
  return (
    <section
      style={{
        ...card,
        backgroundColor: note["color"],
        color: note["foreground"],
        border: "0.2rem solid",
      }}
    >
      <div style={{ maxWidth: "100%" }}>
        {/* pin */}
        <div style={flexEnd}>
          {note["pin"] ? (
            <span
              onClick={(e) => {
                setNote({ ...note, pin: !note["pin"] });
              }}
              style={pin}
            >
              <AiFillPushpin />
            </span>
          ) : (
            <span
              onClick={(e) => {
                setNote({ ...note, pin: !note["pin"] });
              }}
              style={pin}
            >
              <AiOutlinePushpin />
            </span>
          )}
        </div>

        {/* title and content */}
        <div>
          <input
            type="text"
            name="title"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            placeholder="Enter title"
            value={note["title"]}
            style={{
              ...input,
              backgroundColor: note["color"],
              color: note["foreground"],
            }}
          />
        </div>

        <div>
          <textarea
            type="text"
            name="content"
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            placeholder="Enter note"
            value={note["content"]}
            style={{
              ...input,
              backgroundColor: note["color"],
              color: note["foreground"],
            }}
          ></textarea>
        </div>

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

        {/* buttons */}
        <div>
          <button
            onClick={handleClick}
            style={{
              ...input,
              backgroundColor: note["color"],
              color: note["foreground"],
              border: "1px solid",
            }}
          >
            Add
          </button>
          <button
            onClick={() =>
              setNote({
                title: "",
                content: "",
                pin: false,
                color: "inherit",
                foreground: "inherit",
                close: false,
                tags: [],
              })
            }
            style={{
              ...input,
              backgroundColor: note["color"],
              color: note["foreground"],
              border: "1px solid",
            }}
          >
            Clear
          </button>
        </div>

        <div>
          {toggle ? (
            <>
              <span>Title or Note is empty</span> &nbsp;&nbsp;
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={(e) => setToggle(false)}
              >
                <ImCancelCircle />
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
