import { ProjectInterface } from "../data";

const DetailDescription = ({ data }: { data: ProjectInterface }) => {
  const { detailDescription } = data;
  if (!detailDescription) {
    return <></>;
  } else {
    return (
      <div className="w-full py-5 md:py-10 text-center flex flex-col justify-center items-center">
        {detailDescription.map((paragraph, index) => (
            <p key={index} className="px-3 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl my-4 sm:my-5 text-xs sm:text-xl md:text-2xl">{paragraph}</p>
        ))}
      </div>
    );
  }
};

export default DetailDescription;
