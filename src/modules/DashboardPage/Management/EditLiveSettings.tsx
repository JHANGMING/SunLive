
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import ChatAndProduct from '@/modules/LiveStreamView/ChatAndProduct';
import YoutubeLiveIfram from '@/modules/LandingPage/LivingShowSection/YoutubeLiveLink';
import { EditLiveProps } from './data';
import EditLiveProduct from './EditLiveProduct';


const EditLiveSettings = ({ liveDetailData }: EditLiveProps) => {
  const router = useRouter();
  const { liveId } = router.query;
  const { data } = useSWR(
    liveId ? `/api${nextRoutes['live']}?id=${liveId}` : null,
    fetcher,
    { fallbackData: liveDetailData }
  );
  const url=data?.data?.yturl;
  const liveDate=data?.data?.liveDate;
  const liveName = data?.data?.liveName;
  const famerliveId = data?.data?.liveId;
  const liveFarmerId= data?.data?.liveFarmerId;
  if (!data) {
    router.push("/dashboard/management"); 
  }
  
  return (
    <div className="w-11/12 bg-white rounded-20 p-20 flex-grow flex flex-col gap-24 self-start">
      <h3 className=" text-20 font-semibold ">{liveName}-後台直播</h3>
      <h4 className=" text-16 font-semibold self-end">{liveDate}</h4>
      <div className="flex gap-16">
        <div className="w-[60%]">
          <YoutubeLiveIfram isViewPage={true} isFarmer={true} url={url} />
          <EditLiveProduct liveId={famerliveId} />
        </div>
        <div className="w-[40%] h-[720px] border border-lightGray rounded-16 flex flex-col">
          <ChatAndProduct
            isFarmer={true}
            liveDetailData={data?.data}
            liveId={famerliveId}
            liveFarmerId={liveFarmerId}
          />
        </div>
      </div>
    </div>
  );
};

export default EditLiveSettings;
