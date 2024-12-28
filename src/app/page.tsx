import HeroSection from "@/components/HeroSection";
import { About, Chat, Hello, Personal, Professional, Writing } from "./about/sections";

export default function CVPage() {
  return (
    <div id="main-content" className="focus:outline-none">
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
    </div>
  );
}