// components/ui/SettingsPanel.tsx
import ThemeToggle from "./ThemeToggle";
import AccessibilityToggle from "./AccessibilityToggle";

export default function UISettings() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="space-y-6">
        <ThemeToggle />
        <AccessibilityToggle />
      </div>
    </div>
  );
}
