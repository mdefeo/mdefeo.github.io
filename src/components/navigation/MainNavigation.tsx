"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navigationData from "@/config/data/mainNavigation.json";
import SocialMediaLinks from "@/config/data/socialMediaLinks.json";
import { NavigationItem } from "@/interfaces/MainNavigationInterface";
import SocialMediaNavigation from "./SocialMediaNavigation";
import MainNavigationItem from "./MainNavigationItem";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MainNavigation() {
  const [hoveredItem, setHoveredItem] = useState<NavigationItem | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Find the "About" item from the navigation data
  const aboutItem = navigationData.find((item) => item.name === "About");

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative">
      {/* Always visible navigation */}
      <div className="absolute left-0 top-0 z-50 w-full h-full py-5 px-4 bg-gray-700 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-0 p-4">
          {navigationData.map((item) => (
            <MainNavigationItem
              key={item.name}
              item={item}
              setHoveredItem={setHoveredItem}
              setImageLoaded={setImageLoaded}
            />
          ))}
          <div className="hidden lg:flex flex-col items-center justify-start p-4 lg:col-span-2">
            <div className="relative w-full pb-[56.25%] mb-4">
              {!imageLoaded && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div className="w-full h-full bg-gray-360 animate-pulse skeleton"></div>
                </div>
              )}

              <Image
                src={`/images/previews/${hoveredItem ? hoveredItem.previewImage : aboutItem?.previewImage || "about.jpg"}`}
                alt={hoveredItem ? hoveredItem.previewDescription || "Default Image" : aboutItem?.previewDescription || "Default Image"}
                layout="fill"
                objectFit="contain"
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 shadow-lg ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={handleImageLoad}
              />
            </div>
            <p className="text-left text-secondary-content">
              {hoveredItem ? hoveredItem.previewDescription : aboutItem?.previewDescription || "Default Description"}
            </p>
          </div>
        </div>
        <div className="p-4 justify-center flex">
          <SocialMediaNavigation size="xl" links={SocialMediaLinks} />
        </div>
      </div>
    </div>
  );
}
