import { useEffect } from 'react';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { liveIdentityParams } from '@/constants/api/nextApiParams';
import { LiveAccontVerifyProps } from './data';

const LiveAccontVerify = ({
  accessToken,
  setAccessToken,
}: LiveAccontVerifyProps) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const expectedOrigin = 'https://sun-live.vercel.app';
      if (event.origin !== expectedOrigin) {
        return;
      }
      if (event.data && event.data.type === 'auth') {
        setAccessToken(event.data.token);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const handlerIdentity = async () => {
    try {
      const result = await fetchNextApi(liveIdentityParams);
      if (result.statusCode === 200) {
        window.open(result.url, '_blank');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-white rounded-20 py-18 pl-28 flex flex-col gap-8 mb-40">
      <div className="flex items-center gap-16">
        <button
          type="button"
          className={`${accessToken ? 'bg-darkGray cursor-not-allowed text-white' : 'bg-primary-yellow cursor-pointer hover:opacity-70'}  text-16 font-normal py-10 px-12 rounded-8 `}
          onClick={handlerIdentity}
          disabled={!!accessToken}
        >
          驗證帳號
        </button>
        {!!accessToken && (
          <p className="text-primary-green font-bold">驗證成功</p>
        )}
      </div>
      <p>
        <span className=" text-primary-red">*</span>
        新增直播前，請先驗證帳號（需有youTube直播權限）
      </p>
    </div>
  );
};

export default LiveAccontVerify;
