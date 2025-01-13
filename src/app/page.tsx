import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import Cards from "@/sections/cards";
import BuildStages from "@/sections/BuildStages";
import RiteQuality from "@/sections/RiteQuality";
import YandexMapWithPoints from "@/components/YandexMapWithPoints";
import ReviewsSection from "@/components/ReviewsSection";
import BlockText from "@/components/BlockText";
import About from "@/sections/about";
export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <RiteQuality />
      <BuildStages />
      <About />
      <YandexMapWithPoints />
      <ReviewsSection />
      <BlockText />
    </>
  );
}
