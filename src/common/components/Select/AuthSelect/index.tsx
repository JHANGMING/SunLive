import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { AuthSelectProps, OptionType, optionsData } from './data';

const AuthSelect = ({ control }: AuthSelectProps) => {
  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      height: '48px',
      width: '100%',
      borderRadius: '8px',
      border: `${state.isFocused ? '1px solid #47835A' : '1px solid #CCCCCC'} !important`,
      boxShadow: `${state.isFocused ? '0 0 0 1px #47835A' : 'none'} !important`,
      outline: 'none !important',
      paddingLeft: '4px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightgray !important' : undefined,
      color: '#333333',
    }),
  };
  return (
    <div>
      <label htmlFor="identity" className="text-20 font-bold block mb-8">
        註冊身份 <span className="text-20 font-bold text-primary-red">*</span>
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
    </div>
  );
};

export default AuthSelect;
