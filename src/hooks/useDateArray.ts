// import React from "react";

function useDateArray(month: number, year: number) {
  const numsDayInMonth = new Date(year, month + 1, 0).getDate();
  const firstDate = new Date(year, month);
  const firstDay = firstDate.getDay();

  const dateArray: (number | string)[] = [];

  for (let i = 0; i < 35; i++) {
    const number = i + 1 - firstDay;
    if (i < firstDay || number > numsDayInMonth) {
      dateArray.push("");
    } else {
      dateArray.push(number);
    }
  }
  return dateArray;
}

export default useDateArray;
