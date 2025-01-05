import React from "react";
import { NavigationItem } from "@/interfaces/MainNavigationInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "@/config/iconMap";

interface Props {
  item: NavigationItem;
  setHoveredItem: (item: NavigationItem | null) => void;
  setImageLoaded: (loaded: boolean) => void;
}

const MainNavigationItem: React.FC<Props> = ({ item, setHoveredItem, setImageLoaded }) => {
  const IconComponent = iconMap[item.icon as keyof typeof iconMap];
  return (
    <nav
      key={item.name}
      className="group relative flex flex-col items-center md:items-start gap-y-2 p-4 bg-accent"
      onMouseEnter={() => {
        setHoveredItem(item);
        setImageLoaded(false);
      }}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="h-14 w-14 flex-none items-center justify-center rounded-lg group-hover:bg-base-200 hover:text-info hidden md:flex">
        <FontAwesomeIcon 
          icon={IconComponent} 
          className="h-6 w-6 text-secondary-content group-hover:text-info-content"
        />
      </div>
      <div className="text-left">
        <a href={item.href} className="font-bold text-primary">
          {item.name}
        </a>
      </div>
      <hr className="my-2 border-primary-content w-full" />
      {item.subItems && (
        <div className="mt-2 space-y-1 hidden md:block ml-1">
          {item.subItems.map((subItem) => (
            <a key={subItem.name} href={subItem.href} className="block text-primary-content hover:text-info">
              {subItem.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MainNavigationItem;