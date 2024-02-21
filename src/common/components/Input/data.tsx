import { ReactNode } from 'react';
import {
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
} from 'react-hook-form';

export type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  receiver: string;
  userPhone: string;
  phone: string;
  address: string;
  identity?: { value: string; label: string };
  gender: { value: string; label: string };
  nickName: string;
  // gender: string;
  vision: string;
  zipCode: string;
  datePicker: Date;
  idea: string;
  introduce: string;
  liveName: string;
  yturl: string;
  startTime: string;
  endTime: string;
  productTitle: string;
  imageURL: string;
  productState: string;
  spec: string;
  smallWeight: string;
  smallOriginalPrice: string;
  smallPromotionPrice: string;
  smallStock: string;
  largeWeight: string;
  largeOriginalPrice: string;
  largePromotionPrice: string;
  largeStock: string;
  liveProduct: string;
  origin: string;
  storage: string;
  period: string;
  category: string;
  description: string;
  liveProductSpec: string;
  liveSpectialPrice: string;
  introduction: string;
  ProductToChat: string;
  city: { label: string; value: string };
  district: { label: string; value: string } | null;
};
export type DefaultInputProps = {
  type: 'email' | 'text' | 'password' | 'tel' | "number";
  labelText: string;
  inputText: string;
  icon?: ReactNode;
  id: keyof FormValues;
  register?: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
  rules: RegisterOptions;
  page?: string;
  globalStyle?: string;
  isdisabled?: boolean;
};

export type PersonInputProps = {
  type: 'email' | 'text' | 'password' | 'tel' | 'number';
  labelText: string;
  inputText: string;
  labelStyle?: string;
  inputStyle: string;
  id: keyof FormValues;
  register?: UseFormRegister<FormValues>;
  errors?: FieldErrors<FormValues>;
  rules?: RegisterOptions;
  isdisabled?: boolean;
  value?: string;
};

export type SearchInputProps = {
  headerVisible?: boolean;
  onClick?: () => void;
};

export type OrdersSearchProps = {
  placeholder:string
};