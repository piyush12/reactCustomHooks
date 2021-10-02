import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("debouncedValue", debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
