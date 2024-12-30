// /src/app/cv/page.tsx
import HeroSection from "@/components/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Achievements, Awards, Education, Entrepreneurship, Experience, Intro, Skills } from "./sections";
import SectionTransitions from "@/components/SectionTransitions";

export { generateMetadata } from "./metadata";

export default function CVPage() {
  return (
    <ClientPageNavigation>
      <section id="cv-main-content" className="focus:outline-none">
        <h1 className="sr-only">Curriculum Vitae</h1>
        <SectionTransitions />
        <HeroSection id="intro" slide="1">
          <Intro />
        </HeroSection>
        <HeroSection id="experience" slide="2">
          <Experience />
        </HeroSection>
        <HeroSection id="entrepreneurship" slide="3">
          <Entrepreneurship />
        </HeroSection>
        <HeroSection id="education" slide="4">
          <Education />
        </HeroSection>
        <HeroSection id="skills" slide="5">
          <Skills />
        </HeroSection>
        <HeroSection id="achievements" slide="6">
          <Achievements />
        </HeroSection>
        <HeroSection id="awards" slide="7">
          <Awards />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}
