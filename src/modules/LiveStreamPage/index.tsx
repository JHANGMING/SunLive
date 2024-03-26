import LiveBanner from '@/components/Banner/LiveBanner';
import LivingShowSection from '@/modules/LandingPage/LivingShowSection';
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
