import React, { useEffect } from "react";
import useAsync from "../../hooks/useAsync";

const asyncData = () =>
  new Promise((resolve, reject) => {
    return resolve("success");
  });

export const Demo = () => {
  const { status, data, run } = useAsync();

  useEffect(() => {
    run(asyncData);
  }, [run]);

  return (
    <div className='App'>
      <button>df</button>
    </div>
  );
};
