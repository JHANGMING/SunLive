import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import ChangePasswordPage from '@/modules/Auth/ChangePasswordPage';
import { ChangePasswordProps } from '@/modules/Auth/data';

const ChangePassword = ({ queryParams }:ChangePasswordProps) => {
  return (
    <Layout pageCategory="authPage" classStyle="px-110 pb-80">
      <ChangePasswordPage queryParams={queryParams} />
    </Layout>
  );
};

export default ChangePassword;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const {
    guid = 'defaultGuid',
    account = 'defaultAccount',
    time = 'defaultTime',
  } = context.query;

  const hasValidQueryParams =
    guid !== 'defaultGuid' ||
    account !== 'defaultAccount' ||
    time !== 'defaultTime';
  if (hasValidQueryParams) {
    return {
      props: {
        queryParams: {
          guid,
          account,
          time,
        },
      },
    };
  }
}
