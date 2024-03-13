import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = getCookie('token', { req: context.req });
  if (!token) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
