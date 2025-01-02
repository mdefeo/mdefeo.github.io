import HeroSection from "@/components/ui/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Education, Experience, Skills } from "./sections";

export { generateMetadata } from "./metadata";

export default function CVPage() {
  return (
    <ClientPageNavigation>
      <section id="cv-main-content" className="focus:outline-none">
        <h1 className="sr-only">Curriculum Vitae</h1>
        <HeroSection id="experience" slide="1">
          <Experience />
        </HeroSection>
        <HeroSection id="education" slide="2">
          <Education />
        </HeroSection>
        <HeroSection id="skills" slide="3">
          <Skills />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}