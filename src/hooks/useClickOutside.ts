import { MutableRefObject, RefObject, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T> | MutableRefObject<T>,
  handler: EventListener
) {
  useEffect(() => {
    const clickHandler = (event: Event) => {
      const { target } = event;
      if (!ref.current || ref.current.contains(target as Node)) {
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
