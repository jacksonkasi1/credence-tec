import React from 'react';

// images
import HeaderBg from '../../assets/images/Careers/HeaderBg.webp';

// components
import Hero from '../../components/shared/Hero';
import Works from './Works';
import ConnectBanner from '../../components/shared/ConnectBanner';

const Careers = () => {
  return (
    <div>
      <Hero title={'Careers'} content={'Home / Careers'} image={HeaderBg} />
      <Works />
      <ConnectBanner />
    </div>
  );
};

export default Careers;
