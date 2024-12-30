// /src/app/portfolio/page.tsx
import HeroSection from "@/components/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Clients, Design, Development, Freelance } from "./sections";
import SectionTransitions from "@/components/SectionTransitions";

export { generateMetadata } from "./metadata";

export default function PortfolioPage() {
  return (
    <ClientPageNavigation>
      <section id="portfolio-main-content" className="focus:outline-none">
        <h1 className="sr-only">Portfolio Page Sections</h1>
        <SectionTransitions />
        <HeroSection id="clients" slide="1">
          <Clients />
        </HeroSection>
        <HeroSection id="design" slide="2">
          <Design />
        </HeroSection>
        <HeroSection id="development" slide="3">
          <Development />
        </HeroSection>
        <HeroSection id="freelance" slide="4">
          <Freelance />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}
