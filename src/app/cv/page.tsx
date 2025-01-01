import HeroSection from "@/components/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Achievements, Awards, Education, Entrepreneurship, Experience, Skills } from "./sections";

export { generateMetadata } from "./metadata";

export default function CVPage() {
  return (
    <ClientPageNavigation>
      <section id="cv-main-content" className="focus:outline-none">
        <h1 className="sr-only">Curriculum Vitae</h1>
        <HeroSection id="experience" slide="1">
          <Experience />
        </HeroSection>
        <HeroSection id="entrepreneurship" slide="2">
          <Entrepreneurship />
        </HeroSection>
        <HeroSection id="education" slide="3">
          <Education />
        </HeroSection>
        <HeroSection id="skills" slide="4">
          <Skills />
        </HeroSection>
        <HeroSection id="achievements" slide="5">
          <Achievements />
        </HeroSection>
        <HeroSection id="awards" slide="6">
          <Awards />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}