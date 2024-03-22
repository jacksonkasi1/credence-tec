import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const BusinessDetails = () => {
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
        title={'Business Development Executive'}
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
            {'>'}{' '}
            <span className="font-semibold">
              Business Development Executive
            </span>{' '}
          </p>
          <div className="px-6">
            <h2 className="text-[30px] font-Georgia font-bold tracking-wide">
              Business Development Executive
            </h2>
            <p className="font-oracle mt-2">
              Business Development Executive - Sales Department
            </p>
            <div className="flex items-center gap-x-4 flex-wrap mt-3">
              <div className="flex items-center gap-x-2 ">
                <img src={chair} alt="icon" />
                <p className=" font-oracle mt-1 text-secondary_">
                  Positions: <span className="font-bold text-black_">4</span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 mt-1">
                <img src={dip} alt="icon" />
                <p className=" font-oracle text-secondary_">
                  Qualification:{' '}
                  <span className="font-bold text-black_">
                    Bachelor’s degree in any field
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src={bag} alt="icon" />
                <p className="mt-[6px] font-oracle text-secondary_">
                  Work Experience:{' '}
                  <span className="font-bold text-black_">1-3 years</span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src={pin} alt="icon" />
                <p className="mt-1 font-oracle text-secondary_">
                  Location:{' '}
                  <span className="font-bold text-black_">Chennai</span>
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
              <ul className="  list-disc mt-5 font-oracle">
                <li className="ml-6">
                  Acquiring maintenance services contracts (AMC of Servers,
                  storage, workstation and networking devices)
                </li>
                <li className="ml-6">
                  Sales of server, storage, workstations and their parts (HP,
                  IBM, DELL, SUN, EMC etc)
                </li>
                <li className="ml-6">
                  Sales of networking devices (Cisco, Juniper etc)
                </li>
                <li className="ml-6">
                  Responsible for meeting the sales targets of the organization
                  through effective planning and budgeting.
                </li>
                <li className="ml-6">
                  Sales of Digital marketing and development solutions like
                  website development, software development, social media
                  marketing and others.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl pt-4 font-semibold font-oracle">
              Responsibilities
            </h2>

            <div className="mt-4">
              <ul className="  list-disc mt-5 font-oracle">
                <li className="ml-6">Bachelor’s degree in any field.</li>
                <li className="ml-6">
                  Require knowledge in computer hardware parts
                </li>
                <li className="ml-6">Excellent in English Communication</li>
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
          post="Business Development Executive"
        />
      </div>
      <ConnectBanner />
    </div>
  );
};

export default BusinessDetails;
