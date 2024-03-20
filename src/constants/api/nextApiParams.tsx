import { NextapiParamsType } from '@/common/helpers/fetchNextApi';
import { nextRoutes } from './apiPaths';

// 加入購物車
const addcartParams: NextapiParamsType = {
  apiPath: nextRoutes.addcart,
  method: 'POST',
};

// 刪除購物車
const deletecartParams: NextapiParamsType = {
  apiPath: nextRoutes.deletecart,
  method: 'POST',
};

// 修改購物車數量
const putqtyParams: NextapiParamsType = {
  apiPath: nextRoutes.putqty,
  method: 'POST',
};

// 修改購物車規格
const putspecParams: NextapiParamsType = {
  apiPath: nextRoutes.putspec,
  method: 'POST',
};

// 訂單
const orderParams: NextapiParamsType = {
  apiPath: nextRoutes.order,
  method: 'POST',
};

// 搜尋
const searchParams: NextapiParamsType = {
  apiPath: nextRoutes.search,
  method: 'POST',
};

// 取得直播商品列表
const productLiveParams: NextapiParamsType = {
  apiPath: nextRoutes.productlist_live,
  method: 'GET',
};

// 設定token
const setTokenParams: NextapiParamsType = {
  apiPath: nextRoutes.setToken,
  method: 'POST',
};

// 註冊
const registerParams: NextapiParamsType = {
  apiPath: nextRoutes.register,
  method: 'POST',
};

// 一般登入
const loginParams: NextapiParamsType = {
  apiPath: nextRoutes.login,
  method: 'POST',
};

// google登入
const googleIdentityParams: NextapiParamsType = {
  apiPath: nextRoutes.googleIdentity,
  method: 'GET',
};

// 無密碼登入
const passwordlessParams: NextapiParamsType = {
  apiPath: nextRoutes.passwordless,
  method: 'POST',
};

// 重設密碼
const resetpasswordParams: NextapiParamsType = {
  apiPath: nextRoutes.resetpassword,
  method: 'POST',
};

// 重設密碼認證
const resetpasswordVerifyParams: NextapiParamsType = {
  apiPath: nextRoutes.resetpasswordVerify,
  method: 'POST',
};

// google驗證
const googleVerifyParams: NextapiParamsType = {
  apiPath: nextRoutes.googleVerify,
  method: 'POST',
};

// YouTube驗證
const youTubeVerifyParams: NextapiParamsType = {
  apiPath: nextRoutes.youTubeVerify,
  method: 'POST',
};

// 登出
const logoutParams: NextapiParamsType = {
  apiPath: nextRoutes.logout,
  method: 'POST',
};

// 加入聊天室房間
const joinroomParams: NextapiParamsType = {
  apiPath: nextRoutes.joinroom,
  method: 'POST',
};

// 設定userinfo
const accountSetParams: NextapiParamsType = {
  apiPath: nextRoutes.account_set,
  method: 'POST',
};

// 設定farmerinfo
const farmerinfoSetParams: NextapiParamsType = {
  apiPath: nextRoutes.farminfo_set,
  method: 'POST',
};

// 新增商品
const addproductParams: NextapiParamsType = {
  apiPath: nextRoutes.addproduct,
  method: 'POST',
};

// 編輯直播商品
const editliveproductParams: NextapiParamsType = {
  apiPath: nextRoutes.editliveproduct,
  method: 'POST',
};

// 取得直播認證
const liveIdentityParams: NextapiParamsType = {
  apiPath: nextRoutes.identity,
  method: 'GET',
};

// 新增直播
const addliveParams: NextapiParamsType = {
  apiPath: nextRoutes.addlive,
  method: 'POST',
};

// 直播認證登入
const liveCheckParams: NextapiParamsType = {
  apiPath: nextRoutes.check,
  method: 'GET',
};

export {
  addcartParams,
  deletecartParams,
  putqtyParams,
  putspecParams,
  addproductParams,
  orderParams,
  logoutParams,
  searchParams,
  joinroomParams,
  addliveParams,
  productLiveParams,
  setTokenParams,
  loginParams,
  registerParams,
  liveIdentityParams,
  liveCheckParams,
  youTubeVerifyParams,
  googleVerifyParams,
  accountSetParams,
  farmerinfoSetParams,
  passwordlessParams,
  resetpasswordParams,
  editliveproductParams,
  resetpasswordVerifyParams,
  googleIdentityParams,
};
