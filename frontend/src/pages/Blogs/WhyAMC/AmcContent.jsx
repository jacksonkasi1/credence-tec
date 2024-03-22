// import images
import banner from '../../../assets/images/blogs/WhyAMC/banner.png';
import content from '../../../assets/images/blogs/WhyAMC/content.png';

// import icons
// import facebook from '../../../assets/svg/Blog/Icon/facebook.svg';
// import instagram from '../../../assets/svg/Blog/Icon/instagram.svg';
// import main from '../../../assets/svg/Blog/Icon/mail.svg';
// import telegram from '../../../assets/svg/Blog/Icon/telegram.svg';
// import whatsapp from '../../../assets/svg/Blog/Icon/whatsapp.svg';
// import linkedin from '../../../assets/svg/Blog/Icon/linkedin.svg';
// import copy from '../../../assets/svg/Blog/Icon/copy.svg';

// import component
import Typography from '../../../components/ui/Typography';
import { Link } from 'react-router-dom';

const AmcContent = () => {
  return (
    <div className="bg-white_">
      <div className="py-[100px] w-[95%] xl:max-w-7xl mx-auto">
        <div className="sm:w-[80%] mx-auto">
          <p className="font-oracle mb-6">
            <Link to="/">
              Home {'>'} Blog {'>'}{' '}
            </Link>
            <span className="font-semibold">
              Why AMC is Crucial for the Smooth Functioning ofan IT Company
            </span>{' '}
          </p>
          <div className="border">
            <div>
              <img src={banner} alt="banner Image" />
            </div>

            <div className="p-8">
              <p className="text-[#E4572E] font-semibold font-oracle mb-1">
                Author: Sabur Nisha
              </p>
              <Typography
                variant="P_Bold_H_T"
                type="Georgia"
                className="text-primary-900"
              >
                Why AMC is Crucial for the Smooth Functioning of an IT Company
              </Typography>
            </div>
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle"
                >
                  <p className="text-black_">
                    In the fast-paced world of technology, the operations of an
                    IT company are heavily reliant on the seamless functioning
                    of its hardware and software infrastructure. One key
                    strategy that ensures the uninterrupted flow of business
                    operations is an Annual Maintenance Contract (AMC). In this
                    blogpost, we will delve into the reasons why an AMC is not
                    just a service agreement but a strategic investment for any
                    IT company striving for optimal performance,
                    cost-effectiveness, and client satisfaction.
                  </p>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle mt-6"
                >
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Proactive Maintenance
                  </h2>
                  <p className="text-black_ mt-2 ">
                    AMC ensures proactive maintenance of IT equipment, including
                    servers, desktops, laptops, and networking devices. Regular
                    check-ups, updates, and preventive measures are taken to
                    identify and address potential issues before they escalate
                    into major problems. This proactive approach minimizes
                    downtime and keeps the IT environment running smoothly
                  </p>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="mt-6"
                >
                  <img src={content} alt="Image" />
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle mt-6"
                >
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Cost-Effective
                  </h2>
                  <p className="text-black_ mt-2 ">
                    An AMC provides a cost-effective solution compared to
                    addressing issues on an ad-hoc basis. It includes routine
                    maintenance, repairs, and replacements as needed, reducing
                    the risk of sudden, expensive breakdowns. This predictable
                    cost model allows companies to budget effectively and avoid
                    unexpected financial burdens.
                  </p>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle mt-6"
                >
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Timely Software Updates
                  </h2>
                  <p className="text-black_ mt-2 ">
                    IT systems are vulnerable to security threats, and regular
                    software updates are critical for protecting against these
                    threats. With an AMC, companies can ensure that their
                    software, including operating systems and antivirus
                    programs, is updated in a timely manner. This helps in
                    maintaining a secure IT environment and safeguarding
                    sensitive data.
                  </p>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle mt-6"
                >
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Extended Equipment Lifespan
                  </h2>
                  <p className="text-black_ mt-2 ">
                    : Regular maintenance provided under an AMC extends the
                    lifespan of IT equipment. Well-maintained hardware is less
                    likely to fail prematurely, allowing companies to maximize
                    the value of their technology investments. This, in turn,
                    reduces the frequency of costly hardware replacements
                  </p>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle mt-6"
                >
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Priority Support and Quick Issue Resolution
                  </h2>
                  <p className="text-black_ mt-2 ">
                    Companies with an AMC often receive priority support from
                    service providers. In the event of a technical issue, they
                    can expect quicker response times and faster issue
                    resolution. This ensures that any disruptions to business
                    operations are minimized, enhancing overall productivity.
                  </p>
                </div>
              </div>
              <div>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle "
                >
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Compliance and Documentation
                  </h2>
                  <p className="text-black_ mt-2 ">
                    AMCs typically come with detailed documentation of
                    maintenance activities, repairs, and upgrades performed on
                    the IT infrastructure. This documentation is valuable for
                    compliance audits, ensuring that the company adheres to
                    industry regulations and standards.
                  </p>
                </div>

                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                  className="font-oracle mt-6"
                >
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Focus on Core Competencies
                  </h2>
                  <p className="text-black_ mt-2 ">
                    By outsourcing IT maintenance to a reliable service provider
                    through an AMC, companies can free up internal resources to
                    focus on their core competencies. This strategic outsourcing
                    allows the IT team to concentrate on innovation,
                    development, and other mission-critical tasks.
                  </p>
                  <p className="text-black_ mt-2 ">
                    In conclusion, an Annual Maintenance Contract is not just a
                    routine service agreement; it's a proactive strategy that
                    empowers IT companies to navigate the challenges of the
                    digital landscape. From cost savings to enhanced security
                    and prolonged equipment life, the benefits of an AMC are
                    multifaceted, making it an indispensable investment for any
                    IT organization.
                  </p>
                </div>

                {/* <div className="mt-10 max-w-[328px]">
                  <h2 className="text-black text-xl font-bold font-Georgia ">
                    Share in
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-6">
                    <Link to="#">
                      <img src={facebook} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={instagram} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={main} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={telegram} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={whatsapp} alt="" />
                    </Link>
                    <Link to="#">
                      <img src={linkedin} alt="" />
                    </Link>
                  </div>
                  <p className="text-[13px] font-oracle text-secondary_ text-center py-8">
                    Or share with link
                  </p>
                  <div className="py-4 px-5 bg-[#9D9D9D0D] relative">
                    <p className="font-oracle">
                      https://www.credenceyec.com...
                    </p>
                    <img className="absolute top-4 right-5" src={copy} alt="" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmcContent;
