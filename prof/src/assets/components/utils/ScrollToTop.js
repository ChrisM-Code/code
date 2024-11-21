import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { Link } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Link]);

  return null;
}

export default ScrollToTop;
