// images
import rightImg from '@assets/svg/team.png';

const TeamOfSkilled = () => {
  return (
    <section className="py-[80px] bg-white_ overflow-hidden">
      <div className="mb-16 w-[95%] lg:max-w-[700px] mx-auto">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl font-Georgia ">
          Team of Skilled Professionals
        </h2>
        <p className="text-center mt-4  font-normal leading-7 text-secondary_   lg:leading-8 font-oracle">
          Elevating Excellence, Unleashing Expertise: Our Team, Your Success!
        </p>
      </div>
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-16">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            className=" lg:order-3 lg:col-span-4 rounded-3xl place-items-center"
          >
            <img
              className="w-full object-cover h-full shadow-xl rounded-xl"
              src={rightImg}
              alt=""
            />
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            className="lg:order-2 lg:col-span-4"
          >
            <div className="max-w-lg lg:max-w-none">
              <p className=" text-base font-normal leading-7 text-black_ lg:text-lg  text-justify  lg:leading-8 font-oracle">
                Building successful projects and achieving ambitious goals
                starts with a strong team. At Credence Tec,  we understand the
                power of collaboration and expertise. That's why we've assembled
                a diverse team of skilled professionals, each bringing their
                unique talents and years of experience to the table.
              </p>
              <div className="mt-6">
                <p className="font-oracle text-xl font-bold">
                  What You Can Expect:
                </p>
                <ul className="list-disc text-xl">
                  <li className="ml-6 mt-4  font-normal leading-7 text-black_ lg:text-lg lg:mt-6  lg:leading-8 font-oracle">
                    Unmatched Expertise
                  </li>
                  <li className="ml-6  font-normal leading-7 text-black_ lg:text-lg mt-2  lg:leading-8 font-oracle">
                    Exceptional Teamwork
                  </li>
                  <li className="ml-6  font-normal leading-7 text-black_ lg:text-lg mt-2  lg:leading-8 font-oracle">
                    Dedicated Client Focus
                  </li>
                  <li className="ml-6  font-normal leading-7 text-black_ lg:text-lg mt-2  lg:leading-8 font-oracle">
                    Unwavering Commitment
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-base font-normal leading-7 text-black_ lg:text-lg lg:mt-6  lg:leading-8 font-oracle">
                Ready to experience the difference a skilled and collaborative
                team can make? Contact us today and let's discuss how we can
                help you achieve your goals
              </p>
            </div>

            <div className="flex flex-wrap gap-5 md:gap-10 justify-center items-center   mt-10">
              <div>
                <h3 className="text-[25px] font-semibold font-oracle text-center text-primary-900">
                  500+
                </h3>
                <p className="text-[16px] font-normal font-oracle text-center">
                  Completed Projects
                </p>
              </div>

              <div className="sm:border-l-[1px] sm:border-r-[1px] border-gray-300 sm:px-5 md:px-10">
                <h3 className="text-[25px] font-semibold font-oracle text-center text-primary-900">
                  125+
                </h3>
                <p className="text-[16px] font-normal font-oracle text-center">
                  Ongoing Projects
                </p>
              </div>

              <div>
                <h3 className="text-[25px] font-semibold font-oracle text-center text-primary-900">
                  24+
                </h3>
                <p className="text-[16px] font-normal font-oracle text-center">
                  Location
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOfSkilled;
