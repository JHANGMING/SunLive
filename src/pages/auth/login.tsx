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
import { useDispatch } from 'react-redux';
import { setToast, showLoading } from '@/redux/features/messageSlice';
import { authTab } from '@/common/lib/authTab';

const Login = ({ errorMessage, loginData }: LoginPrpos) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMessage) {
       dispatch(setToast({ message: errorMessage }));
    }
  }, [errorMessage]);
  useEffect(() => {
    if (loginData) {
      handleLoginData();
      dispatch(showLoading());
      dispatch(
        setToast({
          message: authTab['welcome'],
        })
      );
    }
  }, [loginData]);
  const handleLoginData = async () => {
    if (loginData) {
      setAllCookies(loginData); 
      const redirectTo = loginData.category
        ? ROUTES.DASHBOARD_ACCOUNT
        : ROUTES.HOME;
      await router.push(redirectTo);
    }
  };

  return (
    <Layout pageCategory="authPage" classStyle="px-110 pb-80">
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