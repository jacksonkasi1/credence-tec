import React from 'react';

// images
import HeaderBg from '../../assets/images/AboutUs/HeaderBg.webp';

// components
import Hero from '../../components/shared/Hero';
import Story from '../../components/shared/Story';
import Typography from '@ui/Typography';
import ProvenProcess from '@shared/ProvenProcess';
import AboutServices from './AboutServices';
import PopularBrands from '../Home/PopularBrands';
import HeadTitle from '../../components/ui/head/HeadTitle';
import ConnectBanner from '../../components/shared/ConnectBanner';

const AboutUs = () => {
  return (
    <div>
      {/* Seo with React Helmet */}
      
      <HeadTitle pageTitle={"About Us"} />
      <Hero content={'Home / About us'} title={'About us'} image={HeaderBg} />
      <AboutServices />
      <Story>
        <Typography variant="P_Regular_H6" className="mt-5">
          Welcome to Credence Tec, a dynamic extension of Chennai Softech,
          established in 2022 to redefine IT maintenance services. Headquartered
          in Chennai, our footprint extends globally, reaching China, Malaysia,
          and Gulf Countries. With an expansive network, we cater to a diverse
          clientele, boasting over 300+ clients across India and in worldwide
        </Typography>
        <Typography variant="P_Regular_H6" className="mt-3">
          Our dedicated team of 50+ highly skilled engineers forms the backbone
          of our operations. They are strategically positioned to serve every
          nook and corner of India, ensuring that businesses, large and small,
          experience the benefits of our Annual Maintenance Contract (AMC)
          services. As we continue to grow, our commitment to "Seamless IT
          Performance, Year-round Assurance" remains unwavering, making us your
          trusted partner in sustaining IT excellence.
        </Typography>
      </Story>
      <ProvenProcess />
      <PopularBrands />
      <ConnectBanner />
    </div>
  );
};

export default AboutUs;
