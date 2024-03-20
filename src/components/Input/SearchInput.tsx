import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { searchParams } from '@/constants/api/nextApiParams';
import { setSearchData } from '@/redux/features/productSlice';
import { SearchInputProps } from './data';

const SearchInput = ({ headerVisible = false, onClick }: SearchInputProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const { searchTag } = useSelector((state: RootState) => state.product);

  const handlerSearch = async () => {
    if (!inputValue) return;
    const apiParams = { ...searchParams, data: inputValue.trim() };
    try {
      const result = await fetchNextApi(apiParams);
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
  const inputStyle = headerVisible === true
    ? 'w-400 h-48 bg-blueWhite rounded-20'
    : 'w-680 h-48 rounded-12';
  const iconBackgoound = headerVisible === true
    ? 'bg-primary-yellow rounded-20'
    : 'bg-primary-green rounded-tr-12 rounded-br-12';
  const iconStyle = headerVisible === true ? 'text-20 text-mediumGray' : 'text-white ';
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={searchTag || '輸入水果、蔬菜'}
        className={`${inputStyle} border pl-16 focus-visible:outline-none tracking-widest`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        type="button"
        aria-label="Search"
        className={` w-53 h-48 flex justify-center items-center absolute top-0 right-0 cursor-pointer hover:opacity-80 ${iconBackgoound} ${headerVisible ? 'fade-in' : ''}`}
        onClick={handlerSearch}
      >
        <BsSearch className={`"text-20 ${iconStyle}`} />
      </button>
    </div>
  );
};

export default SearchInput;
