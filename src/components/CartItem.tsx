import { Minus, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { CartProduct } from "../context/CartProvider/types";
import { useCart } from "../context/CartProvider/useCart";
interface Props {
  product: CartProduct;
  updateTotalPrice: () => void;
}
const CartItem: React.FC<Props> = ({ product, updateTotalPrice }) => {
  const [itemAmount, setItemAmount] = useState(product.amount);
  const cart = useCart();

  const modifyAmount = (type: "increase" | "decrease") => {
    switch (type) {
      case "increase":
        cart.modifyAmount("increase", product);
        setItemAmount(itemAmount + 1);
        updateTotalPrice();
        break;
      case "decrease":
        if (product.amount > 1) {
          cart.modifyAmount("decrease", product);
          setItemAmount(itemAmount - 1);
          updateTotalPrice();
        }
        break;
    }
  };

  return (
    <div className="h-32 w-full bg-white rounded-lg flex items-center p-4 justify-between">
      <div className="flex items-center gap-x-10">
        <div className="h-24 w-24 text-black flex justify-center items-center bg-white">
          <img src={product.image} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-bold text-black">
            {product.title.split(" ").slice(0, 7).join(" ")}
          </p>
          <p className="text-[0.8rem] font-bold text-gray-400">
            {`${product.description.slice(0, 80)}...`}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-x-5">
        <p className="text-[1.1rem] font-bold text-green-600">{`$${product.price.toFixed(
          2
        )}`}</p>
        <div className="flex items-center gap-x-1">
          <Minus
            className="text-red-600"
            onClick={() => modifyAmount("decrease")}
          />
          <p className="text-black">{itemAmount}</p>
          <Plus
            className="text-green-600"
            onClick={() => modifyAmount("increase")}
          />
        </div>
        <div className="flex items-center gap-x-1">
          <Trash
            className="text-red-500"
            size={23}
            onClick={() => cart.removeProductFromCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
