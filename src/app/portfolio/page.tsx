// /src/app/portfolio/page.tsx
import HeroSection from "@/components/HeroSection";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import { Clients, Design, Development, Freelance } from "./sections";

export { generateMetadata } from "./metadata";

export default function PortfolioPage() {
  return (
    <ClientPageNavigation>
      <section id="portfolio-main-content" className="focus:outline-none">
        <h1 className="sr-only">Portfolio Page Sections</h1>
        <HeroSection id="clients">
          <Clients />
        </HeroSection>
        <HeroSection id="design">
          <Design />
        </HeroSection>
        <HeroSection id="development">
          <Development />
        </HeroSection>
        <HeroSection id="freelance">
          <Freelance />
        </HeroSection>
      </section>
    </ClientPageNavigation>
  );
}
