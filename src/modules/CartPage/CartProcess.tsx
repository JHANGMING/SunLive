import { BsChevronRight } from 'react-icons/bs';
const CartProcess = () => {
  return (
    <section className="container grid grid-cols-12 pt-60 pb-[54px]">
      <ul className=" col-span-12 flex items-center gap-12 ">
        <li className="flex items-center gap-12">
          <div className="w-24 h-24 rounded-full bg-primary-yellow flex justify-center items-center border border-black">
            1
          </div>
          <h5>購物車</h5>
        </li>
        <li>
          <BsChevronRight size={24} className=" text-darkGray" />
        </li>
        <li className="flex items-center gap-12">
          <div className="w-24 h-24 rounded-full bg-primary-yellow flex justify-center items-center border border-black">
            2
          </div>
          <h5>填寫資料與付款</h5>
        </li>
        <li>
          <BsChevronRight size={24} className=" text-darkGray" />
        </li>
        <li className="flex items-center gap-12">
          <div className="w-24 h-24 rounded-full bg-primary-yellow flex justify-center items-center border border-black">
            3
          </div>
          <h5>訂購完成</h5>
        </li>
      </ul>
    </section>
  );
};

export default CartProcess;
