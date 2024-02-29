import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading } from '@/redux/features/messageSlice';
import { setSearchData } from '@/redux/features/productSlice';
import ProductList from '@/common/components/product/ProductList';
import SearchInput from '@/common/components/Input/SearchInput';
import CategoryTitle from '../CategoryTitle';

const SearchSection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchData, searchTag } = useSelector(
    (state: RootState) => state.product
  );
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!url.includes('/search')) {
        dispatch(setSearchData({ searchTag: '輸入水果、蔬菜' }));
        dispatch(showLoading());
      }
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);
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
            <span className=" text-primary-green">{searchData?.length}</span> 筆
          </h4>
          {searchData?.length > 0 ? (
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
