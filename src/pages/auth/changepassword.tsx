import Layout from '@/common/components/Layout';
import ChangePasswordPage from '@/modules/Auth/ChangePasswordPage';

const ChangePassword = () => {
  return (
    <Layout pageCategory="authPage" classStyle="px-110 pb-80">
      <ChangePasswordPage />
    </Layout>
  );
};

export default ChangePassword;
