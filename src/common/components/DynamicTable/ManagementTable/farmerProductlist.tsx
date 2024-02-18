import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { DynamicTableProps} from './data';
import usePagination from '@/common/hooks/usePagination';
import { getCellClass } from '@/common/helpers/getCellClass';

const ProductlistTable = ({ columns }: DynamicTableProps) => {
  const router = useRouter();
  const listData = useSelector((state: RootState) => state.dashboard.listData);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const itemsPerPage = 5;
  const data = listData;
  const { currentData, maxPage,dataLength, currentPage, setCurrentPage } = usePagination(
      data,
      itemsPerPage
    );
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  };

  const handleEdit = (id: number) => {
    router.push(`/dashboard/products/${id}`);
  };

  return (
    <>
      <table
        className="table-fixed text-14 w-full">
        <thead className="h-48">
          <tr className="bg-primary-yellow text-center">
            {columns.map((column) => {
              const thClass =
                column.title === '農產品名稱'
                  ? 'py-[13px] font-normal w-160'
                  : 'py-[13px] font-normal';

              return (
                <th className={thClass} key={column.key}>
                  {column.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr
              className="text-center border-b border-lightGray"
              key={row.productId}>
              {columns.map((column) => {
                const tdClass = getCellClass(column.dataIndex);
                let cellContent;

                if (column.dataIndex === 'productTitle') {
                  cellContent = (
                    <div
                      onMouseEnter={() => setHoveredRow(row.productId)}
                      onMouseLeave={() => setHoveredRow(null)}>
                      {row[column.dataIndex]}
                      {hoveredRow === row.productId && (
                        <div className="flex justify-center gap-4">
                          <button
                            type="button"
                            className="text-12 text-primary-green pr-4 border-r border-lightGray"
                            onClick={() => handleEdit(row.productId)}>
                            編輯
                          </button>
                          <button
                            type="button"
                            className="text-12 text-primary-green">
                            移至垃圾桶
                          </button>
                        </div>
                      )}
                    </div>
                  );
                } else if (column.dataIndex === 'productState') {
                  const status = row[column.dataIndex] ? '上架' : '下架';
                  cellContent = <p>{status}</p>;
                }else if (column.dataIndex === 'productUpdatTime') {
                  const data=row[column.dataIndex]?row[column.dataIndex]:"--";
                  cellContent = <p>{data}</p>;
                } else {
                  cellContent = row[column.dataIndex];
                }
                return (
                  <td className={tdClass} key={column.key}>
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-between mt-20 text-darkGray pl-12 pr-24">
        <p>共 {dataLength} 筆資料</p>
        <div className="flex gap-24">
          <p>{`${currentPage}/${maxPage}`}</p>
          <button
            type="button"
            onClick={handlePrevious}
            className=" hover:text-mediumGray">
            前一頁
          </button>
          <button
            type="button"
            onClick={handleNext}
            className=" hover:text-mediumGray">
            下一頁
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductlistTable;
