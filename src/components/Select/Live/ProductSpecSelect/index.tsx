import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { Controller } from 'react-hook-form';
import useClient from '@/common/hooks/useClient';
import { ProductSpecSelectProps, OptionType, productSpecData } from './data';

const ProductSpecSelect = ({ control, id }: ProductSpecSelectProps) => {
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
      border: `${state.isFocused ? '1px solid #1d1d1d' : '1px solid #CCCCCC'} !important`,
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
                value={productSpecData.find(
                  (option) => option.value === field.value,
                )}
                onChange={(val) => {
                  if (typeof val === 'object' && val !== null) {
                    field.onChange((val as OptionType).value);
                  }
                }}
              />
            )}
          />
        </>
      )}
    </div>
  );
};

export default ProductSpecSelect;
