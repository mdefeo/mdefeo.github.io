"use client";
import React, { useState, useEffect } from "react";

export default function AccessibilityToggle() {
  const [accessibilityMode, setAccessibilityMode] = useState<string>("");

  useEffect(() => {
    // Apply the accessibility mode on page load
    if (accessibilityMode) {
      document.documentElement.classList.add(accessibilityMode);
    } else {
      document.documentElement.classList.remove("high-contrast", "accessible");
    }
  }, [accessibilityMode]);

  const toggleAccessibility = () => {
    setAccessibilityMode((prevMode) =>
      prevMode === "high-contrast" ? "accessible" : "high-contrast"
    );
  };

  return (
    <button onClick={toggleAccessibility}>
      Toggle Accessibility
    </button>
  );
}