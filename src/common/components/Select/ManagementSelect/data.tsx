import { Control, FieldErrors, RegisterOptions } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type ManagementSelectProps = {
  labelText: string;
  data: OptionType[];
  placeholder?: string;
  id: keyof FormValues;
  rules?: RegisterOptions;
  control?: Control<FormValues>;
  errors?: FieldErrors<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};
