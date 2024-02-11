import { CartDataType } from "@/constants/types/cart/cartlist";
import { LivesDataType } from "@/constants/types/live/live";
import { AllproductsDataType } from "@/constants/types/product/allproducts";

export type HomePropsType = {
  liveData: LivesDataType;
  topSaleProduct: AllproductsDataType;
  cartData: CartDataType;
};