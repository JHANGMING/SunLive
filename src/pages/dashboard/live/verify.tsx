import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { nextRoutes } from "@/constants/apiPaths";
import Loading from '@/common/components/Loading/Loading';
import { showLoading } from '@/redux/features/messageSlice';
import fetchNextApi, { apiParamsType } from "@/common/helpers/fetchNextApi";
const Verify = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  useEffect(() => {
    dispatch(showLoading());
    const { code } = router.query;
    if (code) {
      handerVerify(code as string);
    }
  }, [router, token]);

  const handerVerify = async (code: string) => {
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['verify'],
      method: 'POST',
      data: { code: code },
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        setToken(result.token);
        if (window.opener) {
          window.opener.postMessage(
            { type: 'auth', token: result.token },
            'https://sun-live.vercel.app'
          );
          window.close();
        } else {
          console.error('No window.opener available');
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  return <Loading />;
};

export default Verify;