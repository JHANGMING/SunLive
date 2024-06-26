import { Control, FieldErrors, RegisterOptions } from 'react-hook-form';
import { FormValues } from '@/components/Input/data';

export type LiveTimeSelectProps = {
  labelText?: string;
  id?: keyof FormValues;
  control: Control<FormValues>;
  endTimeRules: RegisterOptions;
  startTimeRules: RegisterOptions;
  errors?: FieldErrors<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};

const generateTimeOptions = () => {
  const options = [];
  for (let hour = 8; hour < 23; hour += 1) {
    for (let minute = 0; minute < 60; minute += 60) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      options.push({ value: time, label: time });
    }
  }
  return options;
};

export const optionsData: OptionType[] = generateTimeOptions();
