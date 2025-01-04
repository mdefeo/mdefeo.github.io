"use client";
import React, { useState } from "react";
import Image from "next/image";
import { icons } from "@/config/icons"; // Import the icons object

export default function UISettings() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        className="btn btn-ghost p-2 flex items-center justify-between w-full"
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-controls="ui-settings-panel"
      >
        <span className="text-xl font-semibold">UI Settings</span>
        <Image
          src={icons.chevron}
          height={24}
          width={24}
          alt="Chevron"
          className={`h-6 w-6 ml-2 transition-transform transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        id="ui-settings-panel"
        className={`transition-all duration-300 ease-in-out absolute left-0 top-12 w-72 bg-white p-4 rounded-lg shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mb-4">
          <label htmlFor="theme-select" className="block text-sm font-medium">
            Select Theme
          </label>
          <select
            id="theme-select"
            className="select select-bordered w-full mt-2"
          >
            <option value="nord">Nord (Light)</option>
            <option value="night">Night (Dark)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" id="high-contrast" />
            <span>High Contrast</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" id="accessible" />
            <span>Accessible Mode</span>
          </label>
        </div>
      </div>
    </div>
  );
}