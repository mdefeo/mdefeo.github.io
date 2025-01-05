"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaNavigationProps } from "@/interfaces/SocialMediaNavigationInterface";
import iconMap from "@/config/iconMap";

const SocialMediaNavigation: React.FC<SocialMediaNavigationProps> = ({ size = "xl", links }) => {
  return (
    <nav className="flex space-x-4 bg-primary">
      {links.map((social) => {
        const IconComponent = iconMap[social.icon as keyof typeof iconMap];
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip tooltip-top"
            data-tip={social.name}
          >
            <FontAwesomeIcon
              icon={IconComponent}
              className={`mr-4 ${social.color}`}
              size={size}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default SocialMediaNavigation;
