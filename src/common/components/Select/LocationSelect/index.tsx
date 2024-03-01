import { Controller } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import Select, { SingleValue, StylesConfig, ActionMeta } from 'react-select';
import useClient from '@/common/hooks/useClient';
import useZipOptions from '@/common/hooks/useZipOptions';
import useDistrictOptions from '@/common/hooks/useDistrictOptions';
import DefaultInput from '../../Input';
import { LocationSelectProps, OptionType, countyOptions } from './data';

const LocationSelect = ({
  id,
  errors,
  control,
  register,
  setValue,
  countyName,
  districtName,
}: LocationSelectProps) => {
  const isClient = useClient();
  const [selectedCounty, setSelectedCounty] = useState('新北市');
  const districtOptions = useDistrictOptions(selectedCounty);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const zipOptions = useZipOptions(selectedDistrict);

  const handleCountyChange = (selectedOption: string) => {
    if (selectedOption) {
      const newValue = selectedOption;
      setSelectedCounty(newValue);
      setSelectedDistrict('');
    }
  };

  // 處理鄉鎮市區變更
  const handleDistrictChange = (selectedOption: string) => {
    if (selectedOption) {
      const newValue = selectedOption;
      setSelectedDistrict(newValue);
    }
  };

  useEffect(() => {
    if (districtOptions.length > 0 && !selectedDistrict) {
      const firstDistrictValue = districtOptions[0]?.value;
      setSelectedDistrict(firstDistrictValue);
      setValue('district', firstDistrictValue as any); // 自動設定第一個鄉鎮市區為選中值
    }
  }, [districtOptions, districtName, setValue]);

  useEffect(() => {
    if (zipOptions.length > 0) {
      const zipCodeValue = zipOptions[0].value;
      setValue('zipCode', zipCodeValue); // 更新郵遞區號到表單狀態
    }
  }, [zipOptions, setValue]);

  const customStyles: StylesConfig<string | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: '59px',
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
  };

  return (
    <>
      {isClient && (
        <>
          <div className="flex gap-24">
            <div className="w-1/2">
              <label htmlFor="county" className="text-18 block mb-8">
                縣市
              </label>
              <Controller
                name="city"
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
                    value={countyOptions.find(
                      (option) => option.value === selectedCounty
                    )} // 確保value與selectedCounty同步
                    onChange={(
                      option: SingleValue<string | OptionType>,
                      actionMeta: ActionMeta<string | OptionType>
                    ) => {
                      if (option && typeof option !== 'string') {
                        handleCountyChange(option ? option.value : '');
                        field.onChange(option.value as string);
                      }
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
                    menuPortalTarget={
                      typeof document === 'undefined' ? null : document.body
                    }
                    value={districtOptions.find(
                      (option) =>
                        option.value === (field.value ? field.value : '')
                    )}
                    onChange={(
                      option: SingleValue<string | OptionType>,
                      actionMeta: ActionMeta<string | OptionType>
                    ) => {
                      if (option && typeof option !== 'string') {
                        handleDistrictChange(option ? option.value : '');
                        field.onChange(option ? option.value : '');
                      }
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
                id="zipCode"
                value={zipOptions.length > 0 ? zipOptions[0].value : ''}
                {...(register && register('zipCode'))}
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
      )}
    </>
  );
};

export default LocationSelect;
