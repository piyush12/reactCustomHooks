import React from "react";
import useCopyToClipboard from "./hooks/useCopyToClipboard";
import "./styles.css";

export default function App() {
  const [text, setText] = React.useState("");
  const [value, error, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="App">
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" onClick={() => copyToClipboard(text)}>
          copy text
        </button>

        {error && <p>Unable to copy value: {error}</p>}
        {value && <p>Copied </p>}
      </div>
    </div>
  );
}
