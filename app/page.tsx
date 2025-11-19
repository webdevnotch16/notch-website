import BrandTrusted from "@/components/sections/home/BrandTrusted";
import Hero from "@/components/sections/home/Hero";
import LandingPage from "@/components/sections/home/LandingPage";
import Portfolio from "@/components/sections/home/Portfolio";
import ServiceStation from "@/components/sections/home/ServiceStation";
import Testimoni from "@/components/sections/home/Testimoni";

export default function Home() {
  return (
    <main className="w-full bg-[#2e0102] text-white">
      <LandingPage />
      {/* <Hero />
      <BrandTrusted />
      <ServiceStation /> */}
      <Portfolio />
      <Testimoni />
    </main>
  );
}
