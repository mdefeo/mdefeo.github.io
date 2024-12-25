export interface NestedDataType {
  [key: string]: string | number | boolean | NestedDataType | NestedDataType[];
}

export interface BioDataType {
  [key: string]: string | number | boolean | NestedDataType | NestedDataType[];
}

export interface KeywordMap {
  [key: string]: string | number | boolean | NestedDataType | NestedDataType[];
}
