import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';

const Test = () => {
  const router = useRouter();
  useEffect(() => {
    const { code } = router.query;

    const handerVerify = async (code: string) => {
      const apiParams: apiParamsType = {
        apiPath: nextRoutes['verify'],
        method: 'POST',
        data: { code },
      };
      try {
        const result = await fetchNextApi(apiParams);
        if (result.statusCode === 200) {
          const token = result.data.token;
          if (window.opener) {
            // 确保这里的URL是你的主应用的URL
            window.opener.postMessage(
              { type: 'auth', token: token },
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

    if (code) {
      handerVerify(code as string);
    }
  }, [router.query]);

  return null; // 如果这个组件只是用来处理登录逻辑，它可能不需要渲染任何实际的UI
};

export default Test;
