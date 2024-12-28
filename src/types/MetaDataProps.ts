export interface PageMetadata {
  title: string;
  description: string;
  images: string[];
}

export interface MetaData {
  homepage: PageMetadata;
  cv: PageMetadata;
  [key: string]: PageMetadata;
}
