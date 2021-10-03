import { useCallback, useState } from "react";

function useToggle(initialState = false) {
  const [isToggle, setIsToggle] = useState(initialState);

  const toggle = useCallback(() => {
    setIsToggle((isToggle) => !isToggle);
  }, []);
  return { isToggle, toggle };
}

export default useToggle;
