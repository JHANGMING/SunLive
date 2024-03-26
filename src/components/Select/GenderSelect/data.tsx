import { Control } from 'react-hook-form';
import { FormValues } from '@/components/Input/data';

export type GenderSelectProps = {
  labelText: string;
  id: keyof FormValues;
  defaultValue?: OptionType;
  control: Control<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};

export const optionsData: OptionType[] = [
  { value: '0', label: '男' },
  { value: '1', label: '女' },
];

export type OptionPropsType =
  | string
  | boolean
  | Date
  | { label: string; value: string }
  | { value: string; label: string };
