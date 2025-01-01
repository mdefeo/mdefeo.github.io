// /src/app/portfolio/page.tsx
import HeroSection from "@/components/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Clients, CaseStudies, Freelance } from "./sections";
import SectionTransitions from "@/components/SectionTransitions";

export { generateMetadata } from "./metadata";

export default function PortfolioPage() {
  return (
    <ClientPageNavigation>
      <section id="portfolio-main-content" className="focus:outline-none">
        <h1 className="sr-only">Portfolio Page Sections</h1>
        <SectionTransitions />
        <HeroSection id="freelance" slide="1">
          <Freelance />
        </HeroSection>
        <HeroSection id="case-studies" slide="2">
          <CaseStudies />
        </HeroSection>
        <HeroSection id="clients" slide="3">
          <Clients />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}
