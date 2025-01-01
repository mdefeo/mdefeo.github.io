"use client";
import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import { Summary, Chat, Intro, Personal, Professional, Writing } from "./about/sections";
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
          <HeroSection id="intro" slide="1" data-slide="1">
            <Intro />
          </HeroSection>
          <HeroSection id="about" slide="2" data-slide="2">
            <Summary />
          </HeroSection>
          <HeroSection id="chat" slide="3" data-slide="3">
            <Chat />
          </HeroSection>
          <HeroSection id="personal" slide="4" data-slide="4">
            <Personal />
          </HeroSection>
          <HeroSection id="professional" slide="5" data-slide="5">
            <Professional />
          </HeroSection>
          <HeroSection id="writing" slide="6" data-slide="6">
            <Writing />
          </HeroSection>
        </section>
      </ClientPageNavigation>
    </>
  );
}