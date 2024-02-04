import React, { useState, useEffect } from 'react';
import LogoImg from './Logo/LogoImg';

const Loading = () => {
  const [percent, setPercent] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [hide, setHide] = useState(false); // 新增状态控制组件隐藏

  useEffect(() => {
    const totalDuration = 1500; // 總長度1500毫秒
    const intervalTime = 20; // 间隔时间20毫秒
    const increment = (100 * intervalTime) / totalDuration; // 每次调用增加的百分比

    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + increment;
        if (newPercent >= 100) {
          clearInterval(timer);
          setCompleted(true);
          setTimeout(() => setHide(true), 100); // 进度条完成后半秒隐藏组件
          return 100; // 直接设置为100，避免超过100%
        }
        return newPercent;
      });
    }, intervalTime);

    return () => clearInterval(timer); // 清理函数
  }, []);

  if (hide) return null; // 如果hide为true，则不渲染组件

  return (
    <div
      className={`fixed bg-mediumGray/50 top-0 left-0 w-full h-screen z-30 ${completed ? 'complete' : ''}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] flex flex-col items-center">
        <LogoImg widthProps={50} heightProps={50} classProps="logo-shake" />
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
