import React, { useState, useEffect } from "react";
import Lorder from "./Lorder"; // path adjust karo

const DelayedLorder = ({ delay = 150, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;
  return <Lorder {...props} />;
};

export default DelayedLorder;
