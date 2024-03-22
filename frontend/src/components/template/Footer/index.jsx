// images
import logo from '../../../assets/svg/Footer/Logo.svg';

// icons
import facebook from '../../../assets/svg/Icons/2.svg';
import google from '../../../assets/svg/Icons/7.svg';
import indeed from '../../../assets/svg/Icons/5.svg';
import instagram from '../../../assets/svg/Icons/Instagram.svg';
import linkedin from '../../../assets/svg/Icons/Twitter.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="py-8 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <img className="w-auto h-16" src={logo} alt="" />
            <p className="font-oracle mt-2 font-semibold text-[#2E2E2E]">
              Head Office
            </p>
            <p className="mt-4 text-base leading-relaxed text-black font-oracle">
              Chennai Softech House, <br /> #14B, Dr Thirumurthy Nagar 1st
              Street, <br />
              Nungambakkam, Chennai – 600 034.
            </p>

            <p className="flex flex-col mt-4 text-base leading-relaxed text-black font-oracle">
              <span>Tel. No: +91 44 3566 0936 </span>
              <span>Email: info@credencetec.in</span>
            </p>

            <ul className="items-center hidden space-x-3  lg:flex mt-9">
              <li>
                <img src={instagram} alt="icon" />
              </li>

              <li>
                <img src={linkedin} alt="icon" />
              </li>

              <li>
                <img src={google} alt="icon" />
              </li>

              <li>
                <img src={facebook} alt="icon" />
              </li>

              <li>
                <img src={indeed} alt="icon" />
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-widest text-black uppercase font-oracle">
              Malaysia
            </p>
            <p className="mt-6 text-base leading-relaxed text-black font-oracle">
              #5, Jalan 4/33, Petaling Jaya, <br /> 46050, Selangor, Malaysia
            </p>
            <p className="mt-6 text-sm font-semibold tracking-widest text-black uppercase font-oracle">
              China
            </p>
            <p className="mt-6 text-base leading-relaxed text-black font-oracle">
              Credence Tec Block, YIWU Shenzhen <br /> International Integrated
              Logistics <br /> Port A1 – 1 – 3,  China – 518000
            </p>
            <ul className="flex items-center space-x-3 lg:hidden mt-9">
              <li>
                <img src={instagram} alt="icon" />
              </li>

              <li>
                <img src={linkedin} alt="icon" />
              </li>

              <li>
                <img src={google} alt="icon" />
              </li>

              <li>
                <img src={facebook} alt="icon" />
              </li>

              <li>
                <img src={indeed} alt="icon" />
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-gray-400 font-oracle">
              Links
            </p>

            <ul className="mt-6 space-y-4 font-oracle">
              <li>
                <Link
                  to="/"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  Home{' '}
                </Link>
              </li>

              <li>
                <Link
                  to="/about-us"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  About us{' '}
                </Link>
              </li>

              <li>
                <Link
                  to="/career"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  Careers{' '}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  Downloads{' '}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  Contact us{' '}
                </Link>
              </li>

              
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-gray-400 font-oracle">
              Services
            </p>

            <ul className="mt-6 space-y-4 font-oracle">
              <li>
                <Link
                  to="/services/server-maintenance"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  Maintenance Services{' '}
                </Link>
              </li>

              <li>
                <Link
                  to="sales"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  Sales{' '}
                </Link>
              </li>

              <li>
                <Link
                  to="rental"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {' '}
                  Rentals{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-8 border-gray-200" />

        <p className="text-sm text-center text-gray-600 font-oracle">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by Credence Tec
        </p>
      </div>
    </section>
  );
};
export default Footer;
