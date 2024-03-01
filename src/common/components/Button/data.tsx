import { ReactNode } from 'react';

type ButtonType = 'button' | 'submit';

export type ButtonPropsType = {
  path?: string;
  toCart?: boolean;
  category?: string;
  type?: ButtonType;
  btnStyle?: string;
  productId?: number;
  classStyle?: string;
  textStyle?: string;
  showIcon?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  cartItemQty?: number;
  onClick?: () => void;
  productSpecId?: number;
};

export type DeleteBtnPropsType = {
  size: number;
  className: string;
  productSpecId?: number;
};
