import { CartItemType } from "@/constants/types/cart/cartlist";

type AccProps = {
  productId: number;
  specId: number;
  qty: number;
  subTotal: number;
};

export const transformDataToCartList = (data:CartItemType[]) => {
  return data.reduce((acc: AccProps[], item) => {
    acc.push({
      productId: item.productId,
      specId: item.productSpecId,
      qty: item.cartItemQty,
      subTotal: item.subtotal,
    });
    return acc;
  }, []);
};
