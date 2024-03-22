// import icon
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const ChooseUs = ({ content, img, heading, subHeading }) => {
  return (
    <div className="w-[95%] xl:max-w-7xl mx-auto flex flex-col items-center py-[90px]">
      <div className=" mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl font-Georgia tracking-wide">
          {heading}
        </h2>
        <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-oracle">
          {subHeading}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-20 mt-14">
        <div className="hidden lg:block lg:order-last">
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full   rounded-[20px]"
              src={img}
              alt=""
            />
          </div>
        </div>

        <div className=" max-h-full grid grid-cols-1  gap-6">
          {content.map((data, i) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={i}
              className="bg-white_ px-[20px] !h-auto rounded-[8px]   cursor-pointer flex gap-8"
            >
              <div>
                <IoCheckmarkCircleOutline className="text-3xl text-primary-900" />
              </div>
              <div>
                <h3 className=" md:text-xl font-semibold font-oracle mb-2">
                  {data.title}
                </h3>
                <p className="md:text-xl font-oracle text-secondary_">
                  {data?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
