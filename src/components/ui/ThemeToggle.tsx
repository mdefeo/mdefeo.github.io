// components/ui/ThemeToggle.tsx
"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [themeMode, setThemeMode] = useState<string>("nord");

  useEffect(() => {
    // Apply the theme mode on page load
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "nord" ? "night" : "nord"));
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="inline-flex items-center cursor-pointer">
        <span className="text-sm text-gray-700">Light / Dark Mode</span>
        <input
          type="checkbox"
          className="ml-2"
          checked={themeMode === "night"}
          onChange={toggleTheme}
        />
      </label>
      <div>
        {themeMode === "night" ? (
          <span className="text-sm text-gray-600">Dark Mode</span>
        ) : (
          <span className="text-sm text-gray-600">Light Mode</span>
        )}
      </div>
    </div>
  );
}
