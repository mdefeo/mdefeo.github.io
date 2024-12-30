// /src/app/about/sections/Hello.tsx
"use client";
import React from "react";
import Signature from "@/components/about/signature/Signature";

export default function Hello() {

  return (
    <section
      aria-labelledby="hello-heading"
      role="contentinfo"
      className="flex flex-col items-center justify-center h-full"
    >
      <div className="signature-wrapper mb-4">
        <Signature />
      </div>
    </section>
  );
}