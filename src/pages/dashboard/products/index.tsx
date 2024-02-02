import Layout from '@/common/components/Layout';
import DashboardPage from '@/modules/DashboardPage';
import AccountSettng from '@/modules/DashboardPage/AccountSettng';
import AllProducts from '@/modules/DashboardPage/Management/AllProducts';
const Products = () => {
  return (
    <Layout pageCategory="dashboardPage">
      <AllProducts />
    </Layout>
  );
};

export default Products;
