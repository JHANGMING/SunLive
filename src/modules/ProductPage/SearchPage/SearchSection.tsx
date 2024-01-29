import ProductList from '@/common/components/product/ProductList';
import CategoryTitle from '../CategoryTitle';
import SearchInput from '@/common/components/Input/SearchInput';

const SearchSection = () => {
  return (
    <section className="bg-searchBannerBG bg-repeat-x -mt-[216px] pt-120  ">
      <div className="bg-lightWhite pb-60">
        <div className="container ">
          <div className="flex items-center">
            <CategoryTitle title="搜尋結果" gapStyle="mb-8" />
            <SearchInput headerVisible={true} />
          </div>
          <h4 className="mb-24">
            玉米的搜尋結果共 <span className=" text-primary-green">3</span> 筆
          </h4>
          <ProductList category="search" />
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
