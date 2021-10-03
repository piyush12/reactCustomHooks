import useToggle from "./hooks/useToggle";
import "./styles.css";

export default function App() {
  const { isToggle, toggle } = useToggle();

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      {isToggle && "Show"}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
