import HeroSection from "@/components/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Bands, Favorites, Gear, Songs } from "./sections";

export { generateMetadata } from "./metadata";

export default function MusicPage() {
  return (
    <ClientPageNavigation>
      <section id="music-main-content" className="focus:outline-none">
        <h1 className="sr-only">Music Page Sections</h1>
        <HeroSection id="bands" slide="1">
          <Bands />
        </HeroSection>
        <HeroSection id="songs" slide="2">
          <Songs />
        </HeroSection>
        <HeroSection id="favorites" slide="3">
          <Favorites />
        </HeroSection>
        <HeroSection id="gear" slide="4">
          <Gear />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}
