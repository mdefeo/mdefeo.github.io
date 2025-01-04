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
      className="group relative flex flex-col items-center md:items-start gap-y-2 p-4"
      onMouseEnter={() => {
        setHoveredItem(item);
        setImageLoaded(false);
      }}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="h-11 w-11 flex-none items-center justify-center rounded-lg group-hover:bg-white hidden md:flex">
        <FontAwesomeIcon 
          icon={IconComponent} 
          className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
        />
      </div>
      <div className="text-left">
        <a href={item.href} className="font-bold text-slate-700">
          {item.name}
        </a>
      </div>
      <hr className="my-2 border-gray-300 w-full" />
      {item.subItems && (
        <div className="mt-2 space-y-1 hidden md:block ml-1">
          {item.subItems.map((subItem) => (
            <a key={subItem.name} href={subItem.href} className="block text-gray-700 hover:text-blue-600">
              {subItem.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MainNavigationItem;