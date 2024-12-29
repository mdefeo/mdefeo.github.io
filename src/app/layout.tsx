// /src/app/layout.tsx
import MainNavigation from "@/components/navigation/MainNavigation";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="nord">
      <body>
        <header className="z-20">
          <MainNavigation />
        </header>
        {children}
      </body>
    </html>
  );
}
