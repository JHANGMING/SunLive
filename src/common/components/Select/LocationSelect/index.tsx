import React, { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import Select, { SingleValue } from 'react-select';
import { StylesConfig } from 'react-select';

import { LocationSelectProps, OptionType, countyOptions } from './data';
import useDistrictOptions from '@/common/hooks/useDistrictOptions';
import DefaultInput from '../../Input';
import useZipOptions from '@/common/hooks/useZipOptions';

const LocationSelect = ({
  control,
  id,
  countyName,
  districtName,
  register,
  errors,
}: LocationSelectProps) => {
  const [selectedCounty, setSelectedCounty] = useState('新北市');

  const districtOptions = useDistrictOptions(selectedCounty);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const zipOptions = useZipOptions(selectedDistrict);

  const handleCountyChange = (
    selectedOption: SingleValue<string | OptionType>
  ) => {
    if (
      typeof selectedOption === 'object' &&
      selectedOption !== null &&
      'value' in selectedOption
    ) {
      setSelectedCounty(selectedOption.value);
      setSelectedDistrict('');
    }
  };

  const handleDistrictChange = (
    selectedOption: SingleValue<string | OptionType>
  ) => {
    if (
      typeof selectedOption === 'object' &&
      selectedOption !== null &&
      'value' in selectedOption
    ) {
      setSelectedDistrict(selectedOption.value);
    }
  };

  useEffect(() => {
    if (districtOptions.length > 0 && !selectedDistrict) {
      setSelectedDistrict(districtOptions[0].value);
    }
  }, [districtOptions]);

  const customStyles: StylesConfig<string | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      height: '59px',
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
  };

  return (
    <>
      <div className="flex gap-24">
        <div className="w-1/2">
          <label htmlFor="county" className="text-18 block mb-8">
            縣市
          </label>
          <Controller
            name="county"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                instanceId={`${id}-county`}
                options={countyOptions}
                styles={customStyles}
                name={countyName}
                menuPortalTarget={
                  typeof document === 'undefined' ? null : document.body
                }
                onChange={(val) => {
                  field.onChange(val);
                  handleCountyChange(val);
                }}
              />
            )}
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="district" className="text-18 block mb-8">
            鄉鎮(市)區
          </label>
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                instanceId={`${id}-district`}
                options={districtOptions}
                styles={customStyles}
                name={districtName}
                value={
                  districtOptions.find(
                    (option) => option.value === selectedDistrict
                  ) || null
                }
                menuPortalTarget={
                  typeof document === 'undefined' ? null : document.body
                }
                onChange={(val) => {
                  field.onChange(val);
                  handleDistrictChange(val);
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="flex gap-24">
        <div className="w-1/2">
          <label htmlFor="zip" className="text-18 block mb-8">
            郵遞區號
          </label>
          <input
            className="w-full h-[59px] border border-lightGray rounded-8 px-16 focus-visible:outline-primary-green tracking-widest"
            id="zip"
            value={zipOptions.length > 0 ? zipOptions[0].value : ''}
            {...(register && register('zip'))}
            readOnly
          />
        </div>
        <DefaultInput
          page="cart"
          type="text"
          labelText="收貨地址"
          globalStyle="w-1/2"
          id="address"
          inputText="請輸入到貨地址"
          register={register}
          errors={errors}
          rules={{
            required: {
              value: true,
              message: '請輸入您的到貨地址!',
            },
          }}
        />
      </div>
    </>
  );
};

export default LocationSelect;
