import { GetServerSidePropsContext } from 'next';
import { setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import Layout from '@/common/components/Layout';
import LoginPage from '@/modules/Auth/LoginPage';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from '@/constants/apiPaths';
import Toast from '@/common/components/Toast';
import { LoginPrpos, ROUTES } from '@/modules/Auth/data';
import { setAllCookies } from '@/common/helpers/getCookie';
import { useRouter } from 'next/router';
import Loading from '@/common/components/Loading/Loading';

const Login = ({ errorMessage, loginData }: LoginPrpos) => {
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (errorMessage) {
      setToastMessage(errorMessage);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (loginData) {
      handleLoginData();
    }
  }, [loginData]);
  const handleLoginData = async () => {
    setLoading(true);
    if (loginData) {
      setAllCookies(loginData); 
      const redirectTo = loginData.category
        ? ROUTES.DASHBOARD_ACCOUNT
        : ROUTES.HOME;
      await router.push(redirectTo);
      setLoading(false);
    }
  };

  return (
    <Layout pageCategory="authPage" classStyle="px-110 pb-80">
      {loading && <Loading />}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
      <LoginPage />
    </Layout>
  );
};

export default Login;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let loginData = [];
  const { req, res } = context; 
  const {
    guid = 'defaultGuid',
    account = 'defaultAccount',
    time = 'defaultTime',
  } = context.query;

  const hasValidQueryParams =
    guid !== 'defaultGuid' ||
    account !== 'defaultAccount' ||
    time !== 'defaultTime';

  if (!hasValidQueryParams) {
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

  try {
    const loginParams: ApiParamsType = {
      apiPath: apiPaths['passwordlessVerify'],
      method: 'POST',
      data: { guid, account, time: Number(time) },
    };

    const loginResponse = await fetchApi(loginParams);
    if (loginResponse.statusCode === 200) {
      loginData= loginResponse.data;
      setCookie('token', loginResponse.token, {
        req,
        res,
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 24 * 60 * 60,
      });
    }else{
      return {
        props: {
          errorMessage: loginResponse.message,
        },
      };
    }

  } catch (error) {
    console.error('API call failed:', error);
  }

  return {
    props: {
      loginData,
    },
  };
};