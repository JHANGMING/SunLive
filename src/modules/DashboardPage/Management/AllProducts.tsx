import Link from 'next/link';
import FarmerProductSearch from '@/common/components/Input/FarmerProductSearch';
import ProductlistTable from '@/common/components/DynamicTable/ManagementTable/farmerProductlist';
import { productColumns } from '../data';

const AllProducts = () => {
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
      <div className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-16">
          <h3 className=" text-20 font-semibold ">所有農產品</h3>
          <Link
            href="/dashboard/products/addproduct"
            className=" text-primary-green p-8 border border-primary-green rounded-8 hover:bg-primary-green hover:text-white"
          >
            新增農產品
          </Link>
        </div>
        <FarmerProductSearch />
      </div>
      <div className="mb-24 ">
        <ProductlistTable columns={productColumns} />
      </div>
    </div>
  );
};

export default AllProducts;
