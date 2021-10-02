import { useEffect, useState } from "react";
import useIsMounted from "./hooks/useIsMounted";
import "./styles.css";

export default function App() {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      console.log("Mounted");
    }
  }, [isMounted]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
