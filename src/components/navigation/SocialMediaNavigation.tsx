"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaNavigationProps } from "@/interfaces/SocialMediaNavigationInterface";
import iconMap from "@/config/iconMap";

const SocialMediaNavigation: React.FC<SocialMediaNavigationProps> = ({ size = "xl", links }) => {
  return (
    <nav className="social-media-nav flex space-x-1 md:space-x-2 lg:space-x-4">
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
              size={size}
              className="social-media-icon"
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default SocialMediaNavigation;
