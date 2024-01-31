import { useState } from 'react';
import { DynamicTableProps } from './data';

const getCellClass = (columnDataIndex: string) => {
  switch (columnDataIndex) {
    case 'discountPrice':
      return 'py-[13px] text-primary-red';
    default:
      return 'py-[13px]';
  }
};

const ManagementTable = ({
  columns,
  data,
  showCheckbox,
}: DynamicTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const itemsPerPage = 5;

  const maxPage = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  };
  const handleStatusChange = (id: string, newStatus: string) => {
    console.log(newStatus);
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
            <tr className="text-center border-b border-lightGray" key={row.id}>
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
                const cellContent =
                  column.dataIndex === 'productstatus' ? (
                    <select
                      className="text-14"
                      value={row[column.dataIndex]}
                      onChange={(e) =>
                        handleStatusChange(row.id, e.target.value)
                      }>
                      <option value="上架">上架</option>
                      <option value="下架">下架</option>
                    </select>
                  ) : (
                    row[column.dataIndex]
                  );

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
        <p>共 {data.length} 筆資料</p>
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

export default ManagementTable;
