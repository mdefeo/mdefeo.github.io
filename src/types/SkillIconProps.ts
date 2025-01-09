import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "@/config/icons";

export interface SkillIconProps {
  name: keyof typeof icons | IconProp;
  alt: string;
  size?: number;
  className?: string;
  isFontAwesome?: boolean;
}

