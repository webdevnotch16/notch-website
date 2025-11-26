import parse from 'html-react-parser';

const TheResults = ({theResult}: {theResult: string}) => {
  return (
    <div className="w-full pt-18 text-center flex flex-col justify-start items-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -rotate-3 mb-3 sm:mb-5 md:mb-7 lg:mb-8 xl:mb-9">
        The Results
      </h2>
      {parse(theResult)}
    </div>
  );
};

export default TheResults;
