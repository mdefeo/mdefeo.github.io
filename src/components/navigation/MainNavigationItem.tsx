import React from "react";
import Link from "next/link";
import { NavigationProps } from "@/interfaces/MainNavigationInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "@/config/iconMap";

const MainNavigationItem: React.FC<NavigationProps> = ({ item, setHoveredItem, setImageLoaded, onClick }) => {
  const IconComponent = iconMap[item.icon as keyof typeof iconMap];
  
  return (
    <nav
      key={item.name}
      className="grid col-span-2 group relative flex-col items-center md:items-start gap-y-4 px-4 bg-white"
      onMouseEnter={() => {
        setHoveredItem(item);
        setImageLoaded(false);
      }}
      onMouseLeave={() => setHoveredItem(null)}
      onClick={onClick}
    >
      <div className="flex items-center gap-x-2 mt-10">
        <div className="h-14 w-14 flex-none items-center justify-center rounded-lg group-hover:bg-primary hover:text-info hidden md:flex">
          <Link href={item.href} className="font-bold text-primary-content">
            <FontAwesomeIcon
              icon={IconComponent}
              className="h-6 w-6 text-secondary-content group-hover:text-primary-content"
            />
          </Link>
        </div>
        <div className="text-left">
          <Link href={item.href} className="font-bold text-xl text-primary-content">
            {item.name}
          </Link>
        </div>
      </div>

      <hr />
      {item.subItems && (
        <div className="space-y-0 hidden md:block ml-1">
          <div className="grid grid-cols-2 gap-2">
            {item.subItems.map((subItem) => (
              <a key={subItem.name} href={subItem.href} className="block">
                {subItem.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavigationItem;
