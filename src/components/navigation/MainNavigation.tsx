"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import navigationData from "@/config/data/mainNavigation.json";
import SocialMediaLinks from "@/config/data/socialMediaLinks.json";
import { NavigationItem } from "@/interfaces/MainNavigationInterface";
import SocialMediaNavigation from "./SocialMediaNavigation";
import MainNavigationItem from "./MainNavigationItem";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavigationItem | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      setHoveredItem(null);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Popover className="relative">
    <Popover.Button
    className="inline-flex items-center gap-x-1 text-sm font-semibold z-40 text-secondary absolute p-0 m-0 top-3 left-4 focus:outline-none"
        onMouseEnter={() => setIsOpen(true)}
      >
        <FontAwesomeIcon 
          icon={faBars} 
          aria-hidden="true" 
          className={`h-6 w-6 text-md ${isOpen ? 'opacity-30' : 'opacity-100'} hover:opacity-70`} 
        />
    </Popover.Button>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel
        className="absolute left-0 z-30 py-5 w-full h-full px-4 focus:outline-none"
          onMouseLeave={(e) => {
            const relatedTarget = e.relatedTarget as Node | null;
            const currentTarget = e.currentTarget as Node | null;
            
            // Check if both relatedTarget and currentTarget are valid Node objects
            if (!(relatedTarget instanceof Node) || !(currentTarget instanceof Node) || !currentTarget.contains(relatedTarget)) {
              setHoveredItem(null);
              setIsOpen(false);
            }
          }}
        >
          <div className="w-full flex-auto overflow-hidden text-sm shadow-lg ring-1 ring-gray-900/5">
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
                <div className="relative w-full pb-[56.25%] mb-4 bg-gray-300">
                  {!imageLoaded && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <div className="w-full h-full bg-gray-360 animate-pulse skeleton"></div>
                    </div>
                  )}
                  <Image 
                    src={`/images/previews/${hoveredItem ? hoveredItem.previewImage : 'about.jpg'}`}
                    alt={hoveredItem ? hoveredItem.previewDescription || 'Default Image' : 'Default Image'}
                    layout="fill"
                    objectFit="contain"
                    className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 shadow-lg ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={handleImageLoad}
                  />
                </div>
                <p className="text-left text-gray-600">{hoveredItem ? hoveredItem.previewDescription : 'Default Description'}&nbsp;</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 justify-center flex">
              <SocialMediaNavigation size="xl" links={SocialMediaLinks} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
