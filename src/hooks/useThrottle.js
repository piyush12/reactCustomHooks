import { useEffect, useState } from "react";

function useThrottle(value, delay) {
  const [throtlledvalue, setThrottledValue] = useState(value);

  useEffect(() => {
    const timer = setInterval(() => setThrottledValue(value), delay);

    return () => clearInterval(timer);
  }, [value, delay]);

  return throtlledvalue;
}

export default useThrottle;

function throttle(fn, delay) {
  let timer;

  return function (...args) {
    timer = setInterval(() => fn(...args), delay);

    if (timer) {
      clearInterval(timer);
    }
  };
}
