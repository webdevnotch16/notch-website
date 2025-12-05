"use client";
import { motion as m } from "motion/react";

const HeroContent = ({baseService, title}: { baseService: string, title: string }) => {
    return (
        <>
            <m.h3 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-1 md:my-3"
            >
                {baseService}
            </m.h3>
            <m.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay:0.3, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold"
            >
                {title}
            </m.h1>
        </>
    )
}

export default HeroContent