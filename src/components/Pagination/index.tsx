import { v4 as uuidv4 } from 'uuid';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useProducts } from '@/components/Product/ProductsRefContext';
import { PaginationProps } from './data';

const Pagination = ({
  paginate,
  totalItems,
  currentPage,
  itemsPerPage,
}: PaginationProps) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const refs = useProducts();
  if (!refs) return null;
  const { allProductsRef } = refs;

  const scrollToElement = () => {
    if (allProductsRef && allProductsRef.current) {
      allProductsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const changePage = (offset: number) => {
    const newPage = currentPage + offset;
    if (newPage > 0 && newPage <= pageCount) {
      paginate(newPage);
      scrollToElement();
    }
  };
  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1,
  );

  return (
    <div className="flex justify-center gap-8 mt-40 items-center">
      <button
        type="button"
        aria-label="PageDesc"
        className="py-12 px-16 bg-white rounded-20 border border-lightGray hover:opacity-60"
        onClick={() => changePage(-1)}
      >
        <BsChevronLeft size={16} className=" text-lightGray" />
      </button>

      {pageNumbers.map((number) => (
        <button
          type="button"
          key={uuidv4()}
          aria-label="PageChagne"
          className={`w-40 h-40 rounded-full flex justify-center items-center hover:opacity-60 ${currentPage === number ? 'bg-primary-green text-white ' : 'bg-white border border-lightGray'}`}
          onClick={() => {
            paginate(number);
            scrollToElement();
          }}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        aria-label="PageAdd"
        className="py-12 px-16 bg-white rounded-20 border border-lightGray cursor-pointer hover:opacity-60"
        onClick={() => changePage(1)}
      >
        <BsChevronRight size={16} className=" text-lightGray " />
      </button>
    </div>
  );
};
export default Pagination;
