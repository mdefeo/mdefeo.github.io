import HeroSection from "@/components/HeroSection";
import { About, Chat, Hello, Personal, Professional, Writing } from "./about/sections";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils/metaData";

export async function generateMetadata(): Promise<Metadata> {
  const meta = getPageMetadata("homepage");

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

export default function HomePage() {
  return (
    <div id="main-content" className="focus:outline-none">
      <HeroSection id="hello">
        <Hello />
      </HeroSection>
      <HeroSection id="about">
        <About />
      </HeroSection>
      <HeroSection id="chat">
        <Chat />
      </HeroSection>
      <HeroSection id="personal">
        <Personal />
      </HeroSection>
      <HeroSection id="professional">
        <Professional />
      </HeroSection>
      <HeroSection id="writing">
        <Writing />
      </HeroSection>
    </div>
  );
}