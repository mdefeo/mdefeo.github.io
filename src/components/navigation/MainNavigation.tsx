"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChartPie, faMousePointer, faFingerprint, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import navigationData from "@/data/json/navigation.json";
import { NavigationItem } from "@/interfaces/NavigationInterface";
import SocialMediaNavigation from "./SocialMediaNavigation";

const iconMap = {
  faChartPie,
  faMousePointer,
  faFingerprint,
  faSquarePlus,
};

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<NavigationItem | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigationItems: NavigationItem[] = navigationData;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
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
      <PopoverButton
        className="inline-flex items-center gap-x-1 text-sm font-semibold z-20 text-gray-900 absolute top-8 left-8 focus:outline-none"
        onMouseEnter={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PopoverPanel
          className="absolute bg-white left-0 z-10 mt-5 w-full h-full px-4 focus:outline-none"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="w-full bg-white flex-auto overflow-hidden text-sm shadow-lg ring-1 ring-gray-900/5">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-0 p-4">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex flex-col items-center md:items-start gap-y-2 rounded-lg p-4"
                  onMouseEnter={() => {
                    setHoveredItem(item);
                    setImageLoaded(false);
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white hidden md:flex">
                    <FontAwesomeIcon
                      icon={iconMap[item.icon]}
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
                    />
                  </div>
                  <div className="text-left">
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                    </a>
                  </div>
                  {item.subItems && (
                    <div className="mt-2 space-y-1 hidden md:block">
                      {item.subItems.map((subItem) => (
                        <a key={subItem.name} href={subItem.href} className="block text-gray-700 hover:text-blue-600">
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="hidden lg:flex flex-col items-center justify-start p-4 lg:col-span-2">
                {hoveredItem && (
                  <>
                    <div className="relative w-full pb-[56.25%] mb-4 bg-gray-200">
                      {!imageLoaded && (
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-gray-500 rounded-full animate-spin"></div>
                        </div>
                      )}
                      <Image
                        src={`/images/previews/${hoveredItem.previewImage || 'about.jpg'}`}
                        alt={hoveredItem.previewDescription}
                        className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 shadow-lg ${imageLoaded ? 'opacity-100' : 'skeleton pulse'}`}
                        layout="fill"
                        onLoadingComplete={handleImageLoad}
                      />
                    </div>
                    <p className="text-left text-gray-600">{hoveredItem.previewDescription}</p>
                  </>
                )}
              </div>
            </div>
            <div className="p-4 bg-gray-50 justify-center flex">
              <SocialMediaNavigation />
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
