"use client";
import React from "react";
import { Summary, Chat, Education } from "./about/sections";

export default function AboutPage() {
  return (
    <>
      <Summary />
      <Education />
      <Chat />
    </>
  );
}