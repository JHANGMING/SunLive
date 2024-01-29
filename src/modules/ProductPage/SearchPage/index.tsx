import Banner from '@/common/components/ProductPage/Banner';
import SearchSection from './SearchSection';
import AllProductSection from '../AllProductSection';
import PopularSection from '../PopularSection';

const SearchPage = () => {
  return (
    <>
      <Banner />
      <main>
        <SearchSection />
        <AllProductSection />
      </main>
    </>
  );
};

export default SearchPage;
