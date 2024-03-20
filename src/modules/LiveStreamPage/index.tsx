import LiveBanner from '@/components/LiveStreamPage/LiveBanner';
import LivingShowSection from '../LandingPage/LivingShowSection';
import LiveProductSection from './LiveProductSection';

const LiveStreamPage = () => {
  return (
    <>
      <LiveBanner />
      <LivingShowSection isLivePage />
      <LiveProductSection />
    </>
  );
};

export default LiveStreamPage;
