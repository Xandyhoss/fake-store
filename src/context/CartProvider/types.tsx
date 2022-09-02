import React from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICartContext {
  products: Product[] | null;
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  fetchProducts: () => Promise<void>;
}

export interface ICartProvider {
  children: React.ReactNode;
}
