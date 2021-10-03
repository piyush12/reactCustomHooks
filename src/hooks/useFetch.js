import { useEffect } from "react";
import useAsync from "./useAsync";

function useFetch(
  url,
  options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
) {
  const { run, status, error, data } = useAsync();

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (!url) return;
    run(fetchData);
  }, [url]);

  return {
    status,
    data,
    error
  };
}

export default useFetch;
