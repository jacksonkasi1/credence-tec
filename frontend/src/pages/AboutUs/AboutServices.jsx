// images
import icon1 from '../../assets/svg/AboutUs/icons/Vision.svg';
import icon2 from '../../assets/svg/AboutUs/icons/Vector.svg';
import icon3 from '../../assets/svg/AboutUs/icons/Vector (1).svg';

// import component
import Typography from '../../components/ui/Typography';

const AboutServices = () => {
  const content = [
    {
      icon: icon1,
      title: 'Our Vision',
      content:
        'At Credence Tec, our vision is to be the leading provider of annual maintenance services for server, storage, network, end-user management services, and A/V systems',
    },
    {
      icon: icon2,
      title: 'Our Mission',
      content:
        'At Credence Tec, our mission is to provide exceptional annual maintenance services for server, storage, network, end-user management services, and A/V systems',
    },
    {
      icon: icon3,
      title: 'Our Goal',
      content:
        'At Credence Tec, our goal is to redefine IT support services by delivering seamless solutions that not only meet but exceed the expectations of our clients',
    },
  ];

  return (
    <section className="py-10 bg-[#F2F8FD] sm:py-16 lg:py-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className=" mx-auto text-center">
          <Typography
            variant="P_Bold_H3"
            type="font-Georgia"
            className="mt-6 leading-tight text-[#2E2E2E] "
          >
            Empowering Businesses Through Unmatched IT Solutions
          </Typography>
          <p className="mt-4  leading-relaxed text-gray-600 font-oracle">
            Discover the Essence of Excellence with CredenceTec
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20 lg:gap-x-12 justify-center">
          {content.map((data, i) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={i}
              className="bg-white rounded-[10px] border-[1px] border-transparent hover:border-[#236DF8] transition-all duration-300 hover:shadow-custom cursor-pointer"
            >
              <div className="py-10 px-6 flex flex-col items-center">
                <img src={data?.icon} alt="" className="w-14 block mx-auto" />
                <h3 className="mt-4 text-xl font-oracle font-semibold text-black">
                  {data?.title}
                </h3>
                <p className="mt-4 font-oracle text-base text-gray-600 text-center">
                  {data?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
