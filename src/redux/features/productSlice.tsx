import { createSlice } from '@reduxjs/toolkit';
import { LivesDataType } from '@/constants/types/live/live';
import { SearchDataType } from '@/constants/types/product/search';
import { PromotionDataType } from '@/constants/types/product/promotion';
import { DetailproductItemType } from '@/constants/types/product/detail';
import { LivedetailDateType } from '@/constants/types/live/livedetailDate';
import { AllproductsDataType } from '@/constants/types/product/allproducts';

interface InitialStateType {
  searchTag: string;
  liveData: LivesDataType;
  searchData: SearchDataType;
  fruitProduct: AllproductsDataType;
  liveDetailData: LivedetailDateType;
  topSaleProduct: AllproductsDataType;
  promotionProduct: PromotionDataType;
  detailProduct: DetailproductItemType;
  allProductsData: AllproductsDataType;
  vegetableProduct: AllproductsDataType;
  productInfoByUser: AllproductsDataType;
}
const initialState: InitialStateType = {
  searchTag: '',
  searchData: [],
  fruitProduct: [],
  topSaleProduct: [],
  allProductsData: [],
  promotionProduct: [],
  vegetableProduct: [],
  productInfoByUser: [],
  liveData: {} as LivesDataType,
  liveDetailData: {} as LivedetailDateType,
  detailProduct: {} as DetailproductItemType,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSearchData(state, action) {
      return {
        ...state,
        searchData: action.payload.data,
        searchTag: action.payload.searchTag,
      };
    },
    setAllProductsData(state, action) {
      const {
        liveData,
        fruitProduct,
        detailProduct,
        topSaleProduct,
        liveDetailData,
        allproductsData,
        promotionProduct,
        vegetableProduct,
        productInfoByUser,
      } = action.payload;
      return {
        ...state,
        liveData,
        fruitProduct,
        detailProduct,
        topSaleProduct,
        liveDetailData,
        promotionProduct,
        vegetableProduct,
        productInfoByUser,
        allProductsData: allproductsData,
      };
    },
  },
});

export const { setSearchData, setAllProductsData } = productSlice.actions;
export default productSlice.reducer;
