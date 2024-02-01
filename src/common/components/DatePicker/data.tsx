import { Control, FieldErrors, RegisterOptions } from 'react-hook-form';
import { FormValues } from '../Input/data';

export type DatePickerShowProps = {
  control: Control<FormValues>;
  page?: string;
  errors?: FieldErrors<FormValues>;
  rules?: RegisterOptions;
};
