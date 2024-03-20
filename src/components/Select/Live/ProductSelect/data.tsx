import { Control } from 'react-hook-form';
import { FormValues } from '@/components/Input/data';

export type LiveProductSelectProps = {
  labelText?: string;
  id?: keyof FormValues;
  control: Control<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};
