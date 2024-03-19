import { FormValues } from '@/common/components/Input/data';
import { ResultDataType } from '@/common/helpers/getCookie';

export const ROUTES = {
  DASHBOARD_ACCOUNT: '/dashboard/account',
  HOME: '/',
};

export type LoginPrpos = {
  errorMessage: string;
  loginData: ResultDataType;
};

export type QueryParamsType = {
  guid: string;
  time: string;
  account: string;
};

export type ChangePasswordProps = {
  queryParams: QueryParamsType;
};

export type OnSubmitType = {
  (data: FormValues): void;
};
type UserVerificationType = 'required' | 'preferred' | 'discouraged';

export type CredentialsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resultOption?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  credential?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newOptions?: any;
  isRegister?: boolean;
  challenge?: ArrayBuffer;
  rpId?: string;
  userVerification?: UserVerificationType;
};
