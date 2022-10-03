import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc]);

  return <>{children}</>;
};

export default ScrollToTop;
