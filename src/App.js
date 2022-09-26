import React, { useEffect } from "react";
import useDateArray from "./hooks/useDateArray";
import "./styles.css";

export default function App() {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = React.useState(now.getMonth());
  const [currentYear, setCurrentYear] = React.useState(now.getFullYear());
  const dateArray = useDateArray(currentMonth, currentYear);

  return (
    <div className='App'>
      {dateArray.map((date, index) => (
        <div key={`${date}-${index}`}>{date}</div>
      ))}
    </div>
  );
}
