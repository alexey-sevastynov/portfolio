export const animateCoverCol1 = {
    hidden: {
        x: "-100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
    },
};
export const animateCoverCol2 = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1 },
    },
};

export const animateSkillsCol1 = {
    hidden: {
        x: -20,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export const animateSkillsCol2 = {
    hidden: {
        x: 20,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export const containerAnimation = {
    hidden: { opacity: 0, y: 23 },
    visible: (custom: any) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.4 },
    }),
};

export const containerAnimationOpacity = {
    hidden: { opacity: 0 },
    visible: (custom: any) => ({
        opacity: 1,
        transition: { delay: custom * 0.4, duration: 1 },
    }),
};
