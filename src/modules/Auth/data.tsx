import { ResultDataType } from "@/common/helpers/getCookie";

export const ROUTES = {
  DASHBOARD_ACCOUNT: '/dashboard/account',
  HOME: '/',
};

export type LoginPrpos = {
  errorMessage:string;
  loginData:ResultDataType 
};
