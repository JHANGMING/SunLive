import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useAuth from '@/common/hooks/useAuth';
import DashboardPage from '@/modules/DashboardPage';
import Loading from '@/components/Loading/Loading';
import { DashboardLayoutProps } from './data';

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const auth = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    if (auth?.category !== '1') {
      router.replace('/404');
    }
  }, [auth]);
  if (!isClient) {
    return <Loading />;
  }
  if (auth?.category !== '1') return null;
  return (
    <section className="pt-60 pb-[194px] container flex gap-[74px]">
      <DashboardPage />
      {children}
    </section>
  );
};

export default DashboardLayout;
