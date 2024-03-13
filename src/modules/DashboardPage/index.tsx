import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LogoImg from '@/common/components/Logo/LogoImg';
import ProfileImgSection from '../PersonInfoPage/ProfileImgSection';

const DashboardPage = () => {
  const router = useRouter();
  const [subPage, setSubPage] = useState('');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const page = router.pathname;
    if (page.startsWith('/dashboard/orders/') && router.query.orderId) {
      setActiveSection('order');
      const orderId = Array.isArray(router.query.orderId)
        ? router.query.orderId[0]
        : router.query.orderId;
      setSubPage(orderId);
    } else if (page.startsWith('/dashboard/products/')) {
      setActiveSection('products');
    } else if (page.startsWith('/dashboard/live/')) {
      setActiveSection('live');
    } else {
      switch (page) {
        case '/dashboard/account':
          setActiveSection('account');
          break;
        case '/dashboard/products':
          setSubPage('allProducts');
          setActiveSection('products');
          break;
        case '/dashboard/products/addproduct':
          setSubPage('addProduct');
          setActiveSection('products');
          break;
        case '/dashboard/live':
          setSubPage('allLive');
          setActiveSection('live');
          break;
        case '/dashboard/live/livesetting':
          setSubPage('liveSetting');
          setActiveSection('live');
          break;
        default:
          setActiveSection('');
          setSubPage('');
      }
    }
  }, [router.pathname, router.query]);

  return (
    <div className="w-3/12">
      <div className=" bg-white rounded-20 flex flex-col justify-center items-center py-24 gap-8 mb-40">
        <ProfileImgSection />
      </div>
      <div className="bg-white px-16 pt-24 pb-[119px] flex flex-col gap-32 rounded-20">
        <Link
          type="button"
          href="/dashboard/account"
          className={`p-12  flex items-center gap-8 mb-32 ${activeSection === 'account' ? 'bg-primary-yellow rounded-8' : ''} `}
        >
          <LogoImg classProps="w-24 h-24" />
          <h3 className="text-16">帳號設定</h3>
        </Link>
        <div>
          <Link
            href="/dashboard/products"
            className={`p-12 w-full flex items-center gap-8 ${activeSection === 'products' ? 'bg-primary-yellow rounded-8' : ''} mb-4 `}
          >
            <LogoImg classProps="w-24 h-24" />
            <h3 className="text-16">農產品管理</h3>
          </Link>
          <div className="text-14 pl-12 flex flex-col gap-8">
            <Link
              href="/dashboard/products"
              className={`${subPage === 'allProducts' && 'text-primary-green'} cursor-pointer hover:opacity-60 `}
            >
              所有農產品
            </Link>
            <Link
              href="/dashboard/products/addproduct"
              className={`${subPage === 'addProduct' && 'text-primary-green'} cursor-pointer hover:opacity-60 `}
            >
              新增農產品
            </Link>
          </div>
        </div>
        <div>
          <Link
            href="/dashboard/orders/allorders"
            className={`p-12 w-full flex items-center gap-8 mb-4 ${activeSection === 'order' ? 'bg-primary-yellow rounded-8' : ''}`}
          >
            <LogoImg classProps="w-24 h-24" />
            <h3 className="text-16">訂單管理</h3>
          </Link>
          <div className="text-14 pl-12 flex flex-col gap-8">
            <Link
              href="/dashboard/orders/allorders"
              className={`${subPage === 'allorders' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
            >
              所有訂單
            </Link>
            <Link
              href="/dashboard/orders/unshippedorders"
              className={`${subPage === 'unshippedorders' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
            >
              未出貨訂單
            </Link>
            <Link
              href="/dashboard/orders/shippedorders"
              className={`${subPage === 'shippedorders' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
            >
              已出貨訂單
            </Link>
          </div>
        </div>
        <div>
          <Link
            href="/dashboard/live"
            className={`p-12 w-full flex items-center gap-8 ${activeSection === 'live' ? 'bg-primary-yellow rounded-8' : ''} mb-4`}
          >
            <LogoImg classProps="w-24 h-24" />
            <h3 className="text-16">直播設定</h3>
          </Link>
          <div className="text-14 pl-12 flex flex-col gap-8">
            <Link
              href="/dashboard/live"
              className={`${subPage === 'allLive' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
            >
              所有直播
            </Link>
            <Link
              href="/dashboard/live/livesetting"
              className={`${subPage === 'liveSetting' && 'text-primary-green'} cursor-pointer hover:opacity-60`}
            >
              直播設定
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
