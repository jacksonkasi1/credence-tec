import React from 'react';

// components
import Button from '@ui/Button';

import { Link } from 'react-router-dom';

const ServerStory = ({ img, heading, subHeading, content, title }) => {
  return (
    <section className="py-12 bg-[#F5FAFE] sm:py-16 lg:py-20 xl:py-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto text-center mb-10 md:mb-20">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl font-Georgia">
            {heading}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600 font-oracle">
            {subHeading}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24 gap-y-12">
          <div className="">
            <img className="w-full rounded-lg" src={img} alt="" />
          </div>

          <div className="xl:pr-8">
            <div className="max-w-lg lg:max-w-none">
              <h2 className="text-2xl md:text-3xl tracking-tight text-gray-900 font-semibold font-oracle">
                {title}
              </h2>

              <div className="mt-4 lg:mt-6">
                <p className="text-base font-normal leading-7 text-gray-900 font-oracle">
                  {content}
                </p>
              </div>

              <div className="mt-6">
                <Link to="/contact">
                  <Button>Contact us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStory;
