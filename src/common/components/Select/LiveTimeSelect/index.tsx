import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { Controller } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import useClient from '@/common/hooks/useClient';
import { LiveTimeSelectProps, OptionType, optionsData } from './data';

const LiveTimeSelect = ({
  errors,
  control,
  endTimeRules,
  startTimeRules,
}: LiveTimeSelectProps) => {
  const isClient = useClient();
  const [endTime, setEndTime] = useState<OptionType | null>(null);
  const [startTime, setStartTime] = useState<OptionType | null>(null);
  const [endTimeOptions, setEndTimeOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    if (startTime) {
      const startTimeIndex = optionsData.findIndex(
        (option) => option.value === startTime.value
      );
      const filteredOptions = optionsData.slice(startTimeIndex + 1);
      setEndTimeOptions(filteredOptions);
      setEndTime(null);
    } else {
      setEndTimeOptions(optionsData);
    }
  }, [startTime]);
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
    <div className="flex gap-24">
      {isClient && (
        <>
          <div className="w-full">
            <label htmlFor="startTime" className="text-16 block mb-8">
              直播開始時間
            </label>
            <Controller
              name="startTime"
              control={control}
              rules={startTimeRules}
              render={({ field }) => (
                <Select
                  {...field}
                  instanceId="startTime"
                  options={optionsData}
                  styles={customStyles}
                  placeholder="選擇直播開始時間"
                  value={optionsData.find(
                    (option) => option.value === field.value
                  )}
                  onChange={(val) => {
                    let value = null;
                    if (val) {
                      value = (val as OptionType).value;
                    }
                    setStartTime(val as OptionType);
                    field.onChange(value);
                  }}
                />
              )}
            />
            {errors?.startTime && (
              <p className="text-primary-red mt-2">
                {errors.startTime.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="endTime" className="text-16 block mb-8">
              直播結束時間
            </label>
            <Controller
              name="endTime"
              control={control}
              rules={endTimeRules}
              render={({ field }) => (
                <Select
                  {...field}
                  instanceId="endTime"
                  options={endTimeOptions}
                  styles={customStyles}
                  placeholder="選擇直播結束時間"
                  value={endTime}
                  onChange={(val) => {
                    let value = null;
                    if (val) {
                      value = (val as OptionType).value;
                    }
                    setEndTime(val as OptionType);
                    field.onChange(value);
                  }}
                />
              )}
            />
            {errors?.endTime && (
              <p className="text-primary-red mt-2">{errors.endTime.message}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LiveTimeSelect;
