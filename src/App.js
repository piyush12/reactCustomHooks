import { useEffect } from "react";
import useAsync from "./hooks/useAsync";
import "./styles.css";

const asyncData = () =>
  new Promise((resolve, reject) => {
    return resolve("success");
  });

export default function App() {
  const { status, data, run } = useAsync();

  useEffect(() => {
    run(asyncData);
  }, [run]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
