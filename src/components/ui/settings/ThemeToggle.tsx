"use client";
import React, { useState, useEffect } from "react";

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
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}