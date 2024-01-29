import LogoImg from '@/common/components/Logo/LogoImg';
import ProfileImgSection from './ProfileImgSection';
import AccountSetting from './AccountSetting';
import { useEffect, useState } from 'react';
import AllOrders from './AllOrders';
import { useRouter } from 'next/router';

const PersonInfoPage = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('account');
  useEffect(() => {
    const section = Array.isArray(router.query.section)
      ? router.query.section[0]
      : router.query.section;
    if (section) {
      setActiveSection(section);
    }
  }, [router.query.section]);

  const handleAccountClick = () => {
    setActiveSection('account');
  };

  const handleOrderClick = () => {
    setActiveSection('order');
  };
  return (
    <>
      <section className="pt-60 pb-120 container flex gap-[74px]">
        <div className="w-3/12">
          <div className=" bg-white rounded-20 flex flex-col justify-center items-center py-24 gap-8 mb-40">
            <ProfileImgSection />
            <h2 className="text-24">jelly</h2>
          </div>
          <div className="bg-white px-16 pt-24 pb-[119px] flex flex-col rounded-20">
            <button
              onClick={handleAccountClick}
              type="button"
              className="p-12  flex items-center gap-8 mb-32 hover:bg-primary-yellow hover:rounded-8">
              <LogoImg widthProps={24} heightProps={24} />
              <p>帳號設定</p>
            </button>
            <button
              onClick={handleOrderClick}
              type="button"
              className="p-12 flex items-center gap-8 hover:bg-primary-yellow mb-4 hover:rounded-8">
              <LogoImg widthProps={24} heightProps={24} />
              <p>訂單總覽</p>
            </button>
            <p className="text-14 pl-12">所有訂單</p>
          </div>
        </div>
        <div className="w-9/12 bg-white rounded-20 p-32">
          {activeSection === 'account' && <AccountSetting />}
          {activeSection === 'order' && <AllOrders />}
        </div>
      </section>
    </>
  );
};

export default PersonInfoPage;
