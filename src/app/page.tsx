"use client";

import React from "react";
import { Summary, Education, Skills } from "./about/sections";

export default function AboutPage() {
  return (
    <>
      <Summary />
      <Education />
      <Skills />
    </>
  );
}
