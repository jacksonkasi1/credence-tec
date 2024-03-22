import React from 'react';

// images
import bg from '../../assets/images/Footer/bg.png';

// components
import Button from '@ui/Button';
import { Link } from 'react-router-dom';

const ConnectBanner = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-primary-900 sm:py-16 lg:py-24 xl:py-32">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full md:object-left md:origin-top-left"
            src={bg}
            alt=""
          />
        </div>

        <div className="absolute inset-0 md:block hidden bg-gradient-to-r from-primary-900 via-primary-900/30 to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative">
          <div className=" md:w-1/2 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-oracle">
              Empowering IT Excellence, Every Device, EveryTime!
            </h2>
            <p className="mt-4 text-base max-w-[400px] text-gray-200 font-oracle">
              At Credence Tec, we redefine IT maintenance with precision and
              dedication
            </p>

            <Link to="/contact">
              <Button className="!bg-white_ !text-black_ !border-white_ font-semibold font-oracle text-[16px] mt-6">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectBanner;
