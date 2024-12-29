// /src/app/cv/sections/Intro.tsx
"use client";
import Image from "next/image";
import SocialMediaNavigation from "@/components/navigation/SocialMediaNavigation";

export default function Intro() {
  return (
    <section aria-labelledby="intro-heading" role="contentinfo">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex-1">
          <h2>Marcello De Feo</h2>
          <p>Full-Stack Engineer & Leader</p>
          <p>Philadelphia, PA</p>
          <p>MBA Candidate at Boston University</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/marcellodefeo" target="_blank" rel="noopener noreferrer" className="text-sky-800">linkedin.com/in/marcellodefeo</a></p>
          <SocialMediaNavigation />
        </div>
        <div className="flex justify-end">
          <Image 
            src="/images/marcello-de-feo.jpg" 
            alt="Marcello De Feo" 
            width={200} 
            height={200} 
            className="rounded-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

