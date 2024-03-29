import { useState } from 'react';
import { useRouter } from 'next/router';
import { BsLink45Deg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import usePagination from '@/common/hooks/usePagination';
import { setToast } from '@/redux/features/messageSlice';
import { LivedetailDateType } from '@/constants/types/live/livedetailDate';
import updateLiveDataWithFutureFlag from '@/common/helpers/updatedLiveDat';
import { DynamicTableProps } from './data';

const LiveListTable = ({ columns }: DynamicTableProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const listData = useSelector(
    (state: RootState) => state.dashboard.livelistData,
  );
  const updataListData = updateLiveDataWithFutureFlag(
    listData as unknown as LivedetailDateType[],
  );
  const { currentData, maxPage, dataLength } = usePagination(
    updataListData,
    currentPage,
  );

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
        dispatch(setToast({ message: '已複製連結' }));
      } catch (err) {
        dispatch(setToast({ message: '複製失敗' }));
      }
    }
  };

  const handerToLive = (liveId: string) => {
    router.push(`/dashboard/live/${liveId}`);
  };
  return (
    <>
      <table className="table-fixed text-14 w-full">
        <thead className="h-48">
          <tr className="bg-primary-yellow text-center">
            {columns.map((column) => {
              let thClass = 'py-[13px] font-normal';
              switch (column.title) {
                case '直播日期':
                  thClass = 'py-[13px] font-normal w-[140px]';
                  break;
                case '直播名稱':
                  thClass = 'py-[13px] font-normal w-[140px]';
                  break;
                case '直播連結':
                  thClass = 'py-[13px] font-normal w-[140px]';
                  break;
                case '直播開始時間':
                  thClass = 'py-[13px] font-normal w-[140px]';
                  break;
                case '直播後台':
                  thClass = 'py-[13px] font-normal';
                  break;
                default:
                  break;
              }
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
              className="text-center border-b border-lightGray h-60"
              key={row.liveId}
            >
              {columns.map((column) => {
                let cellContent;
                if (
                  column.dataIndex === 'liveLink'
                  && column.title === '直播連結'
                ) {
                  cellContent = (
                    <div className="flex justify-center gap-4 ">
                      <BsLink45Deg size={20} />
                      <button
                        type="button"
                        className="cursor-pointer hover:text-primary-green"
                        onClick={() => handleCopyLink(
                          `https://sun-live.vercel.app/livestream/${row.liveId}`,
                        )}
                      >
                        複製連結
                      </button>
                    </div>
                  );
                } else if (column.dataIndex === 'liveProudct') {
                  cellContent = (
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className={`text-white w-2/4 rounded-8 text-14 leading-[30px] py-[5px] px-26 ${!row.isFuture ? 'bg-lightGray cursor-not-allowed' : 'bg-primary-green hover:opacity-70'}`}
                        disabled={!row.isFuture}
                        onClick={() => handerToLive(row.liveId)}
                      >
                        開始直播
                      </button>
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
        <p>
          共
          {dataLength}
          {' '}
          筆資料
        </p>
        <div className="flex gap-24">
          <p>{`${currentPage}/${maxPage}`}</p>
          <button
            type="button"
            onClick={handlePrevious}
            className=" hover:text-mediumGray"
          >
            前一頁
          </button>
          <button
            type="button"
            onClick={handleNext}
            className=" hover:text-mediumGray"
          >
            下一頁
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveListTable;
