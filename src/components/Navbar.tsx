import { ShoppingBag } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider/useCart";
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  return (
    <div className="h-16 z-50 w-full bg-white flex justify-center items-center fixed shadow-md">
      <div
        className="flex flex-col gap-y-0 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1 className="text-gray-900 text-2xl">FakeStore</h1>
        <p className="text-red-500 mt-[-10px] self-end">with Vite</p>
      </div>
      <div
        className="flex absolute right-5 items-center cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        <p className="font-bold text-black">Cart</p>
        <div className="relative flex">
          <ShoppingBag size={30} className="text-red-500" />
          <div className="bg-red-500 rounded-full h-4 w-4 font-bold text-[0.8rem] absolute flex justify-center items-center p-3 right-[-10px] bottom-[-10px]">
            {cart.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
