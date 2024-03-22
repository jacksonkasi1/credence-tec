import React, { useState } from 'react';

// images
import HeaderBg from '../../assets/images/Careers/HeaderBg.webp';

// components
import Hero from '../../components/shared/Hero';
import Button from '../../components/ui/Button';

// import icons
import chair from '../../assets/svg/Icons/Chair.svg';
import pin from '../../assets/svg/Icons/Location.svg';
import bag from '../../assets/svg/Icons/Vector.svg';
import dip from '../../assets/svg/Icons/Diploma.svg';
import ConnectBanner from '../../components/shared/ConnectBanner';
import ApplyModal from './ApplyModal';
import { Link } from 'react-router-dom';

const SalesDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="">
      <Hero
        title={'Sales Executive'}
        content={'Home / Career'}
        image={HeaderBg}
      />
      <div className="py-[100px] w-[95%] xl:max-w-7xl mx-auto">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"
          className="sm:w-[80%] mx-auto"
        >
          <p className="font-oracle mb-6">
            <Link to="/">Home</Link> {'>'} <Link to="/career">Careers</Link>{' '}
            {'>'} <span className="font-semibold">Sales Executive</span>{' '}
          </p>
          <div className="px-6">
            <h2 className="text-[30px] font-Georgia font-bold tracking-wide">
              Sales Executive
            </h2>
            <p className="font-oracle ">Sales  Department – Women Preferred</p>
            <div className="flex items-center gap-x-4 flex-wrap mt-3">
              <div className="flex items-center gap-x-2 ">
                <div>
                  <img src={chair} alt="icon" />
                </div>
                <p className="mt-1 font-oracle text-secondary_">
                  Positions: <span className="font-bold">4</span>
                </p>
              </div>
              <div className="flex mt-1 items-center gap-x-2 ">
                <img src={dip} alt="icon" />
                <p className=" font-oracle text-secondary_">
                  Qualification: <span className="font-bold">Graduate</span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <div>
                  <img src={bag} alt="icon" />
                </div>
                <p className=" font-oracle mt-[6px]  text-secondary_">
                  Work Experience: <span className="font-bold">1-3 years</span>
                </p>
              </div>
              <div className="flex items-center gap-x-2  ">
                <img src={pin} alt="icon" />
                <p className="mt-[6px] font-oracle text-secondary_">
                  Location: <span className="font-bold">Chennai</span>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              boxShadow: '0px 8px 10px -6px #0000001A',
              boxShadow: '0px 20px 25px -5px #0000001A',
            }}
            className="p-[30px] mt-[60px] rounded-[5px]"
          >
            <h2 className="text-2xl font-semibold font-oracle">
              Job Description
            </h2>

            <div className="mt-4">
              <ul className=" pt-4 list-disc mt-5 font-oracle">
                <li className="ml-6">
                  Speak to customers, either face to face or over the phone
                </li>
                <li className="ml-6">
                  Gain an understanding of customers’ diverse and specific
                  business needs and apply product knowledge to meet them
                </li>
                <li className="ml-6">
                  Do cold calling, generate new business leads and arrange
                  meetings
                </li>
                <li className="ml-6">
                  Identify and develop new business through networking and
                  follow-up courtesy calls
                </li>
                <li className="ml-6">
                  Meet sales targets set by managers and contribute to team
                  targets network with existing customers in order to maintain
                  links and promote additional products and upgrades
                </li>
                <li className="ml-6">
                  Respond to tender documents, proposals, reports and supporting
                  literature
                </li>
                <li className="ml-6">
                  Contribute to team or progress meetings to update and inform
                  colleagues. Present, promote and sell products/services using
                  solid arguments to existing and prospective customers
                </li>
                <li className="ml-6">
                  Perform cost-benefit and needs analysis of existing/potential
                  customers to meet their needs
                </li>
                <li className="ml-6">
                  Establish, develop and maintain positive business and customer
                  relationships
                </li>
                <li className="ml-6">
                  Coordinate sales effort with team members and other
                  departments
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <Button onClick={openModal} className={'mt-8'}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
        <ApplyModal
          isOpen={isOpen}
          onClose={closeModal}
          post="Sales Executive"
        />
      </div>
      <ConnectBanner />
    </div>
  );
};

export default SalesDetails;
