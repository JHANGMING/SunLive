export const calculateTimeLeft = (endTime: string) => {
  if (typeof endTime !== 'string' || !endTime) {
    return { hours: '00', minutes: '00', seconds: '00' };
  }
  const endTimeParts = endTime.split(':').map((num) => parseInt(num, 10));
  if (
    endTimeParts.length < 2 ||
    isNaN(endTimeParts[0]) ||
    isNaN(endTimeParts[1])
  ) {
    return { hours: '00', minutes: '00', seconds: '00' };
  }
  const now = new Date();
  const endDate = new Date(now);
  endDate.setHours(endTimeParts[0], endTimeParts[1], 0, 0);

  const timeDiff = endDate.getTime() - now.getTime();
  if (timeDiff <= 0) {
    return { hours: '00', minutes: '00', seconds: '00' };
  }

  return {
    hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, '0'),
    minutes: Math.floor((timeDiff / (1000 * 60)) % 60)
      .toString()
      .padStart(2, '0'),
    seconds: Math.floor((timeDiff / 1000) % 60)
      .toString()
      .padStart(2, '0'),
  };
};
