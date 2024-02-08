import { AllproductsDataType } from '@/constants/types/product/allproducts';
import { SearchDataType } from '@/constants/types/product/search';
import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType{
  searchData: SearchDataType;
  allProductsData:AllproductsDataType;
  searchTag: string;

} 
const initialState: InitialStateType = {
  searchData: [],
  allProductsData: [],
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
      return {
        ...state,
        allProductsData: action.payload.data,
      };
    }
  },
});

export const { setSearchData, setAllProductsData } = productSlice.actions;
export default productSlice.reducer;
