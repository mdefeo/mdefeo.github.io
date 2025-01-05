import React from "react";
import type { Metadata } from "next";
import MainNavigation from "@/components/navigation/MainNavigation";
import "@/styles/globals.css";
import "@/styles/accessibility.css";

export const metadata: Metadata = {
  title: "Marcello De Feo",
  description: "Personal and Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="aTributeToSinclair">
      <body className="bg-secondary text-secondary-content">
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
