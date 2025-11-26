type Props = {
    challenge: string;
    solution: string
}

const ChallengeAndSolution = ({ challenge, solution }: Props) => {
  return (
    <div className="w-full pt-10 text-center flex flex-col justify-start items-center">
        <div className="w-full text-center flex flex-col justify-start items-center mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -rotate-3 mb-3 sm:mb-5 md:mb-7 lg:mb-8 xl:mb-9  md:mt-14 lg:mt-16 xl:mt-20">The Challenge</h2>
            <p className="px-3 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl my-1 text-xs sm:text-xl md:text-2xl" dangerouslySetInnerHTML={{ __html: challenge }}></p>
        </div>
        <div className="w-full text-center flex flex-col justify-start items-center mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -rotate-3 mb-3 sm:mb-5 md:mb-7 lg:mb-8 xl:mb-9  md:mt-14 lg:mt-16 xl:mt-20">The Solution</h2>
            <p className="px-3 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl my-1 text-xs sm:text-xl md:text-2xl" dangerouslySetInnerHTML={{ __html: solution }}></p>
        </div>
    </div>
  )
}

export default ChallengeAndSolution