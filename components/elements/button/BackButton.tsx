"use client";
import { useRouter } from 'next/navigation'
import { motion as m } from "motion/react"

type Props = {
    className: string,
    children: React.ReactNode
}

const BackButton = ({className, children}: Props) => {
  const router = useRouter();
  return (
    <m.button
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
      onClick={() => router.back()}
    >
    {children}
    </m.button>
  )
}

export default BackButton