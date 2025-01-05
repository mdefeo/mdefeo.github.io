"use client";
import React, { useState } from "react";
import { Chat, Summary, Entrepreneurship } from "./about/sections";

export default function HomePage() {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  return (
    <section id="about-main-content" className="focus:outline-none">
      <h1 className="sr-only">About Page Sections</h1>
        <Summary />
        <Chat />
        <Entrepreneurship />
    </section>
  );
}