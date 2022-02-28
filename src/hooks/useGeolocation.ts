import { useCallback, useState } from "react";

interface Pos {
  latitude: number;
  longitude: number;
}

interface ReturnType {
  position: Pos | null;
  getLocation: () => void;
}

interface OptionsType {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

let opts: OptionsType = {
  enableHighAccuracy: true,
  timeout: 1000 * 10, //10 seconds
  maximumAge: 1000 * 60 * 5 //5 minutes
};

function useGeoLocation(options: OptionsType = {}): ReturnType {
  const ops: OptionsType = { ...opts, ...options };
  const [position, setPosition] = useState<Pos | null>(null);

  const showPosition = useCallback(
    (position: { coords: { latitude: number; longitude: number } }): void => {
      setPosition({
        latitude: Number(position.coords.latitude.toFixed(2)),
        longitude: Number(position.coords.longitude.toFixed(2))
      });
    },
    []
  );

  function pError() {
    console.log("error");
  }

  const getLocation = useCallback((): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, pError, ops);
    }
  }, []);

  return {
    position,
    getLocation
  };
}

export default useGeoLocation;
