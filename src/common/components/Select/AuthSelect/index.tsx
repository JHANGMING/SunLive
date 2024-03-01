import React from 'react';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { Controller } from 'react-hook-form';
import useClient from '@/common/hooks/useClient';
import { AuthSelectProps, OptionType, optionsData } from './data';

const AuthSelect = ({ control }: AuthSelectProps) => {
  const isClient = useClient();
  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: '48px',
      paddingLeft: '4px',
      borderRadius: '8px',
      outline: 'none !important',
      boxShadow: `${state.isFocused ? '0 0 0 1px #47835A' : 'none'} !important`,
      border: `${state.isFocused ? '1px solid #47835A' : '1px solid #CCCCCC'} !important`,
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#333333',
      backgroundColor: state.isFocused ? 'lightgray !important' : undefined,
    }),
  };
  return (
    <div>
      {isClient && (
        <>
          <label htmlFor="identity" className="text-20 font-bold block mb-8">
            註冊身份{' '}
            <span className="text-20 font-bold text-primary-red">*</span>
          </label>
          <Controller
            name="identity"
            control={control}
            rules={{ required: '請選擇註冊身份' }}
            defaultValue={{
              value: '一般會員',
              label: '一般會員 (我想要查看或購買農產品)',
            }}
            render={({ field }) => (
              <Select
                {...field}
                options={optionsData}
                styles={customStyles}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />
        </>
      )}
    </div>
  );
};

export default AuthSelect;
