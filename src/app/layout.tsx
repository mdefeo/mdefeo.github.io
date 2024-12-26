import Navigation from "@/components/layout/Navigation";
import "@/styles/globals.css";
import DynamicMeta from "@/components/seo/DynamicMetaData";
import { APP_THEME } from "@/config/constants/index";
import { DEFAULT_METADATA } from "@/config/defaultMetaData";

export default function RootLayout({
  children,
  metadata = DEFAULT_METADATA,
}: {
  children: React.ReactNode;
  metadata?: Partial<typeof DEFAULT_METADATA>;
}) {
  return (
    <html lang="en" data-theme={APP_THEME}>
      <head>
        <DynamicMeta {...metadata} />
      </head>
      <body className="bg-base-100">
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
