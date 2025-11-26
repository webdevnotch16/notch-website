import NotFound from "@/app/not-found";
import { allProjects } from "@/components/sections/project/data";
import CampaignName from "@/components/sections/project/detail/CampaignName";
import ChallengeAndSolution from "@/components/sections/project/detail/ChallengeAndSolution";
import DetailDescription from "@/components/sections/project/detail/DetailDescription";
import DetailImage from "@/components/sections/project/detail/DetailImage";
import DetailProjectHero from "@/components/sections/project/detail/DetailProjectHero";
import TheResults from "@/components/sections/project/detail/TheResults";
import { Metadata } from "next";
import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const {id} = await params;
  const data = allProjects.find((b) => b.id === id);
  
  if (!data) {
      return {
          title: "Brand Not Found — Notch",
          description: "This brand portfolio does not exist in our orbit.",
      };
  }

  const { title, carouselDescription } = data;
  
  return {
      title: `${title} | Notch Creative Agency`,
      description: carouselDescription,
      openGraph: {
        title,
        description: carouselDescription,
        type: "article",
        url: `/projects/${id}`
      },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const brand = allProjects.find((b) => b.id === id);

  if(!brand) {
    return NotFound();
  }

  return (
    <section id="#top-project" className="w-full text-white bg-[#251816]">
      <DetailProjectHero data={brand} />
      <CampaignName campaignName={brand.campaignName} />
      <DetailDescription data={brand} />
      <DetailImage title={brand.title} images={brand.detailImages} />
      <ChallengeAndSolution challenge={brand.challenge} solution={brand.solution} />
      {brand.theResult && <TheResults theResult={brand.theResult}/>}
      <div className="bottom-5 right-5  flex items-center justify-end p-5">
          <Link href="#top-project" className="flex flex-col items-center leading-none text-white hover:text-red-notch2 hover:-translate-y-2 duration-150">
            <MdKeyboardDoubleArrowUp className="text-4xl md:text-7xl" />
            <p className="-my-1 text-xs md:text-lg">Back to</p>
            <p className="m-0 text-xs md:text-lg">top</p>
          </Link>
      </div>
    </section>
  );
}
