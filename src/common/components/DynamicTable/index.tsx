import { useState } from 'react';
import { DynamicTableProps } from './data';

const DynamicTable = ({ columns, data, showCheckbox }: DynamicTableProps) => {
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
        className={`${showCheckbox ? 'px-24 w-full' : 'w-full'} table-fixed `}>
        <thead>
          <tr className="bg-primary-yellow text-14 text-center">
            {showCheckbox && (
              <th className="py-[13px] flex justify-center">
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
            {columns.map((column) => (
              <th className="py-[13px]" key={column.key}>
                {column.title}
              </th>
            ))}
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
              {columns.map((column) => (
                <td className="py-[13px]" key={column.key}>
                  {column.dataIndex === 'productstatus' ? (
                    <select
                      value={row[column.dataIndex]}
                      onChange={(e) =>
                        handleStatusChange(row.id, e.target.value)
                      }>
                      <option value="上架">上架</option>
                      <option value="下架">下架</option>
                    </select>
                  ) : (
                    row[column.dataIndex]
                  )}
                </td>
              ))}
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

export default DynamicTable;
