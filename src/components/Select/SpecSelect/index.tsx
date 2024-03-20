import React, { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import useClient from '@/common/hooks/useClient';
import { OptionType, SpecSelectProps } from './data';

const SpecSelect = ({
  optionsData,
  onSpecChange,
  isLive = false,
  initialSelectIndex = 0,
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
      width: '100%',
      height: '30px',
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
