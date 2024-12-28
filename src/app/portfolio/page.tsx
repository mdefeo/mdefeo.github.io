import HeroSection from "@/components/HeroSection";
import { Clients, Design, Development, Freelance } from "./sections";

export default function MusicPage() {
  return (
    <div id="main-content" className="focus:outline-none">
      <HeroSection id="clients">
        <Clients />
      </HeroSection>
      <HeroSection id="design">
        <Design />
      </HeroSection>
      <HeroSection id="development">
        <Development />
      </HeroSection>
      <HeroSection id="freelance">
        <Freelance />
      </HeroSection>
    </div>
  );
}