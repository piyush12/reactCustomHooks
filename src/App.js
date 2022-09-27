import React, { useEffect, useState } from "react";
import useHistory from "./hooks/useHistory";
import "./styles.css";

export default function App() {
  const { state, set, undo, redo, canUndo, canRedo } = useHistory(0);

  return (
    <div className='App'>
      <button onClick={() => set(state + 1)}>Increment</button>
      <button style={{ margin: "0 15px" }} onClick={undo} disabled={!canUndo}>
        Undo
      </button>
      <button disabled={!canRedo} onClick={redo}>
        Redo
      </button>
      <h2>{state}</h2>
    </div>
  );
}
