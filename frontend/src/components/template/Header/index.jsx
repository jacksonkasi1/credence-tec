import React, { useState } from 'react';

// components
import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  X,
} from 'react-feather';
import Typography from '@ui/Typography';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

// images
import Search from '@assets/images/icons/Search.svg';

// icons
import icon3 from '@assets/svg/Header/Icons/Group.svg';
import icon4 from '../../../assets/svg/Header/Icons/Group1.svg';
import icon5 from '../../../assets/svg/Header/Icons/Coding.svg';
import icon6 from '../../../assets/svg/Header/Icons/Coding (1).svg';
import icon7 from '../../../assets/svg/Header/Icons/Coding (2).svg';
import icon8 from '../../../assets/svg/Header/Icons/Coding (3).svg';
import icon9 from '../../../assets/svg/Header/Icons/Coding (4).svg';
import icon10 from '../../../assets/svg/Header/Icons/Coding (5).svg';
import icon11 from '../../../assets/svg/Header/Icons/Group2.svg';

// logo
import logo from '@assets/svg/Logo/Logo.svg';
import blackLogo from '@assets/svg/Footer/Logo.svg';

// import social icons
import facebook from '../../../assets/svg/Header/social/Facebook.svg';
import instagram from '../../../assets/svg/Header/social/Instagram.svg';
import twitter from '../../../assets/svg/Header/social/Twitter.svg';
import linkedin from '../../../assets/svg/Header/social/Linkedin.svg';

const NestedMobileServices = ({ setMenuStatus }) => {
  return (
    <ul
      onClick={(e) => {
        e.stopPropagation();
        setMenuStatus(true);
      }}
      className="bg-white_ flex-col gap-y-[1px] flex px-3 ml-4 mt-3 w-full"
    >
      <NavLink to="/services/server-maintenance">
        <Typography
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon4} alt="" />
          <span>Server Maintenance</span>
        </Typography>
      </NavLink>
      <NavLink to="/services/storage-maintenance">
        <Typography
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon11} alt="" />
          <span>Storage Maintenance</span>
        </Typography>
      </NavLink>
      <NavLink to="/services/network-maintenance">
        <Typography
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon5} alt="" />
          <span>Network Maintenance</span>
        </Typography>
      </NavLink>
      <NavLink to="/services/end-user-maintenance">
        <Typography
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon6} alt="" />
          <span>End-User Maintenance</span>
        </Typography>
      </NavLink>
      <NavLink to="/services/database-maintenance">
        <Typography
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon7} alt="" />
          <span>Database Management</span>
        </Typography>
      </NavLink>
      <NavLink to="/services/facility-management">
        <Typography
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon8} alt="" />
          <span>Facility Management Services</span>
        </Typography>
      </NavLink>
      <NavLink to="/services/data-centre-management">
        <Typography
          onClick={() => navigate('')}
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon9} alt="" />
          <span>Data Centre Management</span>
        </Typography>
      </NavLink>
      <NavLink to="/services/av-maintenance">
        <Typography
          variant="P_Regular_H5"
          type="Oracle"
          className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 flex items-center gap-x-4 py-[10px]"
        >
          <img src={icon10} alt="" />
          <span>A/V Maintenance</span>
        </Typography>
      </NavLink>
    </ul>
  );
};

