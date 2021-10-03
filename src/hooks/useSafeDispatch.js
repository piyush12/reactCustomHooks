import { useCallback, useLayoutEffect, useRef } from "react";

function useSafeDispatch(unsafeDispatch) {
  const isMounted = useRef(false);
  useLayoutEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const dispatch = useCallback(
    (...args) => {
      if (isMounted.current) {
        unsafeDispatch(...args);
      }
    },
    [unsafeDispatch]
  );

  return dispatch;
}

export default useSafeDispatch;
