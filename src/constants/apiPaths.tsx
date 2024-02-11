export const apiPaths = {
  //auth
  login: '/api/login/general',
  register: '/api/register',
  logout: '/api/logout',
  passwordless: '/api/login/passwordless',
  passwordlessVerify: '/api/login/passwordless/checkout',

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

  //dashboard-product
  addproduct: '/api/farmer/product',
  editproduct: '/api/farmer/product',

  //uploadProductImg,
  uploadProductImg: '/api/farmer/product/pic',
};

export const nextRoutes = {
  //auth
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  passwordless: '/auth/passwordless',

  //products
  search: '/product/search',
  allproducts: '/product/all',

  //cart
  addcart: '/cart/addcart',

  //dashboard-product
  addproduct: '/dashboard/addproduct',

  //uploadProductImg,
  uploadProductImg: '/dashboard/uploadProductImg',
};

