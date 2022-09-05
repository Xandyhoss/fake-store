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

export interface CartProduct extends Product {
  amount: number;
}

export interface ICartContext {
  products: Product[] | null;
  cart: CartProduct[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: CartProduct) => void;
  fetchProducts: () => Promise<void>;
  modifyAmount: (type: "increase" | "decrease", product: CartProduct) => void;
}

export interface ICartProvider {
  children: React.ReactNode;
}
