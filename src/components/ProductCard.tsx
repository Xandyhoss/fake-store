import { CartProduct, Product } from "../context/CartProvider/types";
import { useCart } from "../context/CartProvider/useCart";

interface PropsType {
  product: CartProduct;
}

const ProductCard: React.FC<PropsType> = ({ product }) => {
  const { addProductToCart } = useCart();
  return (
    <div className="flex flex-col max-h-[450px] items-center justify-between p-3 bg-white w-full rounded">
      <div className="bg-white w-full rounded overflow-hidden flex justify-center">
        <img src={product.image} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center h-[200px]">
        <h4 className="text-black mt-1 text-center">
          {product.title.split(" ").slice(0, 5).join(" ")}
        </h4>
        <p className="text-black text-[0.8rem] mt-2 text-center">{`${product.description.slice(
          0,
          100
        )}...`}</p>
        <div className="flex flex-col items-center mt-2 justify-center">
          <p className="text-green-600 font-bold text-[1.4rem]">{`$${product.price.toFixed(
            2
          )}`}</p>
          <p className="text-red-600 font-bold text-[0.7rem] mt-[-8px] line-through">
            {`$${(product.price + product.price * 0.2).toFixed(2)}`}
          </p>
        </div>
      </div>
      <button
        className="bg-blue-700 rounded-lg p-2 hover:bg-blue-900 transition-all hover:scale-105 mt-2"
        onClick={() => addProductToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
