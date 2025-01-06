"use client";
import React from "react";
import { Summary, Chat, Entrepreneurship } from "./about/sections";

export default function AboutPage() {
  return (
    <>
      <Summary />
      <Entrepreneurship />
      <Chat />
    </>
  );
}