import React, { useState } from "react";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("");

    React.useEffect(() => {
        let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop;
            const direction = scrollY > lastScrollY ? "down" : "up";

            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
            ) {
                setScrollDirection(direction);
            }

            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollDirection]);

    return scrollDirection;
}

export default useScrollDirection;
