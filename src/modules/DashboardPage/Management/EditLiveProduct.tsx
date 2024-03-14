import useSWR from 'swr';
import { useDispatch } from 'react-redux';
import { nextRoutes } from '@/constants/api/apiPaths';
import fetcher from '@/common/helpers/fetcher';
import Image from '@/common/components/CustomImage';
import { setToast } from '@/redux/features/messageSlice';
import useAuthStatus from '@/common/hooks/useAuthStatus';
import { LivedetailDateType } from '@/constants/types/live/livedetailDate';
import fetchNextApi, { NextapiParamsType } from '@/common/helpers/fetchNextApi';
import { EditLiveProductProps, LiveProductType } from './data';

const EditLiveProduct = ({ liveId }: EditLiveProductProps) => {
  const dispatch = useDispatch();
  const { authStatus } = useAuthStatus();
  const { data } = useSWR(
    authStatus ? `/api${nextRoutes.livelist}` : null,
    fetcher,
  );
  const liveProductList = data?.data?.find(
    (item: LivedetailDateType) => item.liveId === Number(liveId),
  );
  const liveProudctData = liveProductList?.liveProudct;

  const handerToTopChat = async (liveProductId: string) => {
    const dataObj = {
      liveProductId,
      liveId,
    };
    const apiParams: NextapiParamsType = {
      apiPath: nextRoutes.editliveproduct,
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
      console.error(error);
    }
  };
  return (
    <ul className="flex gap-10 justify-between w-full flex-wrap mt-32">
      {liveProudctData?.map((liveData: LiveProductType) => (
        <li className="w-[49%]" key={liveData.liveProductId}>
          <div className=" bg-SoftGray rounded-20 p-16 flex gap-16">
            <div className="flex flex-col items-center gap-8">
              <Image
                src={
                  liveData?.liveProductPhoto
                    ? liveData?.liveProductPhoto
                    : '/images/home/live/liveComingImg1.png'
                }
                alt="liveComingImg"
                className="w-60 h-60"
                roundedStyle="rounded-20 object-cover"
              />
              <h5 className=" text-mediumGray text-14 font-normal">
                <span>NT$</span>
                {liveData?.liveProductPrice}
              </h5>
            </div>
            <div className="text-darkGray flex flex-col gap-8 w-full">
              <div className=" flex gap-8 items-center">
                <h4 className="text-16 min-h-[50px]">
                  {liveData?.liveProductName}
                </h4>
              </div>
              <p className="">
                剩餘
                {' '}
                <span className=" text-primary-red text-24 font-bold shiny-scale-effect">
                  {data?.liveProductStock}
                </span>
                {' '}
                組
              </p>
              <button
                type="button"
                className={`${data?.liveProductStock === 0 ? 'bg-blueGray cursor-not-allowed' : 'bg-primary-red cursor-pointer hover:opacity-60'} text-white w-full rounded-8 text-center  mt-8 `}
                onClick={() => handerToTopChat(data.liveProductId)}
                disabled={data?.liveProductStock === 0}
              >
                加入置頂聊天室
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EditLiveProduct;
