import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { playHeroAnimation } from "../utils/animations";
import Navigation from "./Navigation";

const Layout: React.FC = () => {
  const animationPlayed = useRef(false);

  useEffect(() => {
    if (animationPlayed.current) return;

    animationPlayed.current = true;
    playHeroAnimation();
  }, []);

  return (
    <div className="page-container min-h-screen flex items-center justify-center bg-base-100">
      <main className="hero-parent-container rounded-lg m-auto flex items-center justify-center relative" aria-hidden="true">
        <Navigation />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
