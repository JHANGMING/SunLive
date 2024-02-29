import { Control } from 'react-hook-form';
import { FormValues } from '@/common/components/Input/data';

export type LiveProductSelectProps = {
  control: Control<FormValues>;
  labelText?: string;
  id?: keyof FormValues;
};
export type OptionType = {
  value: string;
  label: string;
};
