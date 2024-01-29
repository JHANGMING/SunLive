import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { GenderSelectProps, OptionType, optionsData } from './data';

const GenderSelect = ({ control, labelText, id }: GenderSelectProps) => {
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
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightgray !important' : undefined,
      color: '#333333',
      boxShadow: 'none',
    }),
  };
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-18 block mb-8">
        {labelText}
      </label>
      <Controller
        name={id}
        control={control}
        defaultValue={{
          value: '男',
          label: '男',
        }}
        render={({ field }) => (
          <Select
            {...field}
            instanceId={id}
            options={optionsData}
            styles={customStyles}
            onChange={(val) => field.onChange(val)}
          />
        )}
      />
    </div>
  );
};

export default GenderSelect;
