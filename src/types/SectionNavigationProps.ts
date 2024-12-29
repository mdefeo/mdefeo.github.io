// /src/types/SectionNavigationProps.ts
export interface Section {
  id: string;
  label: string;
}

export interface PageSectionNavigation {
  [page: string]: Section[];
}
