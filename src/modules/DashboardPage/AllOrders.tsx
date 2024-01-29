import LogoImg from '@/common/components/Logo/LogoImg';
import ProfileImgSection from '../PersonInfoPage/ProfileImgSection';
import FarmerSearch from '@/common/components/Input/FarmerSearch';
import DynamicTable from '@/common/components/DynamicTable';
import { productColumns, productData } from './data';
const AllOrders = () => {
  return (
    <div className="w-9/12 bg-white rounded-20 p-32 flex-grow self-start">
      <div className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-16">
          <h3 className=" text-20 font-semibold ">所有訂單</h3>
          <button
            type="button"
            className=" text-primary-green p-8 border border-primary-green rounded-8 hover:bg-primary-green hover:text-white">
            新增農產品
          </button>
        </div>
        <FarmerSearch />
      </div>
      {/* <DynamicTable
            columns={productColumns}
            data={productData}
            showCheckbox={true}
          /> */}

      {/* <table className="w-full">
            <tr className=" bg-primary-yellow text-14 text-center">
              <td className="py-[13px]">訂單編號</td>
              <td>小農</td>
              <td>金額</td>
              <td>訂單建立時間</td>
              <td>出貨狀態</td>
            </tr>
            {currentData.map((data) => (
              <tr
                className="text-center border-b border-lightGray"
                key={data.id}>
                <td className="py-[13px]">{data.id}</td>
                <td>{data.farmer}</td>
                <td>{data.amount}</td>
                <td>{data.createTime}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </table>
          <div className="w-full flex justify-between mt-20 text-darkGray pl-12 pr-24">
            <p>共 {ordersData.length} 筆資料</p>
            <div className="flex gap-24">
              <p>{`${currentPage}/${maxPage}`}</p>
              <button
                type="button"
                onClick={handlePrevious}
                className=" hover:text-mediumGray">
                前一頁
              </button>
              <button
                type="button"
                onClick={handleNext}
                className=" hover:text-mediumGray">
                下一頁
              </button>
            </div>
          </div> */}
    </div>
  );
};

export default AllOrders;
