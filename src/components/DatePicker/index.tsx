import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerShowProps } from './data';

const DatePickerShow = ({
  id,
  page,
  rules,
  errors,
  control,
  defaultValue,
}: DatePickerShowProps) => {
  const inputStyle = page === 'live' ? 'h-[53px]' : 'h-[54px]';
  const isLivePage = page === 'live';
  return (
    <>
      <Controller
        name="datePicker"
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, ...field } }) => (
          <DatePicker
            {...field}
            id={id}
            className={`${inputStyle} w-full border border-lightGray rounded-8 pl-16 focus-visible:outline-primary-green`}
            placeholderText="請選擇日期"
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
      {errors && errors.datePicker && (
        <p className="text-primary-red mt-2">{errors.datePicker.message}</p>
      )}
    </>
  );
};

export default DatePickerShow;
