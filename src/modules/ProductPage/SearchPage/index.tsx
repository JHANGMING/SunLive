import Banner from '@/components/ProductPage/Banner';
import SearchSection from './SearchSection';
import AllProductSection from '../AllProductSection';

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
