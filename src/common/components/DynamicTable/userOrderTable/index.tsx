import { useState } from 'react';
import usePagination from '@/common/hooks/usePagination';
import { transOrderData } from '@/common/helpers/transOrderData';
import { DynamicTableProps } from '../data';

const DynamicTable = ({ columns, data }: DynamicTableProps) => {
  const transformData = transOrderData(data);
  const [currentPage, setCurrentPage] = useState(1);
  const { currentData, maxPage, dataLength } = usePagination(
    transformData,
    currentPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  };

  return (
    <>
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-primary-yellow text-14 text-center">
            {columns.map((column) => (
              <th className="py-[13px] font-normal" key={column.key}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr
              className="text-center border-b border-lightGray"
              key={row.orderId}>
              {columns.map((column) => (
                <td className="py-[13px]" key={column.key}>
                  {row[column.dataIndex]}
                </td>
              ))}
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

export default DynamicTable;
