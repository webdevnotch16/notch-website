"use client";
import AppleCarousel from "@/components/elements/carousel/AppleCarousel";
import { allProjects } from "./data";
import { motion as m } from "motion/react";
import React from "react";

const ProjectCarousel: React.FC = () => {
    return (
        <React.Fragment>
            <m.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                className="tracking-wide text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center w-[90%] sm:w-[80%] md:w-[75%] lg:w-[65%]"
            >
                This <b>portfolio</b> shows how we&apos;ve helped brands land by understanding
                their orbit, mapping the emotional terrain, and crafting ideas that connect
                with clarity and purpose.
            </m.h1>
            <section
                className="w-full py-10 flex flex-col justify-start items-center px-2"
                aria-label="Highlighted client projects"
            >
                <h2 className="sr-only">Featured case studies</h2>

                {/* Apple carousel */}
                <AppleCarousel data={allProjects} />

            </section>
        </React.Fragment>
    );
};

export default ProjectCarousel;