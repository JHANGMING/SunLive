export const apiPaths = {
  // auth
  login: '/api/login/general',
  register: '/api/register',
  logout: '/api/logout',
  googleIdentity: '/api/login/google',
  googleVerify: '/api/login/authcode',
  creatWebAuthn: '/api/login/attestation/result',
  getWebAuthn: '/api/login/assertion/result',
  // passwordless: '/api/login/passwordless',
  passwordless: 'api/login/attestation',
  passwordlessVerify: '/api/login/passwordless/checkout',
  resetpassword: '/api/login/forget',
  resetpasswordVerify: '/api/login/forget/reset',

  // personinfo
  account: '/api/user/info',

  // products
  search: '/api/product/search',
  allproducts: '/api/product/all',
  otherCategory: '/api/product',

  // detail
  detail: '/api/product',

  // live
  live: '/api/live',

  // cart
  cart: '/api/cart',
  putspec: '/api/cart/specId',

  // order
  order: '/api/order',
  orderlist: '/api/user/orderlist',

  // dashboard-farminfo
  farminfo: '/api/farmer/info',

  // dashboard-product
  productlist: '/api/farmer/productlist',
  productSet: '/api/farmer/product',

  // dashboard-live
  productlist_live: '/api/farmer/live/productlist',
  liveSet: '/api/livesetting',
  livelist: '/api/farmer/livelist',
  identity: '/api/livesetting/google',
  youTubeVerify: '/api/livesetting/authcode',

  // dashboard-order
  getorderlist: '/api/farmer/orderlist',
  putorder: '/api/farmer/order',

  // uploadImg,
  uploadProductImg: '/api/farmer/product/pic',
  uploadfarmerImg: '/api/farmer/pic',
  uploaduserImg: '/api/user/pic',
  uploadliveImg: '/api/livesetting/pic',

  // chat
  check: '/api/chats/live/check',
  getmessage: '/api/chats/roomlist',
  joinroom: '/api/chats/joinroom/',

  notify: '/api/chats/roomlist/notify',
};

export const nextRoutes = {
  // auth
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  setToken: '/auth/setToken',
  googleIdentity: '/auth/googleIdentity',
  googleVerify: '/auth/googleverify',
  passwordless: '/auth/passwordless',
  creatWebAuthn: '/auth/creatWebAuthn',
  getWebAuthn: '/auth/getWebAuthn',
  resetpassword: '/auth/resetpassword',
  resetpasswordVerify: '/auth/resetpasswordverify',

  // personinfo
  account_set: '/personinfo/account_set',
  account_get: '/personinfo/account_get',

  // products
  search: '/product/search',
  allproducts: '/product/all',

  // live
  live: '/live/get',
  liveing: '/live/liveing',

  // cart
  getcart: '/cart/getcart',
  addcart: '/cart/addcart',
  deletecart: '/cart/deletecart',
  putqty: '/cart/putqty',
  putspec: '/cart/putspec',

  // order
  order: '/order/add',
  orderlist: '/order/list',

  // dashboard-farminfo
  farminfo_set: '/dashboard/farminfo/set',
  farminfo_get: '/dashboard/farminfo/get',

  // dashboard-product
  addproduct: '/dashboard/product/addproduct',
  editproduct: '/dashboard/product/editproduct',

  // dashboard-live
  productlist_live: '/dashboard/live/productlist',
  addlive: '/dashboard/live/addlive',
  editlive: '/dashboard/live/editlive',
  editliveproduct: '/dashboard/live/editliveproduct',
  livelist: '/dashboard/live/livelist',
  identity: '/dashboard/live/identity',
  youTubeVerify: '/dashboard/live/verify',

  // dashboard-order
  getorderlist: '/dashboard/order/getorderlist',
  putorder: '/dashboard/order/putorder',

  // uploadImg,
  uploadProductImg: '/upload/productImg',
  uploadfarmerImg: '/upload/farmerImg',
  uploaduserImg: '/upload/userImg',
  uploadliveImg: '/upload/liveImg',

  // chat
  check: '/chat/check',
  getmessage: '/chat/getmessage',
  joinroom: '/chat/joinroom',

  notify: '/chat/notify',
};
