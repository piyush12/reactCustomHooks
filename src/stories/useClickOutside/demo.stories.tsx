import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export function Demo() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setOpen(false));

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Show Box
      </button>
      {open && (
        <div
          style={{
            width: 200,
            height: 200,
            background: "#2196f3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            marginTop:15
          }}
          ref={ref}
        >
          Click Outside to hide
        </div>
      )}
    </div>
  );
}
