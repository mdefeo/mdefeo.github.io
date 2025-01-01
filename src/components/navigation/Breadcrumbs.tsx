"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import navigationData from "@/data/json/navigation.json";

const Breadcrumbs: React.FC = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<{ name: string; href: string }[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash.replace("#", "");

      let newBreadcrumbs: { name: string; href: string }[] = [];

      if (path === "/") {
        newBreadcrumbs = [
          { name: "About", href: "/" },
        ];
      } else {
        const pathParts = path
          .split("/")
          .filter((part) => part)
          .map((part) => decodeURIComponent(part));

        const mainCategory = navigationData.find(
          (item) => item.href === `/${pathParts[0]}`
        );

        if (mainCategory) {
          newBreadcrumbs = [{ name: mainCategory.name, href: mainCategory.href }];
        }

        if (hash) {
          newBreadcrumbs.push({ name: hash.charAt(0).toUpperCase() + hash.slice(1), href: `#${hash}` });
        }
      }

      setBreadcrumbs(newBreadcrumbs);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="fixed top-8 left-10 text-sm z-10 mt-[-3px]">
      <div className="breadcrumbs py-0 my-0">
        <ul className="flex items-top space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center align-text-top">
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-700">{crumb.name}</span>
              ) : (
                <Link href={crumb.href} className="text-gray-600 hover:underline">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
