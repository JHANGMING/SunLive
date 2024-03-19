
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/common/components/Layout';
import LoginPage from '@/modules/Auth/LoginPage';
import { LoginPrpos } from '@/modules/Auth/data';
import { apiPaths } from '@/constants/api/apiPaths';
import fetchApi, { ApiParamsType } from '@/common/helpers/fetchApi';
import { setToast } from '@/redux/features/messageSlice';
import useAuthProcess from '@/common/hooks/useAuthProcess';

const Login = ({ errorMessage, loginData: initialLoginData }: LoginPrpos) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState(initialLoginData);
  const handleMessage = async (event: MessageEvent) => {
    const expectedOrigin = 'https://sun-live.vercel.app';
    if (event.origin !== expectedOrigin) {
      return;
    }
    if (event.data.type === 'auth') {
      setLoginData(event.data.result);
    }
  };
  useEffect(() => {
    if (!errorMessage) return;
    dispatch(setToast({ message: errorMessage }));
  }, [errorMessage]);
  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);
  useAuthProcess(loginData);
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
  const {
    guid = 'defaultGuid',
    account = 'defaultAccount',
    time = 'defaultTime',
  } = context.query;
  const hasValidQueryParams = guid !== 'defaultGuid' || account !== 'defaultAccount' || time !== 'defaultTime';

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
      loginData = loginResponse;
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
