import { Control } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type GenderSelectProps = {
  control: Control<FormValues>;
  labelText: string;
  id: keyof FormValues;
};
export type OptionType = {
  value: string;
  label: string;
};

export const optionsData: OptionType[] = [
  { value: '男', label: '男' },
  { value: '女', label: '女' },
];