const MobileSubMenu = ({ setMenuStatus }) => {
  const [subMenuStatus, setSubMenuStatus] = useState(false);

  return (
    <ul
      onClick={(e) => {
        e.stopPropagation();
        setMenuStatus(true);
      }}
      className="bg-white_ flex-col w-[260px] gap-y-[1px] flex ml-3 mt-3"
    >
      <Typography
        variant="P_Regular_H7"
        type="Oracle"
        className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] py-[10px] justify-between group-scoped"
        onClick={(e) => {
          setSubMenuStatus(!subMenuStatus);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center text-base gap-x-4">
            <img src={icon3} alt="" />
            <span>Maintenance Services</span>
          </div>
          <ChevronRight
            size={25}
            className={`${subMenuStatus && 'rotate-90'}`}
          />
        </div>

        {/* nested dropdown */}
        {subMenuStatus && (
          <NestedMobileServices setMenuStatus={setSubMenuStatus} />
        )}
      </Typography>
    </ul>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [mainMenuStatus, setMainMenuStatus] = useState(false);
  const location = useLocation();
  const [search, setSearch] = useState('');

  const paths = [
    { link: '/services/server-maintenance' },
    { link: '/services/network-maintenance' },
    { link: '/services/storage-maintenance' },
    { link: '/services/database-maintenance' },
    { link: '/services/end-user-maintenance' },
    { link: '/services/data-centre-management' },
    { link: '/services/facility-management' },
    { link: '/services/av-maintenance' },
  ];

  const activePath = paths.find((p) => p.link === location.pathname);

  const NestedServices = () => {
    return (
      <div
        style={{ zIndex: 99999 }}
        className="group-scoped-hover:block hidden border-l-[1px] border-[#F2F2F2] z-50"
      >
        <ul className="bg-white_ flex-col w-[300px] gap-y-[1px] flex absolute left-[95%] top-0 border-b-[5px] border-primary-900 px-3 py-4">
          <Typography
            onClick={() => navigate('/services/server-maintenance')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon4} alt="" />
            <span>Server Maintenance</span>
          </Typography>
          <Typography
            onClick={() => navigate('/services/storage-maintenance')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon11} alt="" />
            <span>Storage Maintenance</span>
          </Typography>
          <Typography
            onClick={() => navigate('/services/network-maintenance')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon5} alt="" />
            <span>Network Maintenance</span>
          </Typography>
          
          <Typography
            onClick={() => navigate('/services/end-user-maintenance')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon6} alt="" />
            <span>End-User Maintenance</span>
          </Typography>
          <Typography
            onClick={() => navigate('/services/database-maintenance')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon7} alt="" />
            <span>Database Management</span>
          </Typography>
          <Typography
            onClick={() => navigate('/services/facility-management')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon8} alt="" />
            <span>Facility Management Services</span>
          </Typography>
          <Typography
            onClick={() => navigate('/services/data-centre-management')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon9} alt="" />
            <span>Data Centre Management</span>
          </Typography>
          <Typography
            onClick={() => navigate('/services/av-maintenance')}
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300 border-b-[1px] border-[#F2F2F2] flex items-center gap-x-4 py-[10px]"
          >
            <img src={icon10} alt="" />
            <span>A/V Maintenance</span>
          </Typography>
        </ul>
      </div>
    );
  };

  const Services = () => {
    return (
      <div className="group-hover:block hidden z-1 absolute top-[100%]">
        <ul className="bg-white_ flex-col w-[260px] gap-y-[1px] flex absolute top-[100%] border-b-[5px] border-primary-900 px-3 py-4">
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ font-Oracle !tracking-wide cursor-pointer bg-white_ transition-all duration-300  flex items-center py-[10px] justify-between group-scoped"
          >
            <div className="flex items-center gap-x-4">
              <img src={icon3} alt="" />
              <span>Maintenance Services</span>
            </div>
            <ChevronRight size={25} />

            {/* nested dropdown */}
            <NestedServices />
          </Typography>
        </ul>
      </div>
    );
  };

  const MobileView = () => {
    const [subMenuStatus, setSubMenuStatus] = useState(false);
    return (
      <div
        style={{ zIndex: 9999 }}
        className="fixed top-0 left-0 block w-full h-full pb-5 overflow-y-auto bg-white_ lg:hidden"
      >
        <X
          style={{ zIndex: 99999 }}
          size={30}
          className="absolute text-primary-900 top-3 right-5"
          onClick={() => setMainMenuStatus(false)}
        />
        <img className="mt-2 ml-7 w-14" src={blackLogo} alt="" />
        <div className="flex flex-col ml-10 list-none gap-y-5 mt-7">
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer"
          >
            <Link to="/" className="text-[21px] font-semibold">
              Home
            </Link>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer"
          >
            <Link to="/about-us" className="text-[21px] font-semibold">
              About us
            </Link>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer relative group overflow-visible text-[21px] font-semibold"
            onClick={() => setSubMenuStatus(!subMenuStatus)}
          >
            <div className="flex items-center ">
              Services{' '}
              <ChevronDown
                className={`text-black_ ml-2 ${
                  subMenuStatus && 'rotate-180'
                } transition-all duration-300`}
                size={20}
              />
            </div>
            {/* dropdown */}
            {subMenuStatus && (
              <MobileSubMenu setMenuStatus={setSubMenuStatus} />
            )}
          </Typography>

          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer"
          >
            <Link to="/sales" className="text-[21px] font-semibold">
              Sales
            </Link>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer"
          >
            <Link to="/rental" className="text-[21px] font-semibold">
              Rentals
            </Link>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer"
          >
            <Link to="/career" className="text-[21px] font-semibold">
              Careers
            </Link>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer"
          >
            <Link to="#" className="text-[21px] font-semibold">
              Downloads
            </Link>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-black_ !tracking-wide cursor-pointer"
          >
            <Link to="/contact" className="text-[21px] font-semibold">
              Contact us
            </Link>
          </Typography>
        </div>

        {/* <div className="ml-10 mt-7">
          <div className="flex items-center gap-x-4">
            <Mail size={25} className="text-primary-900" />
            <p className="l font-Oracle text-[18px] font-semibold">Mail</p>
          </div>
          <p className="text-[16px] ml-5">info@credencetec.in</p>

          <div className="flex items-center mt-3 gap-x-4">
            <MapPin size={25} className="text-primary-900" />
            <p className="l font-Oracle text-[18px] font-semibold">Location</p>
          </div>
          <p className="text-[16px] ml-5 pr-3">
            14B, Dr Thirumurthy Nagar, 1st Street, Nungambakkam,Chennai – 600
            034
          </p>

          <div className="flex items-center mt-3 gap-x-4">
            <IoShareSocialOutline size={25} className="text-primary-900" />
            <p className="l font-Oracle text-[18px] font-semibold">Social</p>
          </div>
          <div className="flex items-center mt-2 ml-5 gap-x-3">
            <AiFillFacebook size={25} className="text-primary-900" />
            <AiFillInstagram size={25} className="text-primary-900" />
            <AiFillLinkedin size={25} className="text-primary-900" />
          </div>
        </div> */}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="justify-between items-center !border-b-[1px] !border-light_gray_ pb-2 pt-6 lg:flex hidden">
        <div className="flex items-center">
          <Mail size={15} className="text-white_" />
          <Typography variant="P_Regular_H8" className="mt-1 ml-1 text-white_">
            info@credencetec.in
          </Typography>
        </div>
        <div className="flex items-center">
          <MapPin size={20} className="text-white_" />
          <Typography
            variant="P_Regular_H8"
            type="oracle"
            className="mt-1 ml-1 text-white_"
          >
            14B, Dr Thirumurthy Nagar, 1st Street, Nungambakkam, Chennai – 600
            034
          </Typography>
        </div>
        <div className="relative flex items-center gap-x-6">
          <img src={instagram} alt="icon" />
          <img src={twitter} alt="icon" />
          <img src={facebook} alt="icon" />
          <img src={linkedin} alt="icon" />
        </div>
        {/* <div className="relative flex items-center gap-x-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="bg-transparent w-[220px] text-white outline-none border text-[13px] font-oracle rounded pl-8 py-[1px] h-[30px] placeholder:text-white"
          />
          <img src={Search} alt="icon" className="absolute left-2" />
          {search && (
            <RxCross2
              onClick={() => setSearch('')}
              className="absolute text-white cursor-pointer right-2"
            />
          )}
          {search && <MenuItems search={search} />}
        </div> */}
      </div>
      <div className="pt-3 w-[90%] hidden lg:flex   items-center">
        <Link to="/">
          <img src={logo} className="h-14 w-18" alt="" />
        </Link>
        <div className="flex items-center justify-center w-full list-none gap-x-7">
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-white_ !tracking-wide cursor-pointer"
          >
            <NavLink
              to="/"
              className={({ isActive }) => isActive && 'font-semibold'}
            >
              Home
            </NavLink>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-white_ !tracking-wide cursor-pointer"
          >
            <NavLink
              to="/about-us"
              className={({ isActive }) => isActive && 'font-semibold'}
            >
              About us
            </NavLink>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className={`text-white_ !tracking-wide cursor-pointer relative group overflow-visible flex items-center ${
              activePath && 'font-semibold'
            } `}
          >
            Services{' '}
            <ChevronDown
              className="ml-2 transition-all duration-300 text-white_ group-hover:rotate-180"
              size={20}
            />
            {/* dropdown */}
            <Services />
          </Typography>

          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-white_ !tracking-wide cursor-pointer"
          >
            <NavLink
              to="/sales"
              className={({ isActive }) => isActive && 'font-semibold'}
            >
              Sales
            </NavLink>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-white_ !tracking-wide cursor-pointer"
          >
            <NavLink
              to="/rental"
              className={({ isActive }) => isActive && 'font-semibold'}
            >
              Rentals
            </NavLink>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-white_ !tracking-wide cursor-pointer"
          >
            <NavLink
              to="/career"
              className={({ isActive }) => isActive && 'font-semibold'}
            >
              Careers
            </NavLink>
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-white_ !tracking-wide cursor-pointer"
          >
            {/* <NavLink
              to="/downloads"
              className={({ isActive }) => isActive && 'font-semibold'}
            >
            </NavLink> */}
              Downloads
          </Typography>
          <Typography
            variant="P_Regular_H7"
            type="Oracle"
            className="text-white_ !tracking-wide cursor-pointer"
          >
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && 'font-semibold'}
            >
              Contact us
            </NavLink>
          </Typography>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex items-center justify-between w-full pt-5 lg:hidden">
        <img src={logo} className="h-14 w-18" alt="" />

        <Menu
          onClick={() => setMainMenuStatus(true)}
          size={30}
          className="cursor-pointer text-white_"
        />
      </div>

      {/* Mobile */}
      {mainMenuStatus && <MobileView />}
    </div>
  );
};

export default Header;
