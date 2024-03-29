import Select, { StylesConfig } from 'react-select';
import { useDispatch } from 'react-redux';
import { Controller } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import useClient from '@/common/hooks/useClient';
import { setToast } from '@/redux/features/messageSlice';
import fetchNextApi from '@/common/helpers/fetchNextApi';
import { productLiveParams } from '@/constants/api/nextApiParams';
import { transformDataForSelect } from '@/common/helpers/transDataForLiveSelect';
import { LiveProductSelectProps, OptionType } from './data';

const LiveProductSelect = ({ control, id }: LiveProductSelectProps) => {
  const isClient = useClient();
  const dispatch = useDispatch();
  const [products, setProducts] = useState<OptionType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetchNextApi(productLiveParams);
        if (result.statusCode === 200) {
          const data = transformDataForSelect(result.data);
          setProducts(data);
        } else {
          dispatch(setToast({ message: result.message }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (isClient) {
      fetchProducts();
    }
  }, [isClient]);
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
    <div className="w-full">
      {isClient && (
        <>
          <label htmlFor="liveProduct" className="text-16 block mb-8">
            農產品
          </label>
          <Controller
            name={id!}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                instanceId="liveProduct"
                placeholder="選擇產品"
                options={products}
                styles={customStyles}
                value={products.find((option) => option.value === field.value)}
                onChange={(val) => {
                  let value = null;
                  if (typeof val === 'object' && val !== null) {
                    value = (val as { value: string; label: string }).value;
                  }
                  field.onChange(value);
                }}
              />
            )}
          />
        </>
      )}
    </div>
  );
};

export default LiveProductSelect;
