import fetchNextApi, { apiParamsType } from "@/common/helpers/fetchNextApi";
import { setCookie } from 'cookies-next';
import { nextRoutes } from "@/constants/apiPaths";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
const Test = () => {
  const router = useRouter();
  const [token, setToken] = useState('')
  useEffect(() => {
    const {code }= router.query;
    console.log('code:', code);
    if (code) {
      handerVerify(code as string);
      if (window.opener) {
        window.opener.postMessage(
          { type: 'auth', token: token},
          '*'
        );
        window.close(); 
      } else {
        console.error('No window.opener available');
      }
      window.close();
    }
  }, [router]);

  const handerVerify = async (code:string) => {
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['verify'],
      method: 'POST',
      data: { code: code },
    };
    try {
      const result = await fetchNextApi(apiParams);
      console.log('verify', result);
      if (result.statusCode === 200) {
        // setToken(result.data.token);
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
    <button
      type="button"
      className=" w-[150px] h-60 bg-primary-green text-white hover:opacity-80"
      // onClick={hander}
      >
      按鈕
    </button>
  );
};

export default Test;
