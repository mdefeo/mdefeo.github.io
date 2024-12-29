// /src/app/cv/metadata.ts
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: "Curriculum Vitae - Marcello De Feo",
    description: "Learn more about my professional journey, achievements, and skills.",
    openGraph: {
      title: "Curriculum Vitae - Marcello De Feo",
      description: "Learn more about my professional journey, achievements, and skills.",
      images: [
        {
          url: `${baseUrl}/cv-meta-image.jpg`,
          width: 800,
          height: 600,
          alt: "Curriculum Vitae meta image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Curriculum Vitae - Marcello De Feo",
      description: "Learn more about my professional journey, achievements, and skills.",
      images: [`${baseUrl}/cv-meta-image.jpg`],
    },
  };
}
