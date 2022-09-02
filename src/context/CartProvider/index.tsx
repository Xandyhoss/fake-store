import { createContext, useState } from "react";
import { ICartContext, ICartProvider, Product } from "./types";
import { fetchData } from "./utils";

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[] | null>([]);

  function addProductToCart(product: Product) {
    setCart((oldState) => [...oldState, product]);
  }

  function removeProductFromCart(product: Product) {
    const removedProduct = cart.filter(function (item) {
      return item.id !== product.id;
    });
    setCart(removedProduct);
  }

  async function fetchProducts() {
    const products = await fetchData();
    setProducts(products);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addProductToCart,
        removeProductFromCart,
        fetchProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
