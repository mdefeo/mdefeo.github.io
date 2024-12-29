// /src/app/about/metadata.ts
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: "Welcome to Marcello De Feo",
    description: "Explore my projects, skills, and journey.",
    openGraph: {
      title: "Welcome to Marcello De Feo",
      description: "Explore my projects, skills, and journey.",
      images: [
        {
          url: `${baseUrl}/homepage-meta-image.jpg`,
          width: 800,
          height: 600,
          alt: "Homepage meta image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Welcome to Marcello De Feo",
      description: "Explore my projects, skills, and journey.",
      images: [`${baseUrl}/homepage-meta-image.jpg`],
    },
  };
}
