import { CartItemCountProps } from './data';

const CartItemCount = ({ cartData }: CartItemCountProps) => {
  return (
    <div className="absolute right-6 top-8 min-w-15 h-15 rounded-full bg-mediumGray flex justify-center text-xs text-white px-3 items-center">
      {cartData?.cartItemLength ?? 0}
    </div>
  );
};

export default CartItemCount;
