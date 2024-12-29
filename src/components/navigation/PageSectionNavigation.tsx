// /src/components/navigation/PageSectionNavigation.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageSectionNavigationProps } from "@/types/SectionNavigationProps";
import { debounce } from "lodash";


export default function PageSectionNavigation({
  sections,
}: PageSectionNavigationProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const setActiveSectionDebounced = debounce((id) => {
      setActiveSection(id);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionDebounced(entry.target.id);
          }
        });
      },
      { threshold: [0.1, 0.5, 0.9] }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      setActiveSectionDebounced.cancel();
    };
  }, [sections]);

  if (!sections || sections.length === 0) return null;

  return (
    <nav
      className="inline-block align-middle left-4 transform -translate-y-1/2 space-y-2 p-4 z-10"
      aria-label="Page Sections Navigation"
    >
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          aria-current={activeSection === section.id ? "true" : "false"}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(section.id);
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`block text-sm font-medium transition-transform duration-300 ${
            activeSection === section.id
              ? "text-primary font-bold scale-125"
              : "hover:scale-110"
          }`}
        >
          {activeSection === section.id ? `- ${section.label}` : section.label}
        </Link>
      ))}
    </nav>
  );
}
