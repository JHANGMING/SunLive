import { LivesDataType } from '@/constants/types/live/live';
import { CartDataType } from '@/constants/types/cart/cartlist';
import { AllproductsDataType } from '@/constants/types/product/allproducts';

export type HomePropsType = {
  cartData: CartDataType;
  liveData: LivesDataType;
  topSaleProduct: AllproductsDataType;
};
