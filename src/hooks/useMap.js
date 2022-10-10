import React, { useCallback, useState } from "react";

export function useMap(initialValues) {
  const [map, setMap] = useState(initialValues);

  const actions = {
    set: useCallback((key, val) => {
      setMap((prev) => {
        const copy = new Map(prev);
        copy.set(key, val);
        return copy;
      });
    }, []),

    reset: useCallback(() => {
      const map = new Map();
      setMap(() => map);
    }, []),

    remove: useCallback((key) => {
      setMap((prev) => {
        const copy = new Map(prev);
        copy.delete(key);
        return copy;
      });
    }, []),
  };

  return [map, actions];
}
