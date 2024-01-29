import Layout from '@/common/components/Layout';
import PasswordlessLoginPage from '@/modules/Auth/PasswordlessLoginPage';

const PasswordlessLogin = () => {
  return (
    <Layout pageCategory="authPage" classStyle="px-165 pb-80">
      <PasswordlessLoginPage />
    </Layout>
  );
};

export default PasswordlessLogin;
