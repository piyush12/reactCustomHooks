import { useEffect } from "react";

function useClickOutside(ref, handler) {

  useEffect(() => {
    const clickHandler = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener(`mousedown`, clickHandler);
    document.addEventListener(`touchstart`, clickHandler);

    return () => {
      document.removeEventListener(`mousedown`, clickHandler);
      document.removeEventListener(`touchstart`, clickHandler);
    };
  }, [ref, handler]);
}

export default useClickOutside;
