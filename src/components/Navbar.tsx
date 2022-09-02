import { ShoppingBag } from "phosphor-react";
import { useCart } from "../context/CartProvider/useCart";
const Navbar: React.FC = () => {
  const { cart } = useCart();
  return (
    <div className="h-16 w-full bg-white flex justify-center items-center fixed shadow-md">
      <div className="flex flex-col gap-y-0">
        <h1 className="text-gray-900 text-2xl">FakeStore</h1>
        <p className="text-red-500 mt-[-10px] self-end">with Vite</p>
      </div>
      <div className="flex absolute right-5 items-center">
        <p className="font-bold text-black">Cart</p>
        <div className="relative flex">
          <ShoppingBag size={30} className="text-red-500 " />
          <div className="bg-red-500 rounded-full h-4 w-4 text-[0.8rem] absolute flex justify-center items-center p-[1px] right-[-5px] bottom-[-5px]">
            {cart.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
