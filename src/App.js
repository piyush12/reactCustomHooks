import { useRef, useState } from "react";
import usePrevious from "./hooks/usePrevious";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const previousValue = usePrevious(value);

  const handleIncrement = () => {
    setValue((v) => v + 1);
  };

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <p>{value}</p>
      <p>previousValue : {previousValue} </p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
