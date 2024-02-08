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
const initialState: { data: productData[]; searchTag:string } = {
  data: [],
  searchTag: '',
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
        data: action.payload.data,
        searchTag: action.payload.searchTag,
      };
    },
  },
});

export const { setSearchData } = productSlice.actions;
export default productSlice.reducer;
