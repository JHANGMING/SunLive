import { Control } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type LiveTimeSelectProps = {
  control: Control<FormValues>;
  labelText?: string;
  id?: keyof FormValues;
};
export type OptionType = {
  value: string;
  label: string;
};

const generateTimeOptions = () => {
  const options = [];
  for (let hour = 8; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      options.push({ value: time, label: time });
    }
  }
  options.push({ value: '24:00', label: '24:00' });

  return options;
};

export const optionsData:OptionType[]  = generateTimeOptions();

