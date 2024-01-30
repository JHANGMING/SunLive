import { BsSearch } from 'react-icons/bs';

const OrdersSearch = () => {
  return (
    <div className=" relative">
      <BsSearch size={12} className=" absolute top-15 left-12 text-darkGray" />
      <input
        className="w-[200px] text-14 text-darkGray border border-SoftGray bg-SoftGray rounded-8 py-8 pl-32 focus-visible:outline-none tracking-widest"
        placeholder="尋找訂單"
      />
    </div>
  );
};

export default OrdersSearch;
