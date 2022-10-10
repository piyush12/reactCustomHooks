import { useEffect, useRef } from "react";

function useIsMounted(): boolean {
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
