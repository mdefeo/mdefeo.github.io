// /src/components/Icon.tsx
import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../icons";
import { IconProps } from '../types/IconProps';

const SkillIcon: FC<IconProps> = ({ name, alt, size = 28, className = "inline-flex text-2xl mr-4 mb-4", isFontAwesome = false }) => {
  return (
    <div className="tooltip tooltip-top" data-tip={alt}>
      {isFontAwesome ? (
        <FontAwesomeIcon icon={name} className={`inline-flex ${className}`} size="lg" />
      ) : (
        <Image
          src={icons[name]}
          alt={alt}
          width={size}
          height={size}
          className={className}
        />
      )}
    </div>
  );
};

export default SkillIcon;
