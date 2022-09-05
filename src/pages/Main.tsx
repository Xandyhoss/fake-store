import { useEffect } from "react";
import { useCart } from "../context/CartProvider/useCart";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Main: React.FC = () => {
  const cart = useCart();

  const getData = async () => {
    try {
      await cart.fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col w-full min-h-screen items-center gap-y-2">
      <Navbar />
      <div className="grid max-w-[1100px] w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2 p-8 pt-20">
        {cart.products &&
          cart.products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default Main;
