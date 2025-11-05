import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DelayedLorder from "./DelayedLorder"; // path adjust karo

const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // route change start → show loader

    // minimum loader visible time
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <DelayedLorder size={60} text="Loading page..." />}
      {children}
    </>
  );
};

export default RouteLoader;
