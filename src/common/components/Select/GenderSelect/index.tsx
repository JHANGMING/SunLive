import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { Controller } from 'react-hook-form';
import useClient from '@/common/hooks/useClient';
import { GenderSelectProps, OptionType, optionsData } from './data';

const GenderSelect = ({
  id,
  control,
  labelText,
  defaultValue,
}: GenderSelectProps) => {
  const isClient = useClient();
  const customStyles: StylesConfig<string | Date | OptionType, false> = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: '54px',
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
    <div className="w-full">
      {isClient && (
        <>
          <label htmlFor={id} className="text-18 block mb-8">
            {labelText}
          </label>
          <Controller
            name={id}
            control={control}
            defaultValue={defaultValue}
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
        </>
      )}
    </div>
  );
};

export default GenderSelect;
