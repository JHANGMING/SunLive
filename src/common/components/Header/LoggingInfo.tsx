import Link from 'next/link';
import { LoggingInfoProps } from './data';
import  { removeAllCookies } from '@/common/helpers/getCookie';
import LogoImg from '../Logo/LogoImg';
import useAuth from '@/common/hooks/useAuth';
import { useRouter } from 'next/router';
import getAuthToken from '@/common/helpers/getAuthToken';

const LoggingInfo = ({ dropdownClass }: LoggingInfoProps) => {
  const router = useRouter();
  const authToken = getAuthToken();
  const auth = useAuth();
  
  const handlerLoginOut = () => {
    removeAllCookies();
    auth?.category === '0' ? router.reload() : router.push('/');
  };
  return (
    <div
      className={`${dropdownClass} absolute right-16 top-60 py-24 px-20 w-[196px] bg-white z-50 border-4 border-primary-yellow rounded-12 rounded-tr-none`}>
      {!authToken ? (
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
          <LogoImg classProps='w-24 h-24' />
          <p className="text-14">歡迎回來 !</p>
        </div>
      )}
      <div className="mt-16 border-t border-lightGray pt-20">
        {authToken && auth?.category === '1' ? (
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
          href="/personinfo?section=order"
          className="hover:text-primary-green mb-8">
          訂單查詢
        </Link>
        {authToken && (
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
