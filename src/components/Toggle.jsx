import React, { useState } from "react";

function Toggle({ children }) {
  const [toggle, setToggle] = useState(true);
  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
}

export default Toggle;
