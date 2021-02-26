import { colorChooser } from "../Input/styles";
export default function ColorPallets({ pallete, setNote, note }) {
  return (
    <span
      style={{
        ...colorChooser,
        backgroundColor: pallete["backgroundColor"],
        color: "white",
      }}
      onClick={(e) =>
        setNote({
          ...note,
          color: pallete["backgroundColor"],
          foreground: pallete["color"],
        })
      }
    >
      &nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  );
}
