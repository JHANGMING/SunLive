import { ReactNode } from 'react';

type ButtonType = 'button' | 'submit';
export type ButtonPropsType = {
  category?: string;
  path?: string;
  onClick?: () => void;
  children?: ReactNode;
  classStyle?: string;
  type?: ButtonType;
  btnStyle?: string;
  textStyle?: string;
  showIcon?: boolean;
  disabled?: boolean;
};
