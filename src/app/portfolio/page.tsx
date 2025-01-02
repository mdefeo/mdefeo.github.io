// /src/app/portfolio/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { CaseStudies, Awards, Projects } from "./sections";
import SectionTransitions from "@/components/SectionTransitions";

export { generateMetadata } from "./metadata";

export default function PortfolioPage() {
  return (
    <ClientPageNavigation>
      <section id="portfolio-main-content" className="focus:outline-none">
        <h1 className="sr-only">Portfolio Page Sections</h1>
        <SectionTransitions />
        <HeroSection id="case-studies" slide="1">
          <CaseStudies />
        </HeroSection>
        <HeroSection id="projects" slide="2">
          <Projects />
        </HeroSection>
        <HeroSection id="awards" slide="3">
          <Awards />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}