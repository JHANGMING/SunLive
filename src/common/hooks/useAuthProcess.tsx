import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import authTab from '@/constants/lib/authTab';
import { nextRoutes } from '@/constants/api/apiPaths';
import { setAllCookies } from '@/common/helpers/getCookie';
import { showLoading, setToast } from '@/redux/features/messageSlice';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';

const ROUTES = {
  DASHBOARD_ACCOUNT: '/dashboard/account',
  HOME: '/',
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useAuthProcess = (loginResponse :any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginData = loginResponse?.data;
  const token = loginResponse?.token;
  const setToken = async (authToken: string) => {
    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.setToken,
      method: 'POST',
      data: { token: authToken },
    };

    try {
      await fetchNextApi(apiParams);
    } catch (error) {
      console.error('Setting token failed:', error);
    }
  };
  const handleLoginData = async () => {
    setAllCookies(loginData);
    const redirectTo = loginData.category
      ? ROUTES.DASHBOARD_ACCOUNT
      : ROUTES.HOME;
    await router.push(redirectTo);
  };

  useEffect(() => {
    if (!loginResponse) return;
    setToken(token);
    handleLoginData();
    dispatch(showLoading());
    dispatch(
      setToast({
        message: authTab.welcome,
      }),
    );
  }, [loginData, router]);
};

export default useAuthProcess;
