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

// export const productData: OptionType[] = [
//   { value: '甜蜜時光有機草莓', label: '甜蜜時光有機草莓' },
//   { value: '夏浪西瓜舞', label: '夏浪西瓜舞' },
//   { value: '極致芒果夏韻', label: '極致芒果夏韻' },
// ];

const data = {
  liveProduct_0: '24',
  liveProductSpec_0: 'true',
  liveSpectialPrice_0: '112',
  liveProduct_1: '44',
  liveProductSpec_1: 'true',
  liveSpectialPrice_1: '234',
};


const needata = [
  {
    productId: 24,
    productSize: false,
    liveprice: 112,
  },
  {
    productId: 44,
    productSize: false,
    liveprice: 234,
  },
];
