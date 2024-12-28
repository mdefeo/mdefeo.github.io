import HeroSection from "@/components/HeroSection";
import { Bands, Favorites, Gear, Songs } from "./sections";
import { getPageMetadata } from "@/utils/metaData";

// Page-specific metadata
export async function generateMetadata() {
  const meta = getPageMetadata("music");
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


// Page content
export default function MusicPage() {
  return (
    <div id="main-content" className="focus:outline-none">
      <HeroSection id="bands">
        <Bands />
      </HeroSection>
      <HeroSection id="songs">
        <Songs />
      </HeroSection>
      <HeroSection id="favorites">
        <Favorites />
      </HeroSection>
      <HeroSection id="gear">
        <Gear />
      </HeroSection>
    </div>
  );
}