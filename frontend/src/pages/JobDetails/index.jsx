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

const JobDetails = () => {
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
        title={'Hardware Engineer'}
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
            {'>'} <span className="font-semibold">Hardware Engineer</span>{' '}
          </p>
          <div className="px-6">
            <h2 className="text-[30px] font-Georgia font-bold tracking-wide">
              Hardware Engineer
            </h2>
            <p className="font-oracle ">
              Server / Storages / Networking - Engineering Department
            </p>
            <div className="flex items-center gap-x-4 flex-wrap mt-3">
              <div className="flex items-center gap-x-2 ">
                <img src={chair} alt="icon" />
                <p className="mt-1 font-oracle text-secondary_">
                  Positions: <span className="font-bold text-black_">10</span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src={dip} alt="icon" />
                <p className=" font-oracle  text-secondary_">
                  Qualification:{' '}
                  <span className="font-bold text-black_">
                    Graduate/Diploma
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src={bag} alt="icon" />
                <p className="mt-[6px] font-oracle">
                  Work Experience:{' '}
                  <span className="font-bold mt-1 text-black_">2-5 years</span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 ">
                <img src={pin} alt="icon" />
                <p className=" font-oracle mt-1 text-secondary_">
                  Location:{' '}
                  <span className="font-bold text-black_">
                    Chennai, Mumbai, Delhi, Gujarat, Haryana and Kolkata
                  </span>
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
              <ul className=" list-disc mt-5 font-oracle">
                <li className="ml-6">
                  Hands-on on experience for Installation/Support of Servers,
                  Storages & Networking (DELL, HP, IBM, SUN etc.)
                </li>
                <li className="ml-6">
                  Providing Onsite & Remote Technical Support to Users
                </li>
                <li className="ml-6">
                  Perform daily system monitoring, verifying the integrity and
                  availability of all hardware
                </li>
                <li className="ml-6">
                  Troubleshoot, test and analyse complex issues
                </li>
                <li className="ml-6">
                  Ability to work efficiently as a team member and deliver
                  results
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
        <ApplyModal isOpen={isOpen} onClose={closeModal} />
      </div>
      <ConnectBanner />
    </div>
  );
};

export default JobDetails;
