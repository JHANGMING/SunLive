import { Control, FieldErrors, RegisterOptions } from 'react-hook-form';
import { FormValues } from '../Input/data';

export type DatePickerShowProps = {
  page?: string;
  defaultValue?: Date;
  rules?: RegisterOptions;
  control: Control<FormValues>;
  errors?: FieldErrors<FormValues>;
};
