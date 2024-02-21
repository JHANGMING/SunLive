import { BsDisplay } from 'react-icons/bs';
import { nextRoutes } from '@/constants/apiPaths';
import { fetcher } from '@/common/helpers/fetcher';
import useSWR from 'swr';
import Link from 'next/link';
const LiveIcon = () => {
  const { data } = useSWR(`/api${nextRoutes['liveing']}`, fetcher);
  const living = data?.message === '沒有直播' ? false : true;
  if(!living) return null;

  return (
    <Link
      href={living ? `/livestream/${data?.data?.liveId}` : ''}
      className=" relative hover:opacity-70">
      <BsDisplay size={60} className=" text-primary-red" />
      <p className=" font-bold text-16  absolute top-12 left-12 shiny-scale-effect">
        Live
      </p>
    </Link>
  );
};

export default LiveIcon;
