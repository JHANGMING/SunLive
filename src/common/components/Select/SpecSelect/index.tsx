import React, { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { OptionType, SpecSelectProps } from './data';
import useClient from '@/common/hooks/useClient';

const SpecSelect = ({
  optionsData,
  onSpecChange,
  initialSelectIndex = 0,
  isLive=false
}: SpecSelectProps) => {
  const isClient = useClient();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  useEffect(() => {
    if (optionsData.length > 0 && optionsData[initialSelectIndex]) {
      setSelectedOption(optionsData[initialSelectIndex]);
    }
  }, [optionsData, initialSelectIndex]);
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
    setSelectedOption(option);
    if (option !== null) {
      onSpecChange(option.value);
    }
  };

  return (
    <div className="w-[170px]">
      {isClient && (
        <Select
          instanceId="spec"
          isDisabled={isLive}
          value={selectedOption}
          options={optionsData}
          styles={customStyles}
          onChange={(option) => handleChange(option as OptionType)}
        />
      )}
    </div>
  );
};

export default SpecSelect;
