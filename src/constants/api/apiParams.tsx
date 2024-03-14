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

export { liveParams, otherCategoryParams, cartParams };