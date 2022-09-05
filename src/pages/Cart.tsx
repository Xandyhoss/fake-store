import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartProvider/useCart";

const Cart: React.FC = () => {
  const cart = useCart();
  const [sumCart, setSumCart] = useState(0);

  const updateTotalPrice = () => {
    setSumCart(
      cart.cart.map((item) => item.price * item.amount).reduce((a, b) => a + b)
    );
  };

  useEffect(() => {
    if (cart.cart.length > 0) {
      setSumCart(
        cart.cart
          .map((item) => item.price * item.amount)
          .reduce((a, b) => a + b)
      );
    }
  }, [cart]);

  return (
    <div className="flex flex-col w-full min-h-screen items-center gap-y-2">
      <Navbar />
      {cart.cart.length > 0 ? (
        <div className="flex w-full max-w-[1100px] pt-20 pb-8 gap-x-2">
          <div className="w-[80%] flex flex-col gap-y-2">
            {cart.cart.map((item) => {
              return (
                <CartItem
                  product={item}
                  key={item.id}
                  updateTotalPrice={updateTotalPrice}
                />
              );
            })}
          </div>
          <div className="w-[20%] h-min rounded-lg bg-white flex flex-col items-center p-4">
            <p className="text-green-600 font-bold">CART TOTAL</p>
            <p className="text-green-600 text-[1.3rem] font-bold">
              ${sumCart.toFixed(2)}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-[1100px] pt-20 gap-x-2 justify-center">
          <p className="text-3xl">Your cart is empty!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
