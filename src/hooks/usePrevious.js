import { useEffect, useRef } from "react";

function usePrevious(value) {
  const previous = useRef(value);

  useEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
}

export default usePrevious;
