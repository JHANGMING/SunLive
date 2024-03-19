import { useEffect, useRef } from 'react';
import LogoImg from '@/common/components/Logo/LogoImg';
import { YoutubeLiveIframProps } from './data';

const YoutubeLiveIfram = ({
  url,
  isLivePage,
  isFarmer = false,
  isViewPage = false,
}: YoutubeLiveIframProps) => {
  let iframeContainerStyle;
  if (isFarmer) {
    iframeContainerStyle = 'h-[350px]';
  } else if (isViewPage) {
    iframeContainerStyle = 'h-[500px]';
  } else {
    iframeContainerStyle = 'w-[320px] h-[200px] lg:w-full lg:h-full';
  }
  const iframeBorderStyle = isViewPage
    ? 'outline outline-4  outline-primary-red rounded-16'
    : 'border-[20px] border-white rounded-20 outline outline-4 outline-mediumGray';
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const handleIframeLoad = () => {
    if (iframeRef.current && (isViewPage || isLivePage)) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*',
      );
    }
  };
  const playVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*',
      );
    }
  };

  const pauseVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*',
      );
    }
  };
  useEffect(() => {
    if (isViewPage || isLivePage) {
      playVideo();
    }
    const iframeElement = iframeRef.current;

    if (!('IntersectionObserver' in window)) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (isViewPage || isLivePage) {
          return;
        }

        const entry = entries[0];
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: 0.5 },
    );

    if (iframeElement) {
      observer.observe(iframeElement);
    }

    return () => {
      if (iframeElement) {
        observer.unobserve(iframeElement);
      }
    };
  }, [isViewPage, isLivePage]);
  return (
    <div className={`relative ${iframeContainerStyle}`}>
      <div className={`relative w-full h-full ${iframeBorderStyle} `}>
        <iframe
          ref={iframeRef}
          className={` absolute top-0 left-0 w-full h-full ${isViewPage && 'rounded-16'}`}
          src={
            isViewPage
              ? `https://www.youtube.com/embed/${url}?autoplay=1&mute=1 `
              : 'https://www.youtube.com/embed/5NFpRgeGfkM?autoplay=1&mute=1&loop=1&playlist=5NFpRgeGfkM'
          }
          title="14th Rocket-Sunlive"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={handleIframeLoad}
        />
      </div>
      <div className="absolute left-1/2 -top-16 lg:-top-35 transform -translate-x-1/2 ">
        <LogoImg classProps=" logo-shake w-24 h-24 lg:w-50 lg:h-50" />
      </div>
    </div>
  );
};

export default YoutubeLiveIfram;
