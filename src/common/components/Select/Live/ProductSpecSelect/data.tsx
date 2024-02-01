import { Control } from 'react-hook-form';
import { FormValues } from '@/common/components/Input/data';

export type ProductSpecSelectProps = {
  control: Control<FormValues>;
  labelText?: string;
  id?: keyof FormValues;
};
export type OptionType = {
  value: string;
  label: string;
};

export const productSpecData: OptionType[] = [
  { value: '大份', label: '大份' },
  { value: '小份', label: '小份' },
];
