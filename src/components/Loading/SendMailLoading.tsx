import React, { useState, useEffect } from 'react';
import LogoImg from '@/components/Logo/LogoImg';

const SendMailLoading = () => {
  const [percent, setPercent] = useState(0);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    const totalDuration = 1500;
    const intervalTime = 20;
    const increment = (100 * intervalTime) / totalDuration;

    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + increment;
        if (newPercent >= 100) {
          clearInterval(timer);
          setCompleted(true);
          return 100;
        }
        return newPercent;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bg-mediumGray/50 top-0 left-0 w-full h-screen z-30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] flex flex-col items-center">
        <LogoImg classProps="w-50 h-50 logo-shake" />
        <div className=" bg-lightGray w-full h-10 mt-24 rounded-full overflow-hidden ">
          <div
            className="bg-primary-yellow h-full"
            style={{ width: `${percent}%` }}
          />
        </div>
        {completed && (
          <p className=" text-white font-bold text-32 mt-24">信件已發至信箱</p>
        )}
        {' '}
      </div>
    </div>
  );
};

export default SendMailLoading;
