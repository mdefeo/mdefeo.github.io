export interface SubItem {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  description: string;
  href: string;
  icon: string;
  previewImage: string;
  previewDescription: string;
  subItems?: SubItem[];
}

export interface SocialMediaNavigationProps {
  size?: "sm" | "lg" | "xl" | "2x" | "3x" | "4x" | "5x";
}
