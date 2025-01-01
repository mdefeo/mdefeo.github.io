// /src/interfaces/BioDataInterface.ts
export interface BioDataInterface {
  [key: string]: string | number | boolean | Record<string, unknown> | unknown[];
}

export interface KeywordMapInterface {
  [key: string]: string | number | boolean | Record<string, unknown> | unknown[];
}
