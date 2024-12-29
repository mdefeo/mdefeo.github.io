// /src/types/MetaDataProps.ts
export interface MetaData {
  [key: string]: {
    title: string;
    description: string;
    openGraph: {
      title: string;
      description: string;
      images: string[];
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      images: string[];
    };
  };
}
