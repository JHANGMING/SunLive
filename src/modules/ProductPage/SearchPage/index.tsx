
import ProductBanner from '@/components/Banner/ProductBanner';
import AllProductSection from '@/modules/ProductPage/AllProductSection';
import SearchSection from './SearchSection';

const SearchPage = () => {
  return (
    <>
      <ProductBanner />
      <main>
        <SearchSection />
        <AllProductSection />
      </main>
    </>
  );
};

export default SearchPage;
