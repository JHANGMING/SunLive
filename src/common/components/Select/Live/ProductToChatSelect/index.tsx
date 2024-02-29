import React from 'react';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { Controller } from 'react-hook-form';
import useClient from '@/common/hooks/useClient';
import { LiveProductSelectProps, OptionType } from './data';

const ProductToChatSelect = ({ control }: LiveProductSelectProps) => {
  const isClient = useClient();
  const customStyles: StylesConfig<string | Date | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      height: '53px',
      width: '100%',
      borderRadius: '8px',
      border: `${state.isFocused ? '1px solid #47835A' : '1px solid #CCCCCC'} !important`,
      boxShadow: `${state.isFocused ? '0 0 0 1px #47835A' : 'none'} !important`,
      outline: 'none !important',
      paddingLeft: '8px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightgray !important' : undefined,
      color: '#333333',
      boxShadow: 'none',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999999',
      fontSize: '14px',
    }),
  };
  return (
    <div className="w-[30%]">
      {isClient && (
        <>
          <label htmlFor="liveProduct" className="text-16 block mb-8">
            直播聊天室置頂農產品
          </label>
          <Controller
            name="ProductToChat"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                instanceId="liveProduct"
                placeholder="選擇聊天室置頂農產品"
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

export default ProductToChatSelect;
