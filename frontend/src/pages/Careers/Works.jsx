// components
import { Select, Option } from '@material-tailwind/react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

// import icons
import chair from '../../assets/svg/Icons/Chair.svg';
import bag from '../../assets/svg/Icons/Vector.svg';
import pin from '../../assets/svg/Icons/Location.svg';

const Works = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white_ py-[100px]">
      <div className="w-[80%] xl:max-w-7xl mx-auto">
        {/* <div className="flex items-center justify-between select gap-5 sm:flex-row flex-col">
          <Select
            color="blue"
            label={
              <span className="text-black_ font-oracle">
                {' '}
                Select Job Category
              </span>
            }
            className="outline-none  font-oracle"
          >
            <Option className="text-black_ font-oracle">
              All Job Category
            </Option>
            <Option className="text-black_ font-oracle">
              Hardware Engineer
            </Option>
            <Option className="text-black_ font-oracle">
              Business Development Executive
            </Option>
            <Option className="text-black_ font-oracle">Sales Executive</Option>
          </Select>

          <Select
            color="blue"
            className="outline-none font-oracle"
            label={
              <span className="text-black_ font-oracle">Select Job Type</span>
            }
          >
            <Option className="font-oracle text-black_">All Job Type</Option>
            <Option className="font-oracle text-black_">Full-time</Option>
            <Option className="font-oracle text-black_">Part-time</Option>
            <Option className="font-oracle text-black_">Contract</Option>
            <Option className="font-oracle text-black_">Internship</Option>
            <Option className="font-oracle text-black_">Freelance</Option>
          </Select>

          <Select
            color="blue"
            className="outline-none font-oracle"
            label={
              <span className="text-black_ font-oracle">
                Select Job Location
              </span>
            }
          >
            <Option className="text-black_ font-oracle">
              All Job Location
            </Option>
            <Option className="text-black_ font-oracle">Chennai</Option>
            <Option className="text-black_ font-oracle">Mumbai</Option>
            <Option className="text-black_ font-oracle">Delhi</Option>
            <Option className="text-black_ font-oracle">Gujarat</Option>
            <Option className="text-black_ font-oracle">Haryana</Option>
            <Option className="text-black_ font-oracle">Kolkata</Option>
          </Select>
        </div> */}

        <div className=" w-full mx-auto">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            onClick={() => navigate(`/career/job-details/Hardware-Engineer`)}
            className="w-full bg-[#F2F8FD] cursor-pointer px-[20px] py-[15px] rounded-[5px] "
          >
            <div className="flex gap-2 w-full justify-between md:items-center">
              <h1 className="font-oracle text-[20px] md:text-[23px] font-semibold text-black_">
                Hardware Engineer
              </h1>
              <a
                href=""
                className="text-primary-900  font-oracle flex items-center"
              >
                <span className="hidden md:block mt-1">More Details </span>
                <BsBoxArrowUpRight className="text-primary-900 text-2xl md:text-base  ml-2" />
              </a>
            </div>
            <p className="mt-2  font-oracle text-black_">
              Server / Storages / Networking - Engineering Department
            </p>

            <div className="flex flex-wrap  gap-4  mt-3">
              <div className="flex items-center gap-2">
                <img src={chair} alt="icon" />
                <p className=" pt-[4px] font-oracle text-secondary_">10</p>
              </div>
              <div className="flex items-center  gap-2">
                <img src={bag} alt="icon" />
                <p className="pt-[6px] font-oracle text-secondary_">
                  2-5 years
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={pin} alt="icon" />
                <p className=" pt-[6px] font-oracle text-secondary_">
                  Chennai, Mumbai, Delhi, Gujarat, Haryana and Kolkata
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            onClick={() =>
              navigate(`/career/job-details/Business-Development-Executive`)
            }
            className="w-full bg-[#F2F8FD] cursor-pointer px-[20px] py-[15px] rounded-[5px] mt-10 "
          >
            <div className="flex gap-2 w-full justify-between  items-start md:items-center">
              <h1 className="font-oracle text-[20px] md:text-[23px] font-semibold text-black_">
                Business Development Executive
              </h1>
              <a
                href=""
                className="text-primary-900  font-oracle flex items-center"
              >
                <span className="hidden md:block mt-1">More Details </span>
                <BsBoxArrowUpRight className="text-primary-900 text-2xl md:text-base  ml-2" />
              </a>
            </div>
            <p className="mt-2  font-oracle text-black_">
              Business Development Executive - Sales Department
            </p>

            <div className="flex items-center gap-4 flex-wrap mt-3">
              <div className="flex items-center gap-2">
                <img src={chair} alt="icon" />
                <p className=" pt-[4px] font-oracle text-secondary_">4</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={bag} alt="icon" />
                <p className=" pt-[6px] font-oracle text-secondary_">
                  1-3 years
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={pin} alt="icon" />
                <p className=" pt-[6px] font-oracle text-secondary_">Chennai</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            onClick={() => navigate(`/career/job-details/Sales-Executive`)}
            className="w-full bg-[#F2F8FD] cursor-pointer px-[20px] py-[15px] rounded-[5px] mt-10"
          >
            <div className="flex gap-2 w-full justify-between items-center">
              <h1 className="font-oracle text-[20px] md:text-[23px] font-semibold text-black_">
                Sales Executive
              </h1>
              <a
                href=""
                className="text-primary-900  font-oracle flex items-center"
              >
                <span className="hidden md:block mt-1">More Details </span>
                <BsBoxArrowUpRight className="text-primary-900  text-2xl md:text-base  ml-2" />
              </a>
            </div>
            <p className="mt-2  font-oracle text-black_">
            Sales  Department – Women Preferred
            </p>

            <div className="flex items-center gap-4 flex-wrap mt-3">
              <div className="flex items-center gap-2">
                <img src={chair} alt="icon" />
                <p className=" pt-[4px] font-oracle text-secondary_">10</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={bag} alt="icon" />
                <p className=" pt-[6px] font-oracle text-secondary_">
                  1-3 years
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={pin} alt="icon" />
                <p className=" pt-[6px] font-oracle text-secondary_">Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
