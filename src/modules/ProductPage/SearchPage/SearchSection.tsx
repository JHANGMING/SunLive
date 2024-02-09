import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ProductList from '@/common/components/product/ProductList';
import SearchInput from '@/common/components/Input/SearchInput';
import CategoryTitle from '../CategoryTitle';

const SearchSection = () => {
  const { searchData, searchTag } = useSelector(
    (state: RootState) => state.product
  );
  
  return (
    <section className="bg-searchBannerBG bg-repeat-x -mt-[216px] pt-120  ">
      <div className="bg-lightWhite pb-60">
        <div className="container ">
          <div className="flex items-center">
            <CategoryTitle title="搜尋結果" gapStyle="mb-8" />
            <SearchInput headerVisible={true} />
          </div>
          <h4 className="mb-24">
            {searchTag}的搜尋結果共{' '}
            <span className=" text-primary-green">{searchData.length}</span> 筆
          </h4>
          {searchData.length > 0 ? (
            <ProductList category="search" />
          ) : (
            <p>
              不好意思！
              <br />
              我們找不到相關的商品，請輸入其他字詞或探索以下農產品
            </p>
          )}
          {/* */}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
