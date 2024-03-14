import { LiveProductItemType } from '@/constants/types/live/live';

const updateUpcomingLiveWithStyles = (
  upcomingLive: LiveProductItemType[],
) => {
  const classStyles = ['ml-16', 'ml-102', 'ml-43'];
  const updatedUpcomingLive = upcomingLive.slice(0, 3).map((item, index) => {
    const classStyle = classStyles[index] || '';
    return {
      ...item,
      classStyle,
    };
  });

  return updatedUpcomingLive;
};
export default updateUpcomingLiveWithStyles;
