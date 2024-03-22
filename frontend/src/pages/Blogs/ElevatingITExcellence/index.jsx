// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import ConnectBanner from '../../../components/shared/ConnectBanner';

// import components
import Hero from '../../../components/shared/Hero';
import ElevatingContent from './ElevatingContent';

const Elevating = () => {
  return (
    <div className="scrollbar-hide">
      <Hero image={headerBg} title={'Blog'} content={'Home / Blog'} />
      {/* <div className="iframe-container">
        <iframe
          src="https://credencetecglobal.wordpress.com/2024/03/14/elevating-it-excellence-the-impact-of-rental-equipment-on-the-it-industry/"
          width="100%"
          height="100%"
          // scrolling="no"
          className="min-h-screen h-full  "
          allowFullScreen
        ></iframe>
      </div> */}

      <ElevatingContent />
      <ConnectBanner />
    </div>
  );
};

export default Elevating;
