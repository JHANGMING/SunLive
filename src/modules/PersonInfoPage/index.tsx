import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useAuth from '@/common/hooks/useAuth';
import LogoImg from '@/common/components/Logo/LogoImg';
import AllOrders from './AllOrders';
import AccountSetting from './AccountSetting';
import ProfileImgSection from './ProfileImgSection';

const PersonInfoPage = () => {
  const auth = useAuth();
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
  if (auth?.category === '1') return null;
  const handleAccountClick = () => {
    setActiveSection('account');
  };

  const handleOrderClick = () => {
    setActiveSection('order');
  };
  const accountButtonClass = `p-12 flex items-center gap-8 mb-32 ${activeSection === 'account' ? 'bg-primary-yellow rounded-8' : 'hover:opacity-80'}`;
  const orderButtonClass = `p-12 flex items-center gap-8 mb-4 ${activeSection === 'order' ? 'bg-primary-yellow rounded-8' : 'hover:opacity-80'}`;
  return (
    <section className="pt-60 pb-120 container flex gap-[74px]">
      <div className="w-3/12">
        <div className=" bg-white rounded-20 flex flex-col justify-center items-center py-24 gap-8 mb-40">
          <ProfileImgSection />
        </div>
        <div className="bg-white px-16 pt-24 pb-[119px] flex flex-col rounded-20">
          <button
            onClick={handleAccountClick}
            type="button"
            className={accountButtonClass}
          >
            <LogoImg classProps="w-24 h-24" />
            <p>帳號設定</p>
          </button>
          <button
            onClick={handleOrderClick}
            type="button"
            className={orderButtonClass}
          >
            <LogoImg classProps="w-24 h-24" />
            <p>訂單總覽</p>
          </button>
          <p
            className={`text-14 pl-12 ${activeSection === 'order' && 'text-primary-green'}`}
          >
            所有訂單
          </p>
        </div>
      </div>
      <div className="w-9/12 bg-white rounded-20 p-32">
        {activeSection === 'account' && <AccountSetting />}
        {activeSection === 'order' && <AllOrders />}
      </div>
    </section>
  );
};

export default PersonInfoPage;
