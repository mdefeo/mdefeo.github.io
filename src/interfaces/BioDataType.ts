// /src/interfaces/BioDataType.ts
export interface BioDataType {
  [key: string]: string | number | boolean | Record<string, unknown> | unknown[];
}
