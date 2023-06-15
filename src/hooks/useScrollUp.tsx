import React from "react";

const useScrollUp = () => {
  const [scrollDirection, setScrollDirection] = React.useState("up");

  React.useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollY === 0 ? "up" : "";
      setScrollDirection(direction);
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollUp;
