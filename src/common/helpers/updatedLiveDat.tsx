import { LivedetailDateType } from '@/constants/types/live/livedetailDate';

const updateLiveDataWithFutureFlag = (
  listData: LivedetailDateType[],
) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return listData.map((event) => {
    const eventDate = new Date(event.liveDate.replace(/\//g, '-'));
    eventDate.setHours(0, 0, 0, 0);
    return {
      ...event,
      isFuture: eventDate.getTime() === today.getTime(),
    };
  });
};
export default updateLiveDataWithFutureFlag;
