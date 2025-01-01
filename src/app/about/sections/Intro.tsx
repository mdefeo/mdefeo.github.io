"use client";
import Image from "next/image";
import Link from "next/link";
import SocialMediaNavigation from "@/components/navigation/SocialMediaNavigation";

export default function Intro() {
  return (
    <section aria-labelledby="intro-heading" role="contentinfo" className="intro-section">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-4xl w-full">
        <div className="sm:order-1 order-2 text-gray-500">
          <h2 className="text-3xl mb-3 text-gray-600">Marcello De Feo</h2>
          <h4 className="text-xl mb-0">Full-Stack Engineer & Leader</h4>
          <h5 className="text-lg mb-2">Philadelphia, PA</h5>
          <p className="text-lg">MBA Candidate at Boston University</p>
          <p className="text-lg mb-8">
            Linke dIn:{" "} 
            <Link
              href="https://linkedin.com/in/marcellodefeo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300"
            >
              linkedin.com/in/marcellodefeo
            </Link>
          </p>
          <SocialMediaNavigation />
          <p className="mt-10 italic text-sm">
            Innovative software engineer and leader with over two decades of experience in full-stack development, team leadership, and scalable system architecture.
          </p>
        </div>

        <div className="sm:order-2 order-1 flex justify-center sm:justify-end items-center">
          <div className="relative w-40 h-40 md:w-80 md:h-80">
            <Image
              src="/images/marcello-de-feo.jpg"
              alt="Marcello De Feo"
              fill={true}
              className="rounded-full object-cover w-full h-full shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}