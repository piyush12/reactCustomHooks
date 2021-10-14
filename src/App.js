import React from "react";
import useLocalStorage from "./hooks/useLocalstorage";
import "./styles.css";

export default function App() {
  const { value, addValueToStorage, removeValueFromStorage } = useLocalStorage(
    "user"
  );

  const handleChange = (e) => {
    const value = e.target.value;
    addValueToStorage({ user: value });
  };

  const removeItem = () => {
    removeValueFromStorage("user");
  };

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <p>{JSON.stringify(value)}</p>
      <p>
        <input type="text" onChange={handleChange} />
      </p>
      <p>
        <button onClick={removeItem}>Remove</button>
      </p>
    </div>
  );
}
