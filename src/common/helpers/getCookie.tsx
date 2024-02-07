
import { getCookies, setCookie, deleteCookie } from 'cookies-next';
type ResultDataType = {
  [key: string]: string |  null;
};

// 設置Cookies
export const setAllCookies = (resultData: ResultDataType) => {
  Object.entries(resultData).forEach(([key, value]) => {
    if (key !== 'token') {
      setCookie(key, value === null ? '' : value, { maxAge: 60 * 60 * 24 });
    }
  });
};



export const removeAllCookies = () => {
  // 取得所有的cookie
  const allCookies = getCookies();
  Object.keys(allCookies).forEach((cookieKey) => {
    deleteCookie(cookieKey);
  });
};

