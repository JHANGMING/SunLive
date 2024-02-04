import { Control } from 'react-hook-form';
import { FormValues } from '../../Input/data';

export type SpecSelectProps = {
  optionsData: OptionType[];
};
export type OptionType = {
  value: string;
  label: string;
};

type ProductDataType = {
  smallWeight: number;
  largeWeight: number;
};

export function generateSpecData(specData: ProductDataType): OptionType[] {
  return [
    { value: '0', label: `小份 ${specData.smallWeight}g` },
    { value: '1', label: `大份 ${specData.largeWeight}g` },
  ];
}
