// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import ConnectBanner from '../../../components/shared/ConnectBanner';

// import components
import Hero from '../../../components/shared/Hero';
import AmcContent from './AmcContent';

const WhyAMC = () => {
  return (
    <div>
      <Hero image={headerBg} title={'Blog'} content={'Home / Blog'} />
      <AmcContent />
      <ConnectBanner />
    </div>
  );
};

export default WhyAMC;
