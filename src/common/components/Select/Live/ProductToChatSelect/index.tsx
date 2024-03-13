import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { Controller } from 'react-hook-form';
import useClient from '@/common/hooks/useClient';
import { LiveProductSelectProps, OptionType } from './data';

const ProductToChatSelect = ({ control }: LiveProductSelectProps) => {
  const isClient = useClient();
  const customStyles: StylesConfig<string | Date | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: '53px',
      paddingLeft: '8px',
      borderRadius: '8px',
      outline: 'none !important',
      boxShadow: `${state.isFocused ? '0 0 0 1px #47835A' : 'none'} !important`,
      border: `${state.isFocused ? '1px solid #47835A' : '1px solid #CCCCCC'} !important`,
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#333333',
      boxShadow: 'none',
      backgroundColor: state.isFocused ? 'lightgray !important' : undefined,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: '14px',
      color: '#999999',
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
