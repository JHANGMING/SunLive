import Layout from '@/components/Layout';
import ResetPasswordPage from '@/modules/Auth/ResetPasswordPage';

const ResetPassword = () => {
  return (
    <Layout pageCategory="authPage" classStyle="px-165 pb-80">
      <ResetPasswordPage />
    </Layout>
  );
};

export default ResetPassword;
