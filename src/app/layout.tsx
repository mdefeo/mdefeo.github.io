import MainNavigation from "@/components/navigation/MainNavigation";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="nord">
      <body>
        <MainNavigation />
        <Breadcrumbs />
        {children}
      </body>
    </html>
  );
}
