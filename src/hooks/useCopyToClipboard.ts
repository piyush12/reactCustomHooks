import React, { useState } from "react";

type ReturnType = [
  value: string,
  error: string,
  copyToClipboard: (value: string) => void
];

function useCopyToClipboard(): ReturnType {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const copyToClipboard = (text: string) => {
    if (!text) {
      setError("Must not be blank");
      setValue("");
      return;
    }
    if (!navigator.clipboard) {
      setError("Not Supported");
      setValue("");
      return;
    }

    navigator.clipboard.writeText(text).then(
      function () {
        /* clipboard successfully set */
        setValue(text);
        setError("");
      },
      function (error) {
        /* clipboard write failed */
        setValue("");
        setError(error);
      }
    );
  };

  return [value, error, copyToClipboard];
}

export default useCopyToClipboard;