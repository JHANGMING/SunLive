import { FormValues } from '@/common/components/Input/data';
import { Control } from 'react-hook-form';

// type FormValues = {
//   [key: string]: any;
// };

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
  { value: '甜蜜時光有機草莓', label: '甜蜜時光有機草莓' },
  { value: '夏浪西瓜舞', label: '夏浪西瓜舞' },
  { value: '極致芒果夏韻', label: '極致芒果夏韻' },
];
