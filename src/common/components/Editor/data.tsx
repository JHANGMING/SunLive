import { Control } from 'react-hook-form';
import { FormValues } from '../Input/data';

export type EditorProps = {
  control: Control<FormValues>;
};

export const Colors = [
  '#333333',
  '#666666',
  '#999999',
  '#CCCCCC',
  '#FEE26B',
  '#DE3C2B',
  '#47835A',
];

export const FontSizes = [
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
];
