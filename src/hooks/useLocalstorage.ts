import { useCallback, useState } from "react";

interface LocalstorageReturnVal<T> {
  value: T;
  addValueToStorage: (val: T) => void;
  removeValueFromStorage: () => void;
}

function useLocalStorage<T>(
  key: string,
  initialValue: T
): LocalstorageReturnVal<T> {
  const [value, setValue] = useState(() => {
    const getValue: string | null = localStorage.getItem(key);
    const parseValue = getValue ? JSON.parse(getValue) : null;
    return parseValue || initialValue;
  });

  const addValueToStorage = useCallback(
    (val: T) => {
      try {
        const stringfyValue = JSON.stringify(val);
        localStorage.setItem(key, stringfyValue);
        setValue(val);
      } catch (e: any) {
        throw new Error("Error", e);
      }
    },
    [key]
  );

  const removeValueFromStorage = useCallback(() => {
    localStorage.removeItem(key);
    setValue(null);
  }, [key]);

  return { value, addValueToStorage, removeValueFromStorage };
}

export default useLocalStorage;
