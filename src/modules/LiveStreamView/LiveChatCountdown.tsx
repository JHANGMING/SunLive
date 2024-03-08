import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '@/common/helpers/calculateTime';
import { LiveChatCountdownProps } from './data';
const LiveChatCountdown = ({ endTime }: LiveChatCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(timerId);
  }, [endTime]);

  return (
    <div className="flex items-center gap-8 pt-8">
      <h5 className="pl-24 text-darkGray text-16 font-bold">
        <span className=" text-primary-red text-18">限時</span>特賣
      </h5>
      <ul className="flex">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <li key={uuidv4()}>
            {index > 0 && <span className="text-20 mx-2">:</span>}
            {value.split('').map((digit, digitIndex) => (
              <span
                key={uuidv4()}
                className="bg-primary-red rounded-[4px] text-white font-bold  text-20 px-2">
                {digit}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LiveChatCountdown;
