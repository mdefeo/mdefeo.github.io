// /src/app/cv/page.tsx
import HeroSection from "@/components/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Achievements, Awards, Education, Entrepreneurship, Experience, Intro, Skills, Summary } from "./sections";

export { generateMetadata } from "./metadata";

export default function CVPage() {
  return (
    <ClientPageNavigation>
      <section id="cv-main-content" className="focus:outline-none">
        <h1 className="sr-only">Curriculum Vitae</h1>
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
      </section>
    </ClientPageNavigation>
  );
}
