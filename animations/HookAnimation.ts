import { useInView } from "motion/react";
import { useRef } from "react";

export const useInViewAnimation = (viewport = { once: true, amount: 0.3 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);
    return [ref, isInView] as const;
};