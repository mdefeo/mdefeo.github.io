import HeroSection from "@/components/HeroSection";
import { Bands, Favorites, Gear, Music } from "./sections";

export default function MusicPage() {
  return (
    <div id="main-content" className="focus:outline-none">
      <HeroSection id="bands">
        <Bands />
      </HeroSection>
      <HeroSection id="music">
        <Music />
      </HeroSection>
      <HeroSection id="favorites">
        <Favorites />
      </HeroSection>
      <HeroSection id="gear">
        <Gear />
      </HeroSection>
    </div>
  );
}