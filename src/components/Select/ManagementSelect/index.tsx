import React from 'react';
import Select, { StylesConfig } from 'react-select';
import { Controller } from 'react-hook-form';
import { ManagementSelectProps, OptionType } from './data';

const ManagementSelect = ({
  id,
  data,
  rules,
  errors,
  control,
  labelText,
  placeholder,
}: ManagementSelectProps) => {
  const customStyles: StylesConfig<string | Date | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: '54px',
      fontSize: '14px',
      paddingLeft: '8px',
      borderRadius: '8px',
      outline: 'none !important',
      boxShadow: `${state.isFocused ? '0 0 0 1px #47835A' : 'none'} !important`,
      border: `${state.isFocused ? '1px solid #47835A' : '1px solid #CCCCCC'} !important`,
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: '14px',
      boxShadow: 'none',
      color: '#333333',
      backgroundColor: state.isFocused ? 'lightgray !important' : undefined,
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
        rules={rules}
        render={({ field }) => (
          <Select
            {...field}
            instanceId={id}
            options={data}
            styles={customStyles}
            value={data.find((option) => option.value === field.value)}
            onChange={(option) => {
              if (typeof option === 'string' || option instanceof Date) {
                field.onChange(option);
              } else if (option && 'value' in option) {
                field.onChange(option.value);
              }
            }}
            placeholder={placeholder}
          />
        )}
      />
      {errors && errors[id] && (
        <p className="text-primary-red mt-2">{errors[id]?.message}</p>
      )}
    </div>
  );
};

export default ManagementSelect;
