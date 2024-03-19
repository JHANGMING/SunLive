import { ApiParamsType } from '@/common/helpers/fetchApi';
import { apiPaths } from './apiPaths';

// 取得近期直播商品
const liveParams: ApiParamsType = {
  apiPath: apiPaths.live,
  method: 'GET',
};

// 取得熱門商品
const otherCategoryParams: ApiParamsType = {
  apiPath: apiPaths.otherCategory,
  method: 'GET',
};

// 取得購物車
const cartParams: ApiParamsType = {
  apiPath: apiPaths.cart,
  method: 'GET',
};

// 取得所有商品
const allproductsParams: ApiParamsType = {
  apiPath: apiPaths.allproducts,
  method: 'GET',
};

// 取得小農產品
const farmerProductParams: ApiParamsType = {
  apiPath: apiPaths.productlist,
  method: 'GET',
};

// 取得小農所有直播
const farmerLiveParams: ApiParamsType = {
  apiPath: apiPaths.livelist,
  method: 'GET',
};

export {
  liveParams,
  cartParams,
  allproductsParams,
  otherCategoryParams,
  farmerLiveParams,
  farmerProductParams,
};
