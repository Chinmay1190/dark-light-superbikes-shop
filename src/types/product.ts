
export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specifications: {
    engine?: string;
    displacement?: string;
    maxPower?: string;
    maxTorque?: string;
    transmission?: string;
    fuelCapacity?: string;
    weight?: string;
    seatHeight?: string;
  };
  colors: string[];
  image: string;
  gallery?: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
};
