import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerShowProps } from './data';

const DatePickerShow = ({ control,page }: DatePickerShowProps) => {
  const inputStyle = page === 'live' ? 'h-[53px]' : 'h-[54px]';
  const isLivePage = page === 'live';
  return (
    <Controller
      name="birthday"
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <DatePicker
          {...field}
          className={`${inputStyle} w-full border border-lightGray rounded-8 pl-16 focus-visible:outline-primary-green`}
          placeholderText='請選擇日期'
          dateFormat="yyyy/MM/dd"
          selected={value}
          onChange={onChange}
          maxDate={isLivePage ? null : new Date()}
          minDate={isLivePage ? new Date() : null}
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={50}
          showMonthDropdown
        />
      )}
    />
  );
};

export default DatePickerShow;
