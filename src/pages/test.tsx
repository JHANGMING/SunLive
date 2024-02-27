import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { nextRoutes } from "@/constants/apiPaths";
import fetchNextApi, { apiParamsType } from "@/common/helpers/fetchNextApi";
import Loading from '@/common/components/Loading/Loading';
const Test = () => {
  const router = useRouter();
  const [token, setToken] = useState('')
  useEffect(() => {
    const { code } = router.query;
    if (code) {
      handerVerify(code as string);
    }
  }, [router, token]);

  const handerVerify = async (code:string) => {
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
  return (
    <Loading/>
  );
};

export default Test;
