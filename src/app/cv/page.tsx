import { getPageMetadata } from "@/utils/metaData";
import HeroSection from "@/components/HeroSection";
import { Achievements, Awards, Education, Entrepreneurship, Experience, Intro, Skills, Summary } from "./sections";

// Page-specific metadata
export async function generateMetadata() {
  const meta = getPageMetadata("cv");
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
export default function CVPage() {
  return (
    <div id="main-content" className="focus:outline-none">
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
    </div>
  );
}
