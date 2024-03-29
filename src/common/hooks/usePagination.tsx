import { useMemo } from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DataType = Array<any> | string | number | null;
function usePagination(data: DataType, currentPage: number) {
  const itemsPerPage = 5;
  const maxPage = useMemo(() => {
    if (Array.isArray(data) || typeof data === 'string') {
      return Math.ceil(data.length / itemsPerPage);
    }
    return 0;
  }, [data, itemsPerPage]);

  const currentData = useMemo(() => {
    if (Array.isArray(data)) {
      const start = (currentPage - 1) * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    }
    return [];
  }, [data, currentPage, itemsPerPage]);

  const dataLength = useMemo(() => {
    if (Array.isArray(data) || typeof data === 'string') {
      return data.length;
    }
    return 0;
  }, [data]);

  return { currentData, maxPage, dataLength };
}

export default usePagination;
