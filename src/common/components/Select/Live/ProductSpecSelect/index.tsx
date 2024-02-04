import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { ProductSpecSelectProps, OptionType, productSpecData } from './data';
import useClient from '@/common/hooks/useClient';

const ProductSpecSelect = ({ control, id }: ProductSpecSelectProps) => {
  const isClient = useClient();
  const customStyles: StylesConfig<string | Date | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      height: '53px',
      width: '100%',
      borderRadius: '8px',
      border: `${state.isFocused ? '1px solid #1d1d1d' : '1px solid #CCCCCC'} !important`,
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
    <div className="w-full">
      {isClient && (
        <>
          <label htmlFor="liveProductSpec" className="text-16 block mb-8">
            規格
          </label>
          <Controller
            name={id!}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                instanceId="liveProductSpec"
                placeholder="選擇規格"
                options={productSpecData}
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

export default ProductSpecSelect;
