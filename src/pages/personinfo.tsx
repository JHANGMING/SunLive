import wrapper from '@/redux/store';
import { getCookies } from 'cookies-next';
import Layout from '@/common/components/Layout';
import PersonInfoPage from '@/modules/PersonInfoPage';
const PersonInfo = () => {
  return (
    <Layout pageCategory="personInfoPage">
      <PersonInfoPage />
    </Layout>
  );
};

export default PersonInfo;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const cookies = getCookies({ req, res });
      const token = cookies.token;
      if (!token) {
        return {
          redirect: {
            destination: '/auth/login',
            permanent: false,
          },
        };
      }
      return {
        props: {
        },
      };
    }
);
