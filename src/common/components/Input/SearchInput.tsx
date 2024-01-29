import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import React from 'react';
import { useRouter } from 'next/router';
type SearchInputProps = {
  headerVisible?: boolean;
  onClick?: () => void;
};
const SearchInput = ({ headerVisible = false, onClick }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const handlerSearch = () => {
    if (inputValue) {
      console.log(inputValue);
    }

    setInputValue('');

    if (headerVisible) {
      onClick?.();
    }
    router.push('/search');
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
