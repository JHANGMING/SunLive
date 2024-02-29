import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { hideLoading } from '@/redux/features/messageSlice';
import LogoImg from '../Logo/LogoImg';

const Loading = () => {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(0);
  const [completed, setCompleted] = useState(false);
const isLoading = useSelector((state: RootState) => state.message.isLoading);

useEffect(() => {
  if (isLoading) {
    let interval:NodeJS.Timeout | null = null
    const totalDuration = 1500;
    const increment = (100 * 20) / totalDuration;

    interval = setInterval(() => {
      setPercent((prev) => {
        const nextPercent = prev + increment;
        if (nextPercent >= 100 && interval !== null) {
          clearInterval(interval);
          setCompleted(true);
          // 1.5秒後關閉loading
          setTimeout(() => {
            dispatch(hideLoading()); 
          }, 1500);
          return 100;
        }
        return nextPercent;
      });
    }, 20);

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }
}, [isLoading, dispatch]);

// 如果不是在 loading 狀態或者已完成，則不顯示
if (!isLoading || completed) return null;


  return (
    <div
      className={`fixed bg-mediumGray/50 top-0 left-0 w-full h-screen z-30 ${completed ? 'complete' : ''}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] flex flex-col items-center">
        <LogoImg classProps="w-50 h-50 logo-shake" />
        <div className=" bg-lightGray w-full h-10 mt-24 rounded-full overflow-hidden ">
          <div
            className="bg-primary-yellow h-full"
            style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
