import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import Loading from '@/components/Loading/Loading';
import { showLoading } from '@/redux/features/messageSlice';
import { googleVerifyParams } from '@/constants/api/nextApiParams';

const Verify = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handerVerify = async (code: string) => {
    const apiParams = { ...googleVerifyParams, data: { code } };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        const targetOrigin = 'https://sun-live.vercel.app';
        if (window.opener) {
          window.opener.postMessage({ type: 'auth', result }, targetOrigin);
          window.close();
        } else {
          console.error('No window.opener available');
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    dispatch(showLoading());
    const { code } = router.query;
    if (code) {
      handerVerify(code as string);
    }
  }, [router]);

  return <Loading />;
};

export default Verify;
