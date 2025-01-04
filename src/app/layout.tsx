import React from "react";
import type { Metadata } from "next";
import MainNavigation from "@/components/navigation/MainNavigation";
import AnimationClient from "@/components/ui/animations/AnimationClient";
import "@/styles/globals.css";
import "@/styles/accessibility.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="aTributeToSinclair">
      <body>
        <MainNavigation />
        <AnimationClient />
        <main>{children}</main>
      </body>
    </html>
  );
}
