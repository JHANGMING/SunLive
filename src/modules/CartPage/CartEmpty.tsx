import Link from 'next/link';
import { BsCart2 } from 'react-icons/bs';
import CartLink from './CartLink';
const CartEmpty = () => {
  return (
    <section className="container grid grid-cols-12 ">
      <div className="bg-white col-span-12 px-24 pt-24 pb-80 rounded-20 mb-16 flex flex-col items-center gap-24">
        <p className="text-24 font-bold self-start">購物車</p>
        <div className="w-160 h-160 rounded-full bg-dashboardGray flex justify-center items-center">
          <BsCart2 size={80} className=" text-darkGray" />
        </div>
        <h4 className=" text-darkGray">您的購物車是空的</h4>
        <Link
          href="/productshop"
          className=" text-white mb-16 py-12 px-20 rounded-8 bg-primary-green block">
          前往探索更多蔬果
        </Link>
      </div>
      <CartLink cartEmpty={true} />
    </section>
  );
};

export default CartEmpty;
