import { Control } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type GenderSelectProps = {
  control: Control<FormValues>;
  labelText: string;
  id: keyof FormValues;
  defaultValue: OptionType;
};
export type OptionType = {
  value: string;
  label: string;
};

export const optionsData: OptionType[] = [
  { value: "0", label: '男' },
  { value: "1", label: '女' },
];
