export interface SubItem {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  description: string;
  href: string;
  icon: string;
  previewImage: string;
  previewDescription: string;
  subItems?: SubItem[];;
}