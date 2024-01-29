import Layout from '@/common/components/Layout';
import LoginPage from '@/modules/Auth/LoginPage';

const Login = () => {
  return (
    <Layout pageCategory="authPage" classStyle="px-110 pb-80">
      <LoginPage />
    </Layout>
  );
};

export default Login;
