import MainNavigation from "@/components/navigation/MainNavigation";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Footer from "@/components/ui/Footer";
import "@/styles/globals.css";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="nord" className="scroll-smooth focus:scroll-auto">
      <body className="bg-primary">
        <MainNavigation />
        <ThemeToggle />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
