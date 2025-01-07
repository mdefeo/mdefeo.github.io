"use client"
import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SkillIconProps } from "@/types/SkillIconProps";
import icons from "@/config/icons";

const SkillIcon: FC<SkillIconProps> = ({ name, alt, size = 28, className = "inline-flex text-2xl mr-4 mb-4", isFontAwesome = false }) => {
  return (
    <div className="tooltip tooltip-top" data-tip={alt}>
      {isFontAwesome ? (
        <FontAwesomeIcon icon={name as IconProp} className={`inline-flex ${className}`} size="lg" />
      ) : (
        <Image
          src={icons[name as keyof typeof icons]}
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