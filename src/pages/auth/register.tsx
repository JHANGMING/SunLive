import Layout from '@/components/Layout';
import RegisterPage from '@/modules/Auth/RegisterPage';

const Register = () => {
  return (
    <Layout pageCategory="authPage" classStyle="px-165 pb-40">
      <RegisterPage />
    </Layout>
  );
};

export default Register;
