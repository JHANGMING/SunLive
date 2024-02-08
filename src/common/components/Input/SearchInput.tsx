import React,{ useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from '@/constants/apiPaths';
import { setSearchData } from '@/redux/features/productSlice';
import { SearchInputProps } from './data';

const SearchInput = ({ headerVisible = false, onClick }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const { searchTag } = useSelector((state: RootState) => state.product);
  const router = useRouter();

  const handlerSearch = async () => {
    if (!inputValue) return;
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['search'],
      method: 'POST',
      data: inputValue.trim(),
    };
    try {
      const result = await fetchNextApi(apiParams);
      console.log(result);

      if (result.statusCode === 200) {
        dispatch(setSearchData({ data: result.data, searchTag: inputValue }));
        router.push('/search');
      } else {
        console.error(`${result.statusCode} ${result.message || '未知錯誤'}`);
      }
    } catch (error) {
      console.error('取得失败', error);
    }
    setInputValue('');

    if (headerVisible) {
      onClick?.();
    }
  };

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
        placeholder={searchTag ? searchTag : '輸入水果、蔬菜'}
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
