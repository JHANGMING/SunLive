import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { ManagementSelectProps, OptionType } from './data';
const ManagementSelect = ({
  control,
  labelText,
  id,
  data,
  placeholder,
  defaultValue=false,
}: ManagementSelectProps) => {
  const customStyles: StylesConfig<string | Date | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      height: '54px',
      width: '100%',
      borderRadius: '8px',
      border: `${state.isFocused ? '1px solid #47835A' : '1px solid #CCCCCC'} !important`,
      boxShadow: `${state.isFocused ? '0 0 0 1px #47835A' : 'none'} !important`,
      outline: 'none !important',
      paddingLeft: '8px',
      fontSize: '14px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightgray !important' : undefined,
      color: '#333333',
      boxShadow: 'none',
      fontSize: '14px',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999999',
    }),
  };
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-8">
        {labelText}
      </label>
      <Controller
        name={id}
        control={control}
        defaultValue={defaultValue ? data[0]:""}
        render={({ field }) => (
          <Select
            {...field}
            instanceId={id}
            options={data}
            styles={customStyles}
            onChange={(val) => field.onChange(val)}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};


 
export default ManagementSelect;