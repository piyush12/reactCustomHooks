import React, { Fragment } from "react";
import { useMap } from "./hooks/useMap";
import "./styles.css";

export default function App() {
  const initialValues = [["key", "🆕"]];

  const [map, actions] = useMap(initialValues);

  const set = () => actions.set("hello", "33");
  const reset = () => actions.reset();
  const remove = () => actions.remove("hello");

  return (
    <div className="App">
      <button onClick={set}>Add</button>
      <button onClick={reset}>Reset</button>
      <button onClick={remove}>{'Remove "hello"'}</button>

      <pre>
        Map (
        {Array.from(map.entries()).map(([key, value]) => (
          <Fragment key={key}>{`\n  ${key}: ${value}`}</Fragment>
        ))}
        <br />)
      </pre>
    </div>
  );
}
