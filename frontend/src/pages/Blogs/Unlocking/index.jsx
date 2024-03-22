// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';

// import components
import Hero from '../../../components/shared/Hero';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import UnlockingContent from './UnlockingContent';

const Unlocking = () => {
  return (
    <div>
      <Hero image={headerBg} title={'Blog'} content={'Home / Blog'} />
      <UnlockingContent />
      <ConnectBanner />
    </div>
  );
};

export default Unlocking;
