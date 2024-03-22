import React from 'react';

// images
import manImg from '../../assets/images/AboutUs/services/man.webp';

// components
import { motion as m } from 'framer-motion';
import { animationVariants } from '../../utils/animations';

const Founders = () => {
  return (
    <section className="py-12 bg-[#F2F8FD] sm:py-16 lg:py-20 xl:py-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl font-Georgia">
            Meet the Founders
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 font-oracle">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <m.div
            initial="initial"
            whileInView="visible"
            variants={animationVariants.l_t_r}
            custom={0.01}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center"
          >
            <img
              className="object-cover w-48 rounded-2xl "
              src={manImg}
              alt=""
            />

            <div className="mt-8 sm:mt-0 sm:ml-10">
              <p className="text-4xl font-semibold tracking-tight text-gray-900 font-oracle">
                Abdul Kareem
              </p>
              <p className="mt-3 text-xs font-semibold tracking-widest text-gray-900 uppercase">
                Co-Founder
              </p>
              <p className="mt-8 text-base font-normal text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sed ut proin eu. Congue quis id imperdiet ipsum metus,
                semper. Aliquam sapien ornare nec posuere risus.
              </p>
              <p className="mt-4 text-base font-normal text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sed ut proin eu. Congue quis id imperdiet
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline"
                >
                  Follow on Social media
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </m.div>

          <m.div
            initial="initial"
            whileInView="visible"
            variants={animationVariants.r_t_l}
            custom={0.01}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center"
          >
            <img
              className="object-cover w-48 rounded-2xl"
              src={manImg}
              alt=""
            />

            <div className="mt-8 sm:mt-0 sm:ml-10">
              <p className="text-4xl font-semibold tracking-tight text-gray-900">
                Abdul Raseed
              </p>
              <p className="mt-3 text-xs font-semibold tracking-widest text-gray-900 uppercase">
                Co-Founder
              </p>
              <p className="mt-8 text-base font-normal text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sed ut proin eu. Congue quis id imperdiet ipsum metus,
                semper. Aliquam sapien ornare nec posuere risus.
              </p>
              <p className="mt-4 text-base font-normal text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis sed ut proin eu. Congue quis id imperdiet
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-sm font-semibold text-blue-600 transition-all duration-200 group hover:text-blue-800 hover:underline"
                >
                  Follow on Social media
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
