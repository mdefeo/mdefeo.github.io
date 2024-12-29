// /src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import { About, Chat, Hello, Personal, Professional, Writing } from "./about/sections";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";

export { generateMetadata } from "./about/metadata";

export default function HomePage() {
  return (
    <ClientPageNavigation>
      <section id="home-main-content" className="focus:outline-none">
        <h1 className="sr-only">About Page Sections</h1>
        <HeroSection id="hello">
          <Hello />
        </HeroSection>
        <HeroSection id="about">
          <About />
        </HeroSection>
        <HeroSection id="chat">
          <Chat />
        </HeroSection>
        <HeroSection id="personal">
          <Personal />
        </HeroSection>
        <HeroSection id="professional">
          <Professional />
        </HeroSection>
        <HeroSection id="writing">
          <Writing />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}
