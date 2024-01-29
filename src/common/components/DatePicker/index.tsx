import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerShowProps } from './data';

const DatePickerShow = ({ control }: DatePickerShowProps) => {
  return (
    <Controller
      name="birthday"
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <DatePicker
          {...field}
          className="h-[54px] w-full border border-lightGray rounded-8 pl-16 focus-visible:outline-primary-green"
          dateFormat="yyyy/MM/dd"
          selected={value}
          onChange={onChange}
          maxDate={new Date()}
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
