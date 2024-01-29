import { Control } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type AuthSelectProps = {
  control: Control<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};

export const optionsData = [
  { value: '一般會員', label: '一般會員 (我想要查看或購買農產品)' },
  { value: '小農', label: '小農 (我想要販售農產品)' },
];
