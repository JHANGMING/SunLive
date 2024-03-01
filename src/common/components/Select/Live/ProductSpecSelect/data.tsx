import { Control } from 'react-hook-form';
import { FormValues } from '@/common/components/Input/data';

export type ProductSpecSelectProps = {
  labelText?: string;
  id?: keyof FormValues;
  control: Control<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};

export const productSpecData: OptionType[] = [
  { value: 'true', label: '大份' },
  { value: 'false', label: '小份' },
];
