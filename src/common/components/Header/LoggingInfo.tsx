import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import useAuth from '@/common/hooks/useAuth';
import { removeAllCookies } from '@/common/helpers/getCookie';
import { nextRoutes } from '@/constants/apiPaths';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { useAuthStatus } from '@/common/hooks/useAuthStatus';
import LogoImg from '../Logo/LogoImg';
import { LoggingInfoProps } from './data';
import { useDispatch } from 'react-redux';
import { setToast } from '@/redux/features/messageSlice';

const LoggingInfo = ({ dropdownClass }: LoggingInfoProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { authStatus } = useAuthStatus();
  const auth = useAuth();
  const handlerLoginOut = async () => {
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['logout'],
      method: 'POST',
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        setCookie('authStatus', 'false');
        router.push('/auth/login');
        removeAllCookies();
      } else if (result.statusCode === 409) {
        removeAllCookies();
        setCookie('authStatus', 'false');
        router.push('/auth/login');
        dispatch(
          setToast({
            message: `${result.message}`,
          })
        );
      } else {
        dispatch(
          setToast({
            message: `${result.message || '未知錯誤'}`,
          })
        );
      }
    } catch (error) {
      console.error('登入失败', error);
    }
  };

  return (
    <div
      className={`${dropdownClass} absolute right-16 top-60 py-24 px-20 w-[196px] bg-white z-50 border-4 border-primary-yellow rounded-12 rounded-tr-none`}>
      {!authStatus ? (
        <>
          <Link
            href="/auth/login"
            className=" bg-primary-yellow py-8 w-full block rounded-8 text-center mb-8 hover:font-bold">
            會員登入
          </Link>
          <Link
            href="/auth/register"
            className="border border-primary-yellow py-8 w-full block rounded-8 text-center hover:font-bold">
            註冊新會員
          </Link>
        </>
      ) : (
        <div className="flex gap-10 items-center">
          <LogoImg classProps="w-24 h-24" />
          <p className="text-14">歡迎回來 !</p>
        </div>
      )}
      <div className="mt-16 border-t border-lightGray pt-20">
        {authStatus && auth?.category === '1' ? (
          <Link
            href="/dashboard/account"
            className="mb-8 hover:text-primary-green ">
            我的後台
          </Link>
        ) : (
          <Link
            href="/personinfo?section=account"
            className="mb-8 hover:text-primary-green ">
            我的帳戶
          </Link>
        )}
        <Link
          href={
            auth?.category === '1'
              ? '/dashboard/orders/allorders'
              : '/personinfo?section=order'
          }
          className="hover:text-primary-green mb-8">
          {auth?.category === '1' ? '訂單管理' : '訂單查詢'}
        </Link>
        {authStatus && (
          <>
            <button
              type="button"
              className="hover:text-primary-green tracking-widest"
              onClick={handlerLoginOut}>
              會員登出
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoggingInfo;
