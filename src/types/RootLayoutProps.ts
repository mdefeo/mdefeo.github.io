// /src/types/RootLayoutProps.ts
import { Section } from "@/types/SectionNavigationProps";

export interface RootLayoutProps {
  children: React.ReactNode;
  navigationSections?: Section[];
}
