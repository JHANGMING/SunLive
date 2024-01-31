import { Control } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type ManagementSelectProps = {
  control?: Control<FormValues>;
  labelText: string;
  placeholder: string;
  id: keyof FormValues;
  data: OptionType[];
  defaultValue?:boolean;
};
export type OptionType = {
  value: string;
  label: string;
};

