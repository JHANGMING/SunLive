import Link from 'next/link';
import { NoLoggingProps } from './data';
import useAuthToken from '@/common/helpers/getCookie';
import LogoImg from '../Logo/LogoImg';

const LoggingInfo = ({ toggleDropdown, dropdownClass }: NoLoggingProps) => {
  const authToken = useAuthToken();

  return (
    <div
      className={`${dropdownClass} absolute right-16 top-60 py-24 px-20 w-[196px] bg-white z-50 border-4 border-primary-yellow rounded-12 rounded-tr-none`}>
      {!authToken ? (
        <>
          <Link
            href="/auth/login"
            onClick={toggleDropdown}
            className=" bg-primary-yellow py-8 w-full block rounded-8 text-center mb-8 hover:font-bold">
            會員登入
          </Link>
          <Link
            href="/auth/register"
            onClick={toggleDropdown}
            className="border border-primary-yellow py-8 w-full block rounded-8 text-center hover:font-bold">
            註冊新會員
          </Link>
        </>
      ) : (
        <div className="flex gap-10 items-center">
          <LogoImg widthProps={24} heightProps={24} />
          <p className="text-14">歡迎回來 !</p>
        </div>
      )}
      <div className="mt-16 border-t border-lightGray pt-20">
        <Link
          href="/personinfo?section=account"
          onClick={toggleDropdown}
          className="mb-8 hover:opacity-60">
          我的帳戶
        </Link>
        <Link
          href="/personinfo?section=order"
          onClick={toggleDropdown}
          className="hover:opacity-60 mb-8">
          訂單查詢
        </Link>
        {authToken && (
          <>
            <button type="button" className="hover:opacity-60 tracking-widest">
              會員登出
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoggingInfo;
