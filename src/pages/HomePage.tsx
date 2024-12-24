import React, { useEffect } from "react";
import useMetaData from "../hooks/useMetaData";
import HeroSection from "../components/HeroSection";
import { setupHeroSectionScrollAnimation } from "../utils/animations";
import Bot from "../components/About/Bot";

const HomePage = () => {
  useMetaData({
    title: "Welcome",
    description: "Full-stack developer, MBA candidate, and amateur musician.",
  });

  useEffect(() => {
    setupHeroSectionScrollAnimation();
  }, []);

  return (
    <div className="hero-content-container relative max-w-full p-4 flex flex-col items-center justify-center text-center z-10">
      <HeroSection id="hero-1">
        <div className="w-full sm:text-justify p-5 text-primary-content">
          <h3 className="text-3xl">AMA</h3>
          <p className="italic">
            OK, maybe not everything. You can ask me some things, though. Well,
            a few things. Keep it simple, and watch your mouth!
          </p>
          <p>
            I decided to have some fun creating a chatbot that is not powered
            by AI. The code lives in a GitHub repo. Feel free to play around
            with it and make your own version!
          </p>
        </div>
        <div className="w-full">
          <Bot />
        </div>
      </HeroSection>

      <HeroSection id="hero-2" reverse>
        <div className="w-full sm:text-justify p-5 text-primary-content">
          <p className="text-lg">
            I have over a decade of experience solving problems and building
            impactful solutions with technology.
          </p>
        </div>
      </HeroSection>
    </div>
  );
};

export default HomePage;
