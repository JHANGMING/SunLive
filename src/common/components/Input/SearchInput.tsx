import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import React from 'react';
import { useRouter } from 'next/router';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
type SearchInputProps = {
  headerVisible?: boolean;
  onClick?: () => void;
};
const SearchInput = ({ headerVisible = false, onClick }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const handlerSearch = async() => {
    if (!inputValue) return;
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['search'],
      method: 'POST',
      data: inputValue.trim(),
    };
    try {
    const result = await fetchNextApi(apiParams);
    console.log(result);
    router.push('/search');
    // if (result.message==="取得成功") {
    //   setLoading(true);
    //   console.log(result);
    //   // dispatch(setUserData({ data: result.data, token: result.token }));
    //   setAllCookies(result.data);
    //   const id = setTimeout(async () => {
    //     const redirectTo = result.data.category
    //       ? ROUTES.DASHBOARD_ACCOUNT
    //       : ROUTES.HOME;
    //     await router.push(redirectTo);
    //     setLoading(false);
    //   }, 1500);
    //   setTimeoutId(id);
  //   } else {
  //     setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
  //   }
  } catch (error) {
    console.error('取得失败', error);
    // setLoading(false);
  }
    setInputValue('');

    if (headerVisible) {
      onClick?.();
    }
    // router.push('/search');
  };

  // const { email, password } = data;
  // const dataObj = {
  //   email: email.trim(),
  //   password: password.trim(),
  // };
  // const apiParams: apiParamsType = {
  //   apiPath: nextRoutes['login'],
  //   method: 'POST',
  //   data: dataObj,
  // };
  // try {
  //   const result = await fetchNextApi(apiParams);
  //   if (result.statusCode === 200) {
  //     setLoading(true);
  //     console.log(result);
  //     // dispatch(setUserData({ data: result.data, token: result.token }));
  //     setAllCookies(result.data);
  //     const id = setTimeout(async () => {
  //       const redirectTo = result.data.category
  //         ? ROUTES.DASHBOARD_ACCOUNT
  //         : ROUTES.HOME;
  //       await router.push(redirectTo);
  //       setLoading(false);
  //     }, 1500);
  //     setTimeoutId(id);
  //   } else {
  //     setToastMessage(`${result.statusCode} ${result.message || '未知錯誤'}`);
  //   }
  // } catch (error) {
  //   console.error('登入失败', error);
  //   setLoading(false);
  // }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    handlerSearch();
  };
  const inputStyle =
    headerVisible === true
      ? 'w-400 h-48 bg-blueWhite rounded-20'
      : 'w-680 h-48 rounded-12';
  const iconBackgoound =
    headerVisible === true
      ? 'bg-primary-yellow rounded-20'
      : 'bg-primary-green rounded-tr-12 rounded-br-12';
  const iconStyle =
    headerVisible === true ? 'text-20 text-mediumGray' : 'text-white ';
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="輸入水果、蔬菜"
        className={`${inputStyle} border pl-16 focus-visible:outline-none tracking-widest`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div
        className={` w-53 h-48 flex justify-center items-center absolute top-0 right-0 cursor-pointer hover:opacity-80 ${iconBackgoound} ${headerVisible ? 'fade-in' : ''}`}
        onClick={handlerSearch}>
        <BsSearch className={`"text-20 ${iconStyle}`} />
      </div>
    </div>
  );
};

export default SearchInput;
