import React from 'react';

// images
import HeaderBg from '../../../assets/images/ServicesPage/Rental/HeaderBg.webp';
import serviceImg from '../../../assets/images/ServicesPage/Rental/ServiceImg.png';
// import SaleService from '../../../assets/images/ServicesPage/Rental/saleServices.webp';
import StepImage from '../../../assets/images/ServicesPage/Rental/steps.png';

//components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import Services from '../Services';
import Steps from '../Steps';
import RentalProducts from './RentalProducts';
import ChooseUs from '../ChooseUs';

// images
import right from '../../../assets/images/Choose/sideImage.png';

const Rental = () => {
  const content = `Explore Credence Tec's comprehensive Rental Services, offering a diverse range of IT equipment for your business needs. Whether you require Servers, Storages, Network Switches, Rack Servers, Laptops, Desktops, or other IT essentials, our rental solutions are tailored to provide flexibility and cost-effectiveness. We prioritize delivering cutting-edge, well-maintained equipment to meet your temporary or project-based requirements. Credence Tec ensures seamless integration of top-notch technology, allowing you to scale your operations without the burden of ownership. With a commitment to reliability and efficient support, partner with us for Rental Services that empower your business with the latest IT infrastructure, precisely when you need it. Trust Credence Tec to be your trusted source for high-quality, on-demand IT equipment rentals.`;

  const contents = [
    {
      title: 'Cutting-Edge Technology',
      content:
        'Stay ahead of the curve with our extensive fleet of the latest Products. Our devices are equipped with the latest parts to ensure optimal performance',
    },
    {
      title: 'Flexible Rental Durations',
      content:
        'Our flexible rental durations cater to short-term and long-term requirements, providing you with the freedom to choose what suits your project best',
    },
    {
      title: 'Customized Solutions',
      content:
        'We understand that each project is unique. Our team works closely with you to tailor our services to your specific needs. From pre-installed software to custom configurations.',
    },
    {
      title: 'Prompt Delivery and Setup',
      content:
        'Time is of the essence, and we value yours. Our efficient delivery team ensures your Products are delivered promptly to your location. Our technicians can also assist with setup, ensuring a hassle-free experience for you.',
    },
    {
      title: 'Tech Support and Maintenance',
      content:
        'Enjoy peace of mind with our 24/7 technical support. We also conduct regular maintenance to keep our products in optimal condition',
    },
    {
      title: 'Cost-Effective Solutions',
      content:
        'Save on upfront costs and maintenance expenses. Our rental solutions offer a cost-effective alternative to purchasing products, allowing you to allocate your budget more efficiently.',
    },
  ];

  return (
    <div>
      <Hero title={'Rentals'} content={'Home / Rentals'} image={HeaderBg} />
      <Services
        title={'Why Rental Services'}
        content={content}
        img={serviceImg}
      />
      <ChooseUs
        heading={'Why Choose Our Rental'}
        subHeading={
          'Renting the Future: Elevate Experiences with Our Cutting-Edge Rentals'
        }
        img={right}
        content={contents}
      />
      <RentalProducts />

      <Steps
        buttonContent={'Contact us'}
        img={StepImage}
        heading={'How To Get Started'}
        subHeading={
          'Find Your Perfect Fit: Explore Our Wide Range of Rental Products'
        }
        stepContent="Experience the convenience and flexibility of our Rental Desktop, Workstation, Networking Products, Server and Storage services. Contact us todayto discuss your requirements and elevate your projects with cutting-edge technology! "
        step3={"With reliable rental products from Credence Tec, you can focus on what you do best while we take care of your technology needs"}
      />
      <Brands />
      <ClientReview />
      <ConnectBanner />
    </div>
  );
};

export default Rental;
