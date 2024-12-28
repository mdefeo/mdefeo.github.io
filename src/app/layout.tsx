import MainNavigation from "@/components/navigation/MainNavigation";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Marcello De Feo's portfolio." />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
