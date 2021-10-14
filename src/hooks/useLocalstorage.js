import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const getValue = localStorage.getItem(key);
    const parseValue = JSON.parse(getValue) || null;
    return parseValue;
  });

  const addValueToStorage = (val) => {
    try {
      const stringfyValue = JSON.stringify(val);
      localStorage.setItem(key, stringfyValue);
      setValue(val);
    } catch (e) {
      throw new Error("Error", e);
    }
  };

  const removeValueFromStorage = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, addValueToStorage, removeValueFromStorage };
}

export default useLocalStorage;
