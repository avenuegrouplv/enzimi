export type VolumeOption = '750ml' | '500ml';

export const VOLUME_PRICES: Record<VolumeOption, number> = {
  '750ml': 12.99,
  '500ml': 9.99,
};

export interface Product {
  id: string;
  name: string;
  subName: string;
  price: number;
  volume: string;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
  benefits: string[];
  colorGradient: string; // CSS gradient string for bottle illustration
  bottleAccent: string; // Hex color for label accent
  image?: string;
}

export interface CartItem {
  product: Product;
  selectedVolume: VolumeOption;
  unitPrice: number;
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  email: string;
  phone: string;
  deliveryMethod: 'omniva' | 'dpd' | 'pickup';
  address: string;
  notes?: string;
}
