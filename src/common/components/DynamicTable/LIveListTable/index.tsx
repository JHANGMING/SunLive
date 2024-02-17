import { use, useEffect, useState } from 'react';
import { DynamicTableProps } from './data';
import { BsLink45Deg } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { LivelistType } from '@/constants/types/dashboard/livelist';
const LiveListTable = ({
  columns,
  showCheckbox,
}: DynamicTableProps) => {
  const listData = useSelector(
    (state: RootState) => state.dashboard.livelistData
  );
  console.log('listss',listData);
  
  const data = listData;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
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

  const handleCopyLink = async (link: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(link);
        console.log('链接已复制到剪贴板');
        // 这里可以添加用户反馈，例如一个提示框
      } catch (err) {
        console.error('复制链接失败', err);
      }
    }
  };
  // const handleStatusChange = (id: string, newStatus: string) => {
  //   const updatedData = data.map((item) =>
  //     item.id === id ? { ...item, orderStatus: newStatus } : item
  //   );
  //   setData(updatedData); // 更新数据
  // };
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
                column.title === '直播日期'
                  ? 'py-[13px] font-normal w-130'
                  : 'py-[13px] font-normal';

              return (
                <th className={thClass} key={column.key}>
                  {column.title === '直播連結' ? (
                    <div className="flex items-center justify-center gap-4">
                      <BsLink45Deg size={20} />
                      直播連結
                    </div>
                  ) : (
                    column.title
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr
              className="text-center border-b border-lightGray"
              key={row.liveId}>
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
                let cellContent;
                if (
                  column.dataIndex === 'liveLink' &&
                  column.title === '直播連結'
                ) {
                  cellContent = (
                    <div className="flex justify-center gap-4 ">
                      <BsLink45Deg size={20} />
                      {row[column.dataIndex]}
                      <span
                        className="cursor-pointer hover:text-primary-green"
                        onClick={() =>
                          handleCopyLink(
                            `https://sun-live.vercel.app/livestream/view/${row.liveId}`
                          )
                        }>
                        複製連結
                      </span>
                    </div>
                  );
                } else {
                  cellContent = row[column.dataIndex];
                }
                return <td key={column.key}>{cellContent}</td>;
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

export default LiveListTable;
