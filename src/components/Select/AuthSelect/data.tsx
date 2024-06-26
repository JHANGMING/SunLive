import { Control } from 'react-hook-form';
import { FormValues } from '@/components/Input/data';

export type AuthSelectProps = {
  control: Control<FormValues>;
};
export type OptionType = {
  value: string;
  label: string;
};

export const optionsData: OptionType[] = [
  { value: '1', label: '小農 (我想要販售農產品)' },
  { value: '0', label: '一般會員 (我想要查看或購買農產品)' },
];
