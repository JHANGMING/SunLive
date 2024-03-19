import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import authTabData from '@/common/lib/authTab';
import Layout from '@/common/components/Layout';
import LoginPage from '@/modules/Auth/LoginPage';
import { LoginPrpos, ROUTES } from '@/modules/Auth/data';
import { setAllCookies } from '@/common/helpers/getCookie';
import { apiPaths, nextRoutes } from '@/constants/api/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { setToast, showLoading } from '@/redux/features/messageSlice';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';

const Login = ({ errorMessage, loginData: initialLoginData }: LoginPrpos) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState(initialLoginData);
  const handleMessage = async (event: MessageEvent) => {
    const expectedOrigin = 'https://sun-live.vercel.app';
    if (event.origin !== expectedOrigin) {
      return;
    }
    if (event.data.type === 'auth') {
      const apiParams: NextapiParamsType = {
        apiPath: nextRoutes.setToken,
        method: 'POST',
        data: { token: event.data.result.token },
      };
      try {
        const result = await fetchNextApi(apiParams);
        if (result) {
          setLoginData(event.data.result.data);
        } else {
          dispatch(setToast({ message: `${result.message || '未知錯誤'}` }));
        }
      } catch (error) {
        console.error('登入失败', error);
      }
      console.error('event.data', event);
    }
  };
  const handleLoginData = async () => {
    if (!loginData) return;
    setAllCookies(loginData);
    const redirectTo = loginData.category
      ? ROUTES.DASHBOARD_ACCOUNT
      : ROUTES.HOME;
    await router.push(redirectTo);
  };
  useEffect(() => {
    if (!errorMessage) return;
    dispatch(setToast({ message: errorMessage }));
  }, [errorMessage]);
  useEffect(() => {
    if (!loginData) return;
    handleLoginData();
    dispatch(showLoading());
    dispatch(
      setToast({
        message: authTabData.welcome,
      }),
    );
  }, [loginData]);
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <Layout pageCategory="authPage" classStyle="px-110 pb-80">
      <LoginPage />
    </Layout>
  );
};

export default Login;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  let loginData = [];
  const { req, res } = context;
  const {
    guid = 'defaultGuid',
    account = 'defaultAccount',
    time = 'defaultTime',
  } = context.query;
  const hasValidQueryParams = guid !== 'defaultGuid'
    || account !== 'defaultAccount'
    || time !== 'defaultTime';

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
      apiPath: apiPaths.passwordlessVerify,
      method: 'POST',
      data: { guid, account, time: Number(time) },
    };

    const loginResponse = await fetchApi(loginParams);
    if (loginResponse.statusCode === 200) {
      loginData = loginResponse.data;
      setCookie('token', loginResponse.token, {
        req,
        res,
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 24 * 60 * 60,
      });
    } else {
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
