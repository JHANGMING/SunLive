import LogoImg from '@/common/components/Logo/LogoImg';
import ProfileImgSection from '../PersonInfoPage/ProfileImgSection';
import AccountSettng from './AccountSettng';
import { useState } from 'react';
import AllProducts from './Management/AllProducts';
import AddProduct from './Management/AddProduct';
import AllOrders from './Management/AllOrders';

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [managementSubPage, setManagementSubPage] = useState('');
  const [orderSubPage, setOrderSubPage] = useState('');

  const handleClick = (page: string) => {
    setActiveSection(page);

    if (page === 'management') {
      setManagementSubPage('allProducts');
      if (activeSection !== 'management') {
        setOrderSubPage('');
      }
    } else if (page === 'order') {
      setOrderSubPage('所有訂單');
      if (activeSection !== 'order') {
        setManagementSubPage('');
      }
    } else {
      setManagementSubPage('');
      setOrderSubPage('');
    }
  };

  const handleManagementClick = (subPage: string) => {
    setManagementSubPage(subPage);
    if (activeSection !== 'management') {
      setActiveSection('management');
    }
  };

  const handleOrderClick = (subPage: string) => {
    setOrderSubPage(subPage);
    if (activeSection !== 'order') {
      setActiveSection('order');
    }
  };
  const handleAddProductClick = () => {
    setManagementSubPage('addProduct');
  };
  const handleOrderTabChange = (newSubPage) => {
    setOrderSubPage(newSubPage);
  };
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
              className="p-12  flex items-center gap-8 mb-32 hover:bg-primary-yellow hover:rounded-8"
              onClick={() => handleClick('account')}>
              <LogoImg widthProps={24} heightProps={24} />
              <h3 className="text-16">帳號設定</h3>
            </button>
            <div>
              <button
                type="button"
                className="p-12 w-full flex items-center gap-8 hover:bg-primary-yellow mb-4 hover:rounded-8"
                onClick={() => handleClick('management')}>
                <LogoImg widthProps={24} heightProps={24} />
                <h3 className="text-16">農產品管理</h3>
              </button>
              <div className="text-14 pl-12 flex flex-col gap-8">
                <p
                  className={`${managementSubPage === 'allProducts' && 'text-primary-green'} cursor-pointer hover:opacity-60 `}
                  onClick={() => handleManagementClick('allProducts')}>
                  所有農產品
                </p>
                <p
                  className={`${managementSubPage === 'addProduct' && 'text-primary-green'} cursor-pointer hover:opacity-60 `}
                  onClick={() => handleManagementClick('addProduct')}>
                  新增農產品
                </p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="p-12 w-full flex items-center gap-8 hover:bg-primary-yellow mb-4 hover:rounded-8"
                onClick={() => handleClick('order')}>
                <LogoImg widthProps={24} heightProps={24} />
                <h3 className="text-16">訂單管理</h3>
              </button>
              <div className="text-14 pl-12 flex flex-col gap-8">
                <p
                  className={`${orderSubPage === '所有訂單' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
                  onClick={() => handleOrderClick('所有訂單')}>
                  所有訂單
                </p>
                <p
                  className={`${orderSubPage === '未出貨訂單' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
                  onClick={() => handleOrderClick('未出貨訂單')}>
                  未出貨訂單
                </p>
                <p
                  className={`${orderSubPage === '已出貨訂單' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
                  onClick={() => handleOrderClick('已出貨訂單')}>
                  已出貨訂單
                </p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="p-12 w-full flex items-center gap-8 hover:bg-primary-yellow mb-4 hover:rounded-8"
                onClick={() => handleClick('live')}>
                <LogoImg widthProps={24} heightProps={24} />
                <h3 className="text-16">直播設定</h3>
              </button>
              <p className="text-14 pl-12">直播設定</p>
            </div>
          </div>
        </div>
        {activeSection === 'account' && <AccountSettng />}
        {activeSection === 'management' &&
          (managementSubPage === 'allProducts' ? (
            <AllProducts onAddProductClick={handleAddProductClick} />
          ) : (
            <AddProduct />
          ))}
        {activeSection === 'order' && (
          <AllOrders
            selectedTab={orderSubPage}
            onTabChange={handleOrderTabChange}
          />
        )}
      </section>
    </>
  );
};

export default DashboardPage;
