import React from 'react';

// images
import HeaderBg from '../../../assets/images/ServicesPage/Sales/HeaderBg.webp';
import serviceImg from '../../../assets/images/ServicesPage/Sales/serviceImage.png';
import StepImage from '../../../assets/images/ServicesPage/Rental/steps.png';

//components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import Services from '../Services';
import Steps from '../Steps';
import SalesProducts from './SalesProducts';
import Advantages from './Advantages';
import ChooseUs from '../ChooseUs';

// images
import right from '../../../assets/images/Choose/rightImage.png';

const Sales = () => {
  const content = `Welcome to Credence Tec, where affordability meets excellence in technology solutions. At Credence Tec, we believe in more than just providing services; we strive to create a partnership that goes beyond expectations. Our commitment to innovation, coupled with a focus unaffordability, ensures that our clients not only receive cutting-edge solutions but also find exceptional value in their investments. Credence Tec welcomes you to experience a synergy of affordability and technological excellence. Elevate your business with solutions that go beyond the ordinary. Your success begins with Credence Tec. We pride ourselves on staying ahead in the ever-evolving landscape. Our commitment to innovation ensures that you receive the latest and most effective solutions for your business needs. `;

  const contents = [
    {
      title: 'Affordability Without Compromise ',
      content:
        'Enjoy cutting-edge technology without breaking the bank. Credence Tec makes advanced solutions accessible to businesses and individuals alike.',
    },
    {
      title: 'Extensive Product Selection',
      content:
        'Find the perfect match for your requirements from our diverse range of products. We bring you options that cater to different preferences, specifications, and budgets.',
    },
    {
      title: 'Customer-Centric Support',
      content:
        'Experience the difference with our customer-centric support. Our team is dedicated to ensuring your satisfaction, making every interaction with Credence Tec a positive one.',
    },
    {
      title: 'Quality Assurance',
      content:
        'While our prices are competitive, we never compromise on quality. Each product undergoes stringent checks to meet the highest standards, ensuring reliability and longevity.',
    },
  ];

  return (
    <div>
      <Hero title={'Sales '} content={'Home / Sales'} image={HeaderBg} />
      <Services
        title={'Welcome To Credence Tec'}
        content={content}
        img={serviceImg}
      />
      <ChooseUs
        content={contents}
        img={right}
        heading={'Why Choose Credence Tec'}
        subHeading={
          " Credence Tec is not just a technology provider; we're your partner in progress."
        }
      />
      <SalesProducts />
      <Advantages />
      <Steps
        buttonContent={'Contact us'}
        img={StepImage}
        heading={' How To Get Started With Credence Tec Today!'}
        subHeading={
          'Start Smart, Start Here: Your Guide to IT Equipment Solutions'
        }
        stepContent="Experience the convenience and flexibility of our services. Contact us today to discuss your requirements and elevate your projects with cutting-edge technology! "
        step3={
          'With reliable sales products from Credence Tec, you can focus on what you do best while we take care of your technology needs'
        }
      />
      <Brands />
      <ClientReview />
      <ConnectBanner />
    </div>
  );
};

export default Sales;
