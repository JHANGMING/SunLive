import { BsSearch } from 'react-icons/bs';

const FarmerSearch = () => {
  return (
    <div className=" relative">
      <BsSearch size={16} className=" absolute top-10 left-8" />
      <input
        className="w-[200px] text-14 text-darkGray border border-SoftGray bg-SoftGray rounded-8 py-8 pl-32 focus-visible:outline-none"
        placeholder="尋找農產品"
      />
    </div>
  );
};

export default FarmerSearch;
