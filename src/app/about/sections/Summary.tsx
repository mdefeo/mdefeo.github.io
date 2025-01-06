"use client";
import Image from "next/image";
import Link from "next/link";
import SocialMediaNavigation from "@/components/navigation/SocialMediaNavigation";
import SocialMediaLinks from "@/config/data/socialMediaLinks.json";

export default function Summary() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="summary" aria-labelledby="summary-heading" role="contentinfo">
      <div className="summary-grid">
        <div className="sm:order-1 order-2">
          <h2>Marcello De Feo</h2>
          <h3 className="font-normal">Full-Stack Engineer & Leader</h3>
          <h4 className="font-normal mb-2 md:block hidden">Philadelphia, PA</h4>
          <h4 className="font-lg font-normal md:font-base md:font-light">MBA Candidate at Boston University</h4>
          <p className="text-lg mb-5 font-light text-base-300">
            LinkedIn:{" "} 
            <Link
              href="https://linkedin.com/in/marcellodefeo"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/marcellodefeo
            </Link>
          </p>
          <SocialMediaNavigation size="xl" links={SocialMediaLinks} />
          <p className="my-5 italic text-lg md:text-sm font-light">
            Experienced software engineer and leader with 20+ years in full-stack development, team management, and business ownership.
          </p>
          <p className="italic text-secondary-content text-lg md:text-sm font-light"> Want to learn more? 
            &nbsp;<Link href="#chat" onClick={handleScroll}>Let's chat!</Link></p>
        </div>

        <div className="sm:order-2 order-1 flex justify-center sm:justify-end items-center">
          <div className="relative mx-auto w-80 h-80">
          <Link
              href="https://linkedin.com/in/marcellodefeo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/marcello-de-feo.jpg"
                alt="Marcello De Feo"
                fill={true}
                className="md:rounded-full md:object-cover w-full h-full shadow-sm rounded-badge"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}