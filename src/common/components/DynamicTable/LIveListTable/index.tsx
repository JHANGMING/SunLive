import Select from 'react-select';
import { BsLink45Deg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { nextRoutes } from '@/constants/apiPaths';
import usePagination from '@/common/hooks/usePagination';
import { setToast } from '@/redux/features/messageSlice';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { DynamicTableProps, OptionProductType } from './data';
import { useEffect, useState } from 'react';

const LiveListTable = ({ columns }: DynamicTableProps) => {
  const listData = useSelector(
    (state: RootState) => state.dashboard.livelistData
  );
  const dispatch = useDispatch();
  const data = listData;
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);
  const { currentData, maxPage, dataLength } = usePagination(
    data,
    itemsPerPage,
    currentPage
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
  const handleStatusChange = async (liveProductId: string, liveId: number) => {
    const dataObj = {
      liveProductId,
      liveId,
    };
    const apiParams: apiParamsType = {
      apiPath: nextRoutes['editliveproduct'],
      method: 'POST',
      data: dataObj,
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        dispatch(setToast({ message: result.message }));
      } else {
        dispatch(setToast({ message: result.message }));
      }
    } catch (error) {
      console.log(error);
    }
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
                case '聊天置頂商品':
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
              key={row.liveId}>
              {columns.map((column) => {
                let cellContent;
                if (
                  column.dataIndex === 'liveLink' &&
                  column.title === '直播連結'
                ) {
                  cellContent = (
                    <div className="flex justify-center gap-4 ">
                      <BsLink45Deg size={20} />
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
                } else if (column.dataIndex === 'liveProudct') {
                  const options = row.liveProudct.map(
                    (product: OptionProductType) => ({
                      value: product.liveProductId,
                      label: product.liveProductName,
                    })
                  );
                  const defaultOption = {
                    value: row.topLiveProductId,
                    label: row.topProductName,
                  };

                  cellContent = (
                    <div className="flex justify-center items-center">
                      <Select
                        options={options}
                        className=" text-14 w-[230px]"
                        defaultValue={defaultOption}
                        onChange={(selectedOption) => {
                          if (selectedOption) {
                            handleStatusChange(
                              selectedOption.value,
                              row.liveId
                            );
                          }
                        }}
                      />
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
