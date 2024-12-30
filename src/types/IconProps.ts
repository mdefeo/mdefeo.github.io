export interface IconProps {
  name: keyof typeof icons;
  alt: string;
  size?: number;
  className?: string;
}