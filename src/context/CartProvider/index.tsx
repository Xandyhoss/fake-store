import { createContext, useState } from "react";
import { ICartContext, ICartProvider, Product } from "./types";
import { fetchData } from "./utils";

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[] | null>([]);

  function addProductToCart(product: Product) {
    const checkExistingProduct = cart?.find(
      (element) => element.id === product.id
    );

    if (!checkExistingProduct) {
      setCart((oldState) => [...oldState, product]);
      return;
    }

    console.log('Already added product');
    return;
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
