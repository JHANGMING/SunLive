import { createSlice } from '@reduxjs/toolkit';
import { LivesDataType } from '@/constants/types/live/live';
import { SearchDataType } from '@/constants/types/product/search';
import { PromotionDataType } from '@/constants/types/product/promotion';
import { DetailproductItemType } from '@/constants/types/product/detail';
import { LivedetailDateType } from '@/constants/types/live/livedetailDate';
import { AllproductsDataType } from '@/constants/types/product/allproducts';

interface InitialStateType {
  searchData: SearchDataType;
  allProductsData: AllproductsDataType;
  topSaleProduct: AllproductsDataType;
  promotionProduct: PromotionDataType;
  fruitProduct: AllproductsDataType;
  vegetableProduct: AllproductsDataType;
  detailProduct: DetailproductItemType;
  productInfoByUser: AllproductsDataType;
  liveData: LivesDataType;
  liveDetailData: LivedetailDateType;
  searchTag: string;
}
const initialState: InitialStateType = {
  searchData: [],
  allProductsData: [],
  topSaleProduct: [],
  promotionProduct: [],
  fruitProduct: [],
  vegetableProduct: [],
  detailProduct: {} as DetailproductItemType,
  productInfoByUser: [],
  liveData: {} as LivesDataType,
  liveDetailData: {} as LivedetailDateType,
  searchTag: '',
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
        allproductsData,
        topSaleProduct,
        promotionProduct,
        fruitProduct,
        vegetableProduct,
        detailProduct,
        productInfoByUser,
        liveData,
        liveDetailData,
      } = action.payload;
      return {
        ...state,
        allProductsData: allproductsData,
        topSaleProduct,
        promotionProduct,
        fruitProduct,
        vegetableProduct,
        detailProduct,
        productInfoByUser,
        liveData,
        liveDetailData,
      };
    },
  },
});

export const { setSearchData, setAllProductsData } = productSlice.actions;
export default productSlice.reducer;
