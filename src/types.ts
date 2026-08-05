export interface Product {
  id: string;
  name: string;
  subName: string;
  price: number;
  volume: string;
  category: 'imunitate' | 'gremosana' | 'energija' | 'relaksacija' | 'detox';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
  benefits: string[];
  tasteNotes: string;
  colorGradient: string; // CSS gradient string for bottle illustration
  bottleAccent: string; // Hex color for label accent
  badgeText: string;
}

export interface CartItem {
  product: Product;
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
