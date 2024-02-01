import { Control, FieldErrors, RegisterOptions } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type ManagementSelectProps = {
  control?: Control<FormValues>;
  labelText: string;
  placeholder?: string;
  id: keyof FormValues;
  data: OptionType[];
  defaultValue?: boolean;
  errors?: FieldErrors<FormValues>;
  rules?: RegisterOptions;
};
export type OptionType = {
  value: string;
  label: string;
};

