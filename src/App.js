import { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";
import "./styles.css";

export default function App() {
  const ref = useRef();
  const clickOutside = () => {
    console.log("clickOutside");
  };
  useClickOutside(ref, clickOutside);
  const clickedInside = () => {
    console.log("clicked button");
  };

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <button ref={ref} onClick={clickedInside}>
        Toggle
      </button>
    </div>
  );
}
