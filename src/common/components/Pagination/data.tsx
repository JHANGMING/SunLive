export type PaginationProps = {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
};
