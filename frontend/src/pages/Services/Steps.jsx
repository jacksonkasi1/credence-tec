// import core package
import { Link } from 'react-router-dom';

// components
import Button from '../../components/ui/Button';

const Steps = ({ buttonContent, img, heading, subHeading, stepContent, step3 }) => {
  return (
    <section className="py-10 bg-white_ sm:py-16 lg:py-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className=" mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl font-Georgia tracking-wide">
            {heading}
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-oracle">
            {subHeading}
          </p>
        </div>
        <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10 mt-10 lg:mt-16">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            className="relative md:order-3 w-full"
          >
            <div className="overflow-hidden w-full h-full rounded-[10px]">
              <img
                className="object-contain w-full h-full !rounded-[10px]"
                src={img}
                alt=""
              />
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            className="md:order-1 font-oracle"
          >
            <ul className="mx-auto mt-16 space-y-10">
              <li className="relative flex ">
                <div
                  className="- absolute mt-0.5 top-[43px] left-8 w-px border-l-2 border-primary-900 border-dashed  h-full"
                  aria-hidden="true"
                ></div>

                <div className="ml-[13px] relative flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary-900 rounded-full shadow font-oracle text-[18px] text-white">
                  <span className="mt-1">1</span>
                </div>
                <div className="ml-6">
                  <h2 className="font-semibold text-black_ mt-1">
                    Request a Quote
                  </h2>
                  <p className="text-black_">
                    Get a quick, no-obligation quote tailored to your specific
                    needs. Our transparent pricing ensures you know exactly what
                    to expect.
                  </p>
                </div>
              </li>
              <li className="relative flex ">
                <div
                  className="- absolute mt-0.5 top-[43px] left-8 w-px border-l-2 border-primary-900 border-dashed  h-full"
                  aria-hidden="true"
                ></div>

                <div className="ml-[13px] relative flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary-900 rounded-full shadow font-oracle text-[18px] text-white">
                  <span className="mt-1">2</span>
                </div>
                <div className="ml-6">
                  <h2 className="font-semibold text-black_ mt-1">
                    Place Your Order
                  </h2>
                  <p className="text-black_">
                    Once you're satisfied with the quote, placing an order is
                    simple. Our team will then handle the logistics and ensure a
                    seamless delivery process.
                  </p>
                </div>
              </li>
              <li className="relative flex ">
                <div
                  className="- absolute mt-0.5 top-[43px] left-8 w-px   h-full"
                  aria-hidden="true"
                ></div>

                <div className="ml-[13px] relative flex items-center justify-center flex-shrink-0 w-10 h-10 bg-primary-900 rounded-full shadow font-oracle text-[18px] text-white">
                  <span className="mt-1">3</span>
                </div>
                <div className="ml-6">
                  <h2 className="font-semibold text-black_ mt-1">
                    Focus on Your Project
                  </h2>
                  <p className="text-black_">
                    {step3}
                  </p>
                </div>
              </li>
            </ul>

            <p className="font-semibold mt-12">{stepContent}</p>

            <Link to="/contact">
              <Button className={'mt-10'}>{buttonContent}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
