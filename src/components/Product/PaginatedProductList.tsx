import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductCard from './ProductCard';
import Pagination from '../Pagination';
import { PaginatedProductListProps } from './data';

const PaginatedProductList = ({
  data,
  itemsPerPage,
}: PaginatedProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <>
      <ul className="grid grid-cols-12 auto-rows-min gap-x-24 gap-y-68">
        {currentItems.map((item) => (
          <ProductCard
            key={uuidv4()}
            {...item}
            imgBorderStyle="border-primary-yellow"
            buttonAtBottom
          />
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default PaginatedProductList;
