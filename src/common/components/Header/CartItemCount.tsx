import { CartItemCountProps } from "./data";

const CartItemCount = ({ cartData }:CartItemCountProps) => {
  
  return (
    <div className="absolute right-6 top-8 w-15 rounded-full bg-mediumGray flex justify-center text-xs text-white">
      {Array.isArray(cartData) && cartData.length}
    </div>
  );
};

export default CartItemCount;
