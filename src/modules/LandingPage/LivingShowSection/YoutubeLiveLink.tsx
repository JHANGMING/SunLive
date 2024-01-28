import LogoImg from '@/common/components/Logo/LogoImg';
import { useEffect, useRef } from 'react';
type YoutubeLiveIframProps = {
  isViewPage?: boolean;
  isLivePage?: boolean;
};
const YoutubeLiveIfram = ({
  isViewPage = false,
  isLivePage,
}: YoutubeLiveIframProps) => {
  const iframeContainerStyle = isViewPage ? 'h-[530px]' : 'h-full';
  const iframeBorderStyle = isViewPage
    ? 'border-4  border-primary-red rounded-20'
    : 'border-[20px] border-white rounded-20 outline outline-4 outline-mediumGray';
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const handleIframeLoad = () => {
    if (iframeRef.current && (isViewPage || isLivePage)) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
    }
  };
  const playVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
    }
  };

  const pauseVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    }
  };
  useEffect(() => {
    // 当 isViewPage 或 isLivePage 为 true 时，自动播放视频
    if (isViewPage || isLivePage) {
      playVideo();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isViewPage || isLivePage) {
          return; // 如果 isViewPage 或 isLivePage 为 true，不执行任何操作
        }

        const entry = entries[0];
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [isViewPage, isLivePage]);
  return (
    <div className={`relative ${iframeContainerStyle}`}>
      <div className={`iframe-container ${iframeBorderStyle} `}>
        <iframe
          ref={iframeRef}
          className={`${isViewPage && 'rounded-16'}`}
          src="https://www.youtube.com/embed/6AGm5u58gRM?enablejsapi=1&mute=1"
          title="[貳獎] 無人知曉的台灣小農"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={handleIframeLoad}></iframe>
      </div>
      <LogoImg
        widthProps={50}
        heightProps={50}
        classProps="absolute left-1/2 -top-35 transform -translate-x-1/2  logo-shake"
      />
    </div>
  );
};

export default YoutubeLiveIfram;
