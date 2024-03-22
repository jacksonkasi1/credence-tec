// components
import Hero from '@shared/Hero';
import Brands from '@shared/Brands';
import Story from '@shared/Story';
import ProvenProcess from '@shared/ProvenProcess';
import Services from './Services';
import TeamOfSkilled from './TeamOfSkilled';
import PopularBrands from './PopularBrands';
import Blog from './Blog';
import Faq from './Faq';
import ConnectBanner from '../../components/shared/ConnectBanner';
import ClientReview from '../../components/shared/ClientReview';

// image
import HeaderBg from '@assets/images/Header/background.webp';

const Home = () => {
  return (
    <div>
      <Hero status={'Home'} image={HeaderBg} />
      <Brands />
      <Story button={true} />
      <ProvenProcess />
      <Services />
      <TeamOfSkilled />
      <ClientReview />
      <PopularBrands />
      <Blog />
      <Faq />
      <ConnectBanner />
    </div>
  );
};

export default Home;
