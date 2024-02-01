import { Control } from 'react-hook-form';
import { FormValues } from '../../../Input/data';

export type LiveProductSelectProps = {
  control: Control<FormValues>;
  labelText?: string;
  id?: keyof FormValues;
};
export type OptionType = {
  value: string;
  label: string;
};

export const productData: OptionType[] = [
  { value: '有機草莓', label: '有機草莓' },
  { value: '夏浪西瓜舞', label: '夏浪西瓜舞' },
  { value: '極致芒果夏韻', label: '極致芒果夏韻' },
];
