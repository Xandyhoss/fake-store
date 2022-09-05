import { createContext, useState } from "react";
import { CartProduct, ICartContext, ICartProvider, Product } from "./types";
import { fetchData } from "./utils";

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: ICartProvider) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [products, setProducts] = useState<Product[] | null>([]);

  function addProductToCart(product: CartProduct) {
    const checkExistingProduct = cart?.find(
      (element) => element.id === product.id
    );

    if (!checkExistingProduct) {
      setCart((oldState) => [...oldState, { ...product, amount: 1 }]);
      return;
    }

    console.log("Already added product");
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

  function modifyAmount(type: "decrease" | "increase", product: CartProduct) {
    const newCart = cart;
    const productIndex = cart.indexOf(product);
    switch (type) {
      case "increase":
        newCart[productIndex].amount += 1;
        setCart(newCart);
        break;
      case "decrease":
        newCart[productIndex].amount -= 1;
        setCart(newCart);
        break;
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addProductToCart,
        removeProductFromCart,
        fetchProducts,
        modifyAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
