// /src/app/portfolio/metadata.ts
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: "Portfolio - Marcello De Feo",
    description: "Showcasing my work, designs, and development projects.",
    openGraph: {
      title: "Portfolio - Marcello De Feo",
      description: "Showcasing my work, designs, and development projects.",
      images: [
        {
          url: `${baseUrl}/portfolio-meta-image.jpg`,
          width: 800,
          height: 600,
          alt: "Portfolio meta image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Portfolio - Marcello De Feo",
      description: "Showcasing my work, designs, and development projects.",
      images: [`${baseUrl}/portfolio-meta-image.jpg`],
    },
  };
}
