export interface DrawerInterface {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}