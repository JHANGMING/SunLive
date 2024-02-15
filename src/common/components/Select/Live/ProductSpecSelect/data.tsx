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
  { value: 'false', label: '小份' },
  { value: 'true', label: '大份' },
];
