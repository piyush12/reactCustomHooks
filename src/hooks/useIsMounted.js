import { useEffect, useRef } from "react";

function useIsMounted() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted.current;
}

export default useIsMounted;
