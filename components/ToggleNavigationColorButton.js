import HeaderContext from "../contexts/HeaderContext";
import { useContext } from "react";

export default function ToggleNavigationColorButton() {
  const { color, toggleColor } = useContext(HeaderContext);

  return <button onClick={() => toggleColor(!color)}>Toggle</button>;
}
