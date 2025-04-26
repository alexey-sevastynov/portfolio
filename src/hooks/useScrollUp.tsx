import { useEffect, useState } from "react";

const useScrollUp = () => {
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const direction = scrollY === 0 ? "up" : "";
            setScrollDirection(direction);
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollDirection]);

    return scrollDirection;
};

export default useScrollUp;
