import { LivesDataType } from '@/constants/types/live/live';
import { AllproductsDataType } from '@/constants/types/product/allproducts';
import { DetailproductItemType } from '@/constants/types/product/detail';
import { PromotionDataType } from '@/constants/types/product/promotion';
import { SearchDataType } from '@/constants/types/product/search';
import { createSlice } from '@reduxjs/toolkit';

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
  searchTag: string;
} 
const initialState: InitialStateType = {
  searchData: [],
  allProductsData: [],
  topSaleProduct: [],
  promotionProduct: [],
  fruitProduct: [],
  vegetableProduct: [],
  detailProduct:{} as DetailproductItemType,
  productInfoByUser: [],
  liveData: {} as LivesDataType,
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
      } = action.payload;
      return {
        ...state,
        allProductsData: allproductsData,
        topSaleProduct: topSaleProduct,
        promotionProduct: promotionProduct,
        fruitProduct: fruitProduct,
        vegetableProduct: vegetableProduct,
        detailProduct: detailProduct,
        productInfoByUser: productInfoByUser,
        liveData: liveData,
      };
    }
  },
});

export const { setSearchData, setAllProductsData } = productSlice.actions;
export default productSlice.reducer;
