export const apiPaths = {
  //auth
  login: '/api/login/general',
  register: '/api/register',
  logout: '/api/logout',
  passwordless: '/api/login/passwordless',
  passwordlessVerify: '/api/login/passwordless/checkout',
  resetpassword: '/api/login/forget',
  resetpasswordVerify: '/api/login/forget/reset',

  //personinfo
  account: '/api/user/info',

  //products
  search: '/api/product/search',
  allproducts: '/api/product/all',
  otherCategory: '/api/product',

  //detail
  detail: '/api/product',

  //live
  live: '/api/live',

  //cart
  cart: '/api/cart',
  putspec: '/api/cart/specId',

  //order
  order: '/api/order',

  //dashboard-farminfo
  farminfo: '/api/farmer/info',

  //dashboard-product
  addproduct: '/api/farmer/product',
  editproduct: '/api/farmer/product',
  //dashboard-live
  productlist: '/api/farmer/live/productlist',
  addlive: '/api/livesetting',

  //uploadImg,
  uploadProductImg: '/api/farmer/product/pic',
  uploadfarmerImg: '/api/farmer/pic',
};

export const nextRoutes = {
  //auth
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  passwordless: '/auth/passwordless',
  resetpassword: '/auth/resetpassword',
  resetpasswordVerify: '/auth/resetpasswordverify',

  //personinfo
  account_set: '/personinfo/account_set',
  account_get: '/personinfo/account_get',

  //products
  search: '/product/search',
  allproducts: '/product/all',

  //cart
  getcart: '/cart/getcart',
  addcart: '/cart/addcart',
  deletecart: '/cart/deletecart',
  putqty: '/cart/putqty',
  putspec: '/cart/putspec',

  //order
  order: '/order/add',

  //dashboard-farminfo
  farminfo_set: '/dashboard/farminfo/set',
  farminfo_get: '/dashboard/farminfo/get',

  //dashboard-product
  addproduct: '/dashboard/addproduct',
  //dashboard-live
  productlist: '/dashboard/live/productlist',
  addlive: '/dashboard/live/addlive',

  //uploadImg,
  uploadProductImg: '/dashboard/uploadProductImg',
  uploadfarmerImg: '/dashboard/uploadfarmerImg',
};

