import Image from "next/image";
import { ProjectInterface } from "../data";
import { MdArrowBackIos } from "react-icons/md";
import BackButton from "@/components/elements/button/BackButton";

const DetailProjectHero = ({ data }: { data: ProjectInterface }) => {
  const { SrcImageCarousel, title, baseService } = data;
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-screen text-white flex flex-col justify-between items-end">
      <Image
        src={SrcImageCarousel}
        alt={title}
        fill
        priority
        className="absolute inset-0 object-cover object-center brightness-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#251816] via-[#251816]/30 to-transparent" />

      <BackButton className="cursor-pointer relative z-10 w-full p-4 sm:px-7 md:px-14 pt-24 sm:pt-34 flex justify-start items-center duration-300 hover:-translate-x-2">
        <MdArrowBackIos className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" />
        <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl -mb-1">BACK</p>
      </BackButton>

      {/* Content */}
      <div className="relative z-10 w-full p-4 sm:px-7 md:px-14 pb-10 sm:pb-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-1 md:my-3">{baseService}</h3>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default DetailProjectHero;