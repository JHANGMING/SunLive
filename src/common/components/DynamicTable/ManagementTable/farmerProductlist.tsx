import { useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { DynamicTableProps, ProductDataType } from './data';
import { useRouter } from 'next/router';

const getCellClass = (columnDataIndex: string) => {
  switch (columnDataIndex) {
    case 'discountPrice':
      return 'py-[13px] text-primary-red';
    default:
      return 'py-[13px]';
  }
};

const ProductlistTable = ({ columns, showCheckbox }: DynamicTableProps) => {
  const router = useRouter();
  const listData = useSelector((state: RootState) => state.dashboard.listData);
  const data = listData;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const itemsPerPage = 5;

 let maxPage = 0;
 if (Array.isArray(data) || typeof data === 'string') {
   maxPage = Math.ceil(data.length / itemsPerPage);
 }

 let currentData: any[] = [];
 if (Array.isArray(data)) {
   currentData = data.slice(
     (currentPage - 1) * itemsPerPage,
     currentPage * itemsPerPage
   );
 }
 let dataLength = 0;
 if (Array.isArray(data) || typeof data === 'string') {
   dataLength = data.length;
 }
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  };

  // const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newSelectedRows = {};
  //   data.forEach((item) => {
  //     newSelectedRows[item.id] = e.target.checked;
  //   });
  //   setSelectedRows(newSelectedRows);
  //   setSelectAll(e.target.checked);
  // };
  // const handleRowSelect = (id:string) => {
  //   console.log(id);

  //   setSelectedRows((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };
  const handleEdit = (id: number) => {
    router.push(`/dashboard/products/${id}`);
  };

  const handleDelete = (id: string) => {
    console.log('刪除: ', id);
  };

  return (
    <>
      <table
        className={`${showCheckbox ? ' w-full' : 'w-full'} table-fixed text-14 `}>
        <thead className="h-48">
          <tr className="bg-primary-yellow text-center">
            {showCheckbox && (
              <th className="py-16 font-normal w-64">
                <input
                  type="checkbox"
                  className="w-16 h-16"
                  checked={
                    selectAll && Object.values(selectedRows).every(Boolean)
                  }
                  // onChange={handleSelectAll}
                />
              </th>
            )}
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
              {showCheckbox && (
                <td className="py-[13px]">
                  <input
                    type="checkbox"
                    className="w-16 h-16"
                    // checked={selectedRows[row.id] || false}
                    // onChange={() => handleRowSelect(row.id)}
                  />
                </td>
              )}
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
