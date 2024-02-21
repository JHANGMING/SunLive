import { BsDisplay } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import useSWR from 'swr';
const LiveIcon = () => {
  const { data } = useSWR(`/api${nextRoutes['liveing']}`, fetcher);
  const living = data?.message === '沒有直播' ? false : true;
  if(!living) return null;

  return (
    <div className=" relative">
      <BsDisplay size={60} className=" text-primary-red" />
      <p className=" font-bold text-16 text-primary-green absolute top-12 left-12 shiny-scale-effect">
        Live
      </p>
    </div>
  );
};

export default LiveIcon;
