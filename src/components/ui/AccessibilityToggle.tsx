// components/ui/AccessibilityToggle.tsx
"use client";
import { useState, useEffect } from "react";

export default function AccessibilityToggle() {
  const [accessibilityMode, setAccessibilityMode] = useState<string>("");

  useEffect(() => {
    // Apply the accessibility mode class dynamically
    if (accessibilityMode === "accessible") {
      document.body.classList.add("accessible-mode");
    } else {
      document.body.classList.remove("accessible-mode");
    }
  }, [accessibilityMode]);

  const toggleAccessibility = () => {
    setAccessibilityMode((prevMode) => (prevMode === "accessible" ? "" : "accessible"));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Accessibility Mode</label>
      <select
        onChange={(e) => setAccessibilityMode(e.target.value)}
        value={accessibilityMode}
        className="block w-full mt-2 p-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">None</option>
        <option value="accessible">High Contrast</option>
      </select>
    </div>
  );
}
