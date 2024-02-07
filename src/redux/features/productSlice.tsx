import { createSlice } from '@reduxjs/toolkit';

interface productImgType {
  src: string;
  alt: string;
}

export interface productData {
  productId: number;
  productTitle: string;
  description: string;
  smallOriginalPrice: number;
  smallPromotionPrice: number;
  productImg: productImgType;
  productSpecId: number;
}
const initialState: productData = {
  productId: 0,
  productTitle: "",
  description: "",
  smallOriginalPrice:0,
  smallPromotionPrice: 0,
  productImg: {
    src: "",
    alt: "",
  },
  productSpecId: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSearchData(state, action) {
      console.log('action.payload.data', action.payload);
      

      // const { nickname, token } = action.payload
      // return { ...state };
      return {
        ...state,
      };
    },
  },
});

export const { setSearchData } = productSlice.actions;
export default productSlice.reducer;
