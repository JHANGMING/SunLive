import { mutate } from 'swr';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { nextRoutes } from '@/constants/apiPaths';
import usePagination from '@/common/hooks/usePagination';
import { setToast } from '@/redux/features/messageSlice';
import fetchNextApi, { apiParamsType } from '@/common/helpers/fetchNextApi';
import { DynamicTableProps, shipmentOptions } from './data';

const OrdersTable = ({
  columns,
  initialData,
}: DynamicTableProps) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentPage(1);
  }, [initialData]);
  const { currentData, maxPage, dataLength } = usePagination(
    initialData,
    itemsPerPage,
    currentPage
  );
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev));
  };
  const handleStatusChange = async(orderId:number) => {
    const apiParams: apiParamsType = {
      apiPath: `${nextRoutes['putorder']}?id=${orderId}`,
      method: 'POST',
    };
    try {
      const result = await fetchNextApi(apiParams);
      if (result.statusCode === 200) {
        mutate(`/api${nextRoutes['getorderlist']}`)
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
      <table
        className="w-full table-fixed text-14">
        <thead className="h-48">
          <tr className="bg-primary-yellow text-center">
            {columns.map((column) => {
              let thClass = 'py-[13px] font-normal';
              switch (column.title) {
                case '訂單建立時間':
                  thClass += ' w-150';
                  break;
                case '訂單編號':
                  thClass += ' w-120';
                  break;
                case '顧客':
                  thClass += ' w-120';
                  break;
                case '金額':
                  thClass += ' w-120';
                  break;
                case '付款狀態':
                  thClass += ' w-130';
                  break;
                default:
                  break;
              }

              return (
                <th className={thClass} key={column.key}>
                  {column.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentData?.map((row) => (
            <tr
              className="text-center border-b border-lightGray h-60"
              key={row.orderId}>
              {columns.map((column) => {
                const isPaid = row.ispay ==="已付款" ? true : false;
                const cellContent =
                  column.dataIndex === 'shipment' ? (
                    <div className="flex justify-center items-center ">
                      <Select
                        options={shipmentOptions}
                        isDisabled={!isPaid}
                        className=" text-14 w-[150px]"
                        defaultValue={shipmentOptions.find(
                          (option) => option.value === row[column.dataIndex]
                        )}
                        onChange={(selectedOption) => {
                          if (selectedOption) {
                            handleStatusChange(row.orderId);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    row[column.dataIndex]
                  );

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

export default OrdersTable;
