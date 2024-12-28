import HeroSection from "@/components/HeroSection";
import { Clients, Design, Development, Freelance } from "./sections";
import { getPageMetadata } from "@/utils/metaData";

// Page-specific metadata
export async function generateMetadata() {
  const meta = getPageMetadata("portfolio");
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: meta.images,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.images,
    },
  };
}

export default function MusicPage() {
  return (
    <div id="main-content" className="focus:outline-none">
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
    </div>
  );
}