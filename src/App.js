import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import "./styles.css";

export default function App() {
  const { status, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
