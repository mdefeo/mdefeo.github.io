// /src/config/constants/navigation.ts
import { PageSectionNavigation } from "@/types/SectionNavigationProps";

export const navigation: PageSectionNavigation = {
  about: [
    { id: "hello", label: "Hello" },
    { id: "about", label: "About" },
    { id: "chat", label: "Chat" },
    { id: "personal", label: "Personal" },
    { id: "professional", label: "Professional" },
    { id: "writing", label: "Writing" },
  ],
  cv: [
    { id: "intro", label: "Intro" },
    { id: "summary", label: "Summary" },
    { id: "experience", label: "Experience" },
    { id: "entrepreneurship", label: "Entrepreneurship" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "awards", label: "Awards" },
  ],
  music: [
    { id: "bands", label: "Bands" },
    { id: "songs", label: "Songs" },
    { id: "favorites", label: "Favorites" },
    { id: "gear", label: "Gear" },
  ],
  portfolio: [
    { id: "clients", label: "Clients" },
    { id: "design", label: "Design" },
    { id: "development", label: "Development" },
    { id: "freelance", label: "Freelance" },
  ],
};
