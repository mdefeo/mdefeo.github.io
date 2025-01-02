// /src/interfaces/RecognitionInterface.ts
export interface RecognitionItem {
  type: string;
  name: string;
  description: string;
  icon: string;
  year: number;
  category: string;
  source: string;
  url: string;
}

export interface RecognitionProps {
  recognition: RecognitionItem[];
}
