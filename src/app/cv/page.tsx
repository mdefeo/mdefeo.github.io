import HeroSection from "@/components/HeroSection";
import { Achievements, Awards, Education, Entrepreneurship, Experience, Intro, Skills, Summary } from "./sections";

export default function CVPage() {
  return (
    <div id="main-content" className="focus:outline-none">
      <HeroSection id="intro">
        <Intro />
      </HeroSection>
      <HeroSection id="summary">
        <Summary />
      </HeroSection>
      <HeroSection id="experience">
        <Experience />
      </HeroSection>
      <HeroSection id="entrepreneurship">
        <Entrepreneurship />
      </HeroSection>
      <HeroSection id="education">
        <Education />
      </HeroSection>
      <HeroSection id="skills">
        <Skills />
      </HeroSection>
      <HeroSection id="achievements">
        <Achievements />
      </HeroSection>
      <HeroSection id="awards">
        <Awards />
      </HeroSection>
    </div>
  );
}