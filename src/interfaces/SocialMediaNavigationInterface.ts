export interface SocialMediaLink {
  name: string;
  href: string;
  icon: string;
}

export interface SocialMediaNavigationProps {
  size?: "xs" | "sm" | "lg" | "xl" | "2x";
  links: SocialMediaLink[];
}
