import React, { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { OptionType, SpecSelectProps } from './data';

const SpecSelect = ({ optionsData }: SpecSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
   useEffect(() => {
     if (optionsData.length > 0) {
       setSelectedOption(optionsData[0]); 
     }
   }, [optionsData]); 
  const customStyles: StylesConfig<string | Date | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      height: '30px',
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

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option); // 更新选中的选项
    if (option) {
      // 执行额外的操作，例如调用API
      console.log(`Selected value: ${option.value}`);
      // fetchApi(option.value); // 假设这是调用API的函数
    }
  };

  return (
    <div className="w-[170px]">
      <Select
        instanceId="spec"
        value={selectedOption}
        options={optionsData}
        styles={customStyles}
        onChange={(option) => handleChange(option as OptionType)}
      />
    </div>
  );
};

export default SpecSelect;
