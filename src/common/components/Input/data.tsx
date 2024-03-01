import { ReactNode } from 'react';
import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';

export type FormValues = {
  idea: string;
  spec: string;
  email: string;
  yturl: string;
  phone: string;
  origin: string;
  period: string;
  vision: string;
  storage: string;
  address: string;
  endTime: string;
  zipCode: string;
  password: string;
  userName: string;
  receiver: string;
  nickName: string;
  datePicker: Date;
  category: string;
  liveName: string;
  imageURL: string;
  introduce: string;
  userPhone: string;
  startTime: string;
  smallStock: string;
  largeStock: string;
  smallWeight: string;
  largeWeight: string;
  description: string;
  liveProduct: string;
  productTitle: string;
  productState: string;
  introduction: string;
  ProductToChat: string;
  liveProductSpec: string;
  confirmPassword: string;
  liveSpectialPrice: string;
  largeOriginalPrice: string;
  smallOriginalPrice: string;
  largePromotionPrice: string;
  smallPromotionPrice: string;
  city: { label: string; value: string };
  gender: { value: string; label: string };
  identity?: { value: string; label: string };
  district: { label: string; value: string } | null;
};
export type DefaultInputProps = {
  page?: string;
  icon?: ReactNode;
  labelText: string;
  inputText: string;
  globalStyle?: string;
  isdisabled?: boolean;
  id: keyof FormValues;
  rules: RegisterOptions;
  errors?: FieldErrors<FormValues>;
  register?: UseFormRegister<FormValues>;
  type: 'email' | 'text' | 'password' | 'tel' | 'number';
};

export type PersonInputProps = {
  value?: string;
  labelText: string;
  inputText: string;
  inputStyle: string;
  labelStyle?: string;
  id: keyof FormValues;
  isdisabled?: boolean;
  rules?: RegisterOptions;
  errors?: FieldErrors<FormValues>;
  register?: UseFormRegister<FormValues>;
  type: 'email' | 'text' | 'password' | 'tel' | 'number';
};

export type SearchInputProps = {
  onClick?: () => void;
  headerVisible?: boolean;
};

export type OrdersSearchProps = {
  placeholder: string;
};
