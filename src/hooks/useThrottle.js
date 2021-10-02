import { useMemo, useState } from "react";

function useThrottle(value, delay) {
  const [throtlledvalue, setThrottledValue] = useState(value);

  const throttledEventHandle = useMemo(
    () => throttle(setThrottledValue, delay),
    [delay]
  );

  return [throtlledvalue, throttledEventHandle];
}

export default useThrottle;

export function throttle(fn, delay) {
  let timer;
  return function (...args) {
    let context = this;
    if (!timer) {
      fn.apply(context, args);
      timer = true;
      setTimeout(() => {
        timer = false;
      }, delay);
    }
  };
}
