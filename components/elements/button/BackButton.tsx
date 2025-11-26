"use client";
import { useRouter } from 'next/navigation'

type Props = {
    className: string,
    children: React.ReactNode
}

const BackButton = ({className, children}: Props) => {
    const router = useRouter();
  return (
    <button  className={className} onClick={() => router.back()}>{children}</button>
  )
}

export default BackButton