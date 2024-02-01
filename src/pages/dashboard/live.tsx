import Layout from '@/common/components/Layout';
import DashboardPage from '@/modules/DashboardPage';
import AccountSettng from '@/modules/DashboardPage/AccountSettng';
import AllLive from '@/modules/DashboardPage/Management/AllLive';
import AllProducts from '@/modules/DashboardPage/Management/AllProducts';
const Live = () => {
  return (
    <Layout pageCategory="dashboardPage">
      <AllLive />
    </Layout>
  );
};

export default Live;
