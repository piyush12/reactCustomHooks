import { useEffect, useState } from "react";
import useThrottle from "./hooks/useThrottle";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const throttledValue = useThrottle(value, 500);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("throttledValue", throttledValue);
  }, [throttledValue]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
