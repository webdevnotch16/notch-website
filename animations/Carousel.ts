import { Variants } from "framer-motion";

const parentAppleCarousel: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
        }
    }
}

const childAppleCarousel: Variants = {
    hidden: { y: '100%' },
    show: {
        y: '0%',
        transition: {
            duration: 0.1,
        }
    }
}

export { parentAppleCarousel , childAppleCarousel };