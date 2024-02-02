import Layout from '@/common/components/Layout';
import DashboardPage from '@/modules/DashboardPage';
import AccountSettng from '@/modules/DashboardPage/AccountSettng';
const Account = () => {
  return (
    <Layout pageCategory="dashboardPage">
      <AccountSettng/>
    </Layout>
  );
};

export default Account;
