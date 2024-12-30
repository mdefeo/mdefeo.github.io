// /src/app/page.tsx
// /src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import { About, Chat, Hello, Personal, Professional, Writing } from "./about/sections";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import SectionTransitions from "@/components/SectionTransitions"; // Import the SectionTransitions component

export { generateMetadata } from "./about/metadata";

export default function HomePage() {
  return (
    <ClientPageNavigation>
      <section id="home-main-content" className="focus:outline-none">
        <h1 className="sr-only">About Page Sections</h1>
        <SectionTransitions />
        <HeroSection id="hello" slide="1" data-slide="1">
          <Hello />
        </HeroSection>
        <HeroSection id="about" slide="2" data-slide="2">
          <About />
        </HeroSection>
        <HeroSection id="chat" slide="3" data-slide="3">
          <Chat />
        </HeroSection>
        <HeroSection id="personal" slide="4" data-slide="4">
          <Personal />
        </HeroSection>
        <HeroSection id="professional" slide="5" data-slide="5">
          <Professional />
        </HeroSection>
        <HeroSection id="writing" slide="6" data-slide="6">
          <Writing />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}
