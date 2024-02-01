import FarmerProductSearch from '@/common/components/Input/FarmerProductSearch';
import ManagementTable from '@/common/components/DynamicTable/ManagementTable';
import Button from '@/common/components/Button';
import { productColumns, productData } from '../data';
import { AllProductsProps } from './data';

const AllProducts = () => {
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow flex flex-col self-start">
      <div className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-16">
          <h3 className=" text-20 font-semibold ">所有農產品</h3>
          <button
            type="button"
            className=" text-primary-green p-8 border border-primary-green rounded-8 hover:bg-primary-green hover:text-white"
            // onClick={onAddProductClick}
            >
            新增農產品
          </button>
        </div>
        <FarmerProductSearch />
      </div>
      <div className="mb-24 ">
        <ManagementTable
          columns={productColumns}
          data={productData}
          showCheckbox={true}
        />
      </div>
      <Button category="default" classStyle="self-end">
        刪除
      </Button>
    </div>
  );
};

export default AllProducts;
