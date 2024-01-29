import LogoImg from '@/common/components/Logo/LogoImg';
import ProfileImgSection from '../PersonInfoPage/ProfileImgSection';
import FarmerSearch from '@/common/components/Input/FarmerSearch';
import AccountSettng from './AccountSettng';
import AllOrders from './AllOrders';

const DashboardPage = () => {
  return (
    <>
      <section className="pt-60 pb-[194px] container flex gap-[74px]">
        <div className="w-3/12">
          <div className=" bg-white rounded-20 flex flex-col justify-center items-center py-24 gap-8 mb-40">
            <ProfileImgSection />
            <h2 className="text-24">jelly</h2>
          </div>
          <div className="bg-white px-16 pt-24 pb-[119px] flex flex-col gap-32 rounded-20">
            <button
              type="button"
              className="p-12  flex items-center gap-8 mb-32 hover:bg-primary-yellow hover:rounded-8">
              <LogoImg widthProps={24} heightProps={24} />
              <h3 className="text-16">帳號設定</h3>
            </button>
            <div>
              <button
                type="button"
                className="p-12 w-full flex items-center gap-8 hover:bg-primary-yellow mb-4 hover:rounded-8">
                <LogoImg widthProps={24} heightProps={24} />
                <h3 className="text-16">農產品管理</h3>
              </button>
              <div className="text-14 pl-12">
                <p>所有農產品</p>
                <p>新增農產品</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="p-12 w-full flex items-center gap-8 hover:bg-primary-yellow mb-4 hover:rounded-8">
                <LogoImg widthProps={24} heightProps={24} />
                <h3 className="text-16">訂單管理</h3>
              </button>
              <div className="text-14 pl-12">
                <p>所有訂單</p>
                <p>未出貨訂單</p>
                <p>已出貨訂單</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="p-12 w-full flex items-center gap-8 hover:bg-primary-yellow mb-4 hover:rounded-8">
                <LogoImg widthProps={24} heightProps={24} />
                <h3 className="text-16">直播設定</h3>
              </button>
              <p className="text-14 pl-12">直播設定</p>
            </div>
          </div>
        </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
