"use client";
import React, { useState } from "react";
import LoadingScreen from "@/components/about/LoadingScreen";
import HeroSection from "@/components/ui/HeroSection";
import { About, Intro, Entrepreneurship } from "./about/sections";
import ClientPageNavigation from "@/components/navigation/ClientPageNavigation";
import SectionTransitions from "@/components/SectionTransitions";

export default function HomePage() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  return (
    <>
      {showLoadingScreen && <LoadingScreen onAnimationEnd={() => setShowLoadingScreen(false)} />}
      <ClientPageNavigation>
        <section id="about-main-content" className="focus:outline-none">
          <h1 className="sr-only">About Page Sections</h1>
          <SectionTransitions />
          <HeroSection id="intro" slide="1">
            <Intro />
          </HeroSection>
          <HeroSection id="about" slide="2">
            <About />
          </HeroSection>
          <HeroSection id="professional" slide="3">
            <Entrepreneurship />
          </HeroSection>
        </section>
      </ClientPageNavigation>
    </>
  );
}