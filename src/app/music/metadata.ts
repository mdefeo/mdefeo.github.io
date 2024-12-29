// /src/app/music/metadata.ts
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: "Music - Marcello De Feo",
    description: "Discover my musical journey and favorite tracks.",
    openGraph: {
      title: "Music - Marcello De Feo",
      description: "Discover my musical journey and favorite tracks.",
      images: [
        {
          url: `${baseUrl}/music-meta-image.jpg`,
          width: 800,
          height: 600,
          alt: "Music meta image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Music - Marcello De Feo",
      description: "Discover my musical journey and favorite tracks.",
      images: [`${baseUrl}/music-meta-image.jpg`],
    },
  };
}
