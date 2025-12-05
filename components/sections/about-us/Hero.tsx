"use client";
import Image from "next/image";
import BackgroundImage from '@/public/images/about-us/about-us.png';
import initialLogo from '@/public/images/base/notch-initial-logo.webp'
import { motion as m } from "motion/react";

const Hero = () => {

  return (
    <section className="relative w-full h-[50vh] md:min-h-screen flex justify-center items-center">
      <Image
        src={BackgroundImage}
        alt="About us Background Image"
        fill
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
        placeholder="blur"
        className="object-bottom object-cover"
      />

      <div className="absolute inset-0.5 bg-linear-to-t from-red-notch2 via-red-notch2/5 self-end -mb-1 to-transparent h-[120px]"></div>

      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{ duration: 0.4, delay: 0, y: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        }}}
        className="absolute inset-0 w-full h-[50vh] md:h-[35vh] flex justify-center items-center"
      >
        <Image
            src={initialLogo}
            width={150} 
            height={150}
            loading="lazy" 
            alt="initial logo"
            className="filter drop-shadow-[2px_4px_6px_rgba(0,0,0,0.7)] object-contain h-[70px] md:h-[90px] lg:h-[105px]"
        />
      </m.div>
    </section>
  )
}

export default Hero