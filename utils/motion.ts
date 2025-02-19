// utils/motions.ts
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const buttonVariants = {
  initial: { x: "-100%" },
  hover: { x: 0 },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
