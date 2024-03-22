// images
import img1 from '../../assets/svg/review/LT.svg';
import img2 from '../../assets/svg/review/Rezayat.svg';
import img3 from '../../assets/svg/review/Schaffler.svg';
import img4 from '../../assets/svg/review/Siemens.svg';
import img5 from '../../assets/svg/review/VA Tech Wabag.svg';
import img6 from '../../assets/svg/review/Vodafone.svg';
import img7 from '../../assets/svg/review/White.svg';
import img8 from '../../assets/svg/review/ESDS.svg';
import img9 from '../../assets/svg/review/BHEL.svg';

//components
import Carousel from 'react-multi-carousel';

// styles
import 'react-multi-carousel/lib/styles.css';
import { ArrowLeft, ArrowRight } from 'react-feather';

// carousel responsive object
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClientReview = () => {
  const content = [
    {
      content:
        "Partnering with Credence Tec has significantly improved our IT infrastructure's reliability and performance. Their Annual Maintenance Contract services have been instrumental in ensuring seamless operations across our diverse range of assets. The team's prompt response, technical expertise, and commitment to service excellence have truly set them apart. We appreciate their proactive approach and look forward to a continued successful collaboration.",
      name: 'L&T',
      location: 'Chennai, India',
      img: img1,
    },
    // {
    //   content:
    //     'Credence Tec has been a valuable partner for ESDS, providing exceptional Server and Storage Annual Maintenance Contract (AMC) services. Their dedicated team of engineers ensures our critical IT infrastructure is well-maintained and operates at peak efficiency. The prompt response to service requests, technical competence, and commitment to meeting service level agreements have made Credence Tec a trusted AMC service provider for ESDS. We appreciate their proactive approach and look forward to a continued successful association.',
    //   name: 'ESDS',
    //   location: 'Chennai, India',
    //   img: img8,
    // },
    {
      content:
        "We are delighted to share our positive experience with Credence Tec, who has been our trusted partner for both Annual Maintenance Contract (AMC) services and the supply of new systems. Their dedicated team has consistently provided excellent support for our servers, laptops, and hardware infrastructure. Credence Tec's commitment to ensuring the optimal performance and reliability of our IT systems has greatly contributed to the efficiency of our operations at VA Tech Wabag. We appreciate their professionalism, technical proficiency, and prompt response to our requirements. It's a pleasure working with Credence Tec, and we look forward to a continued partnership.",
      name: 'VA Tech Wabag',
      location: 'Chennai, India',
      img: img5,
    },
    {
      content:
        "We would like to express our sincere appreciation for the outstanding services provided by Credence Tec. Their expertise in Tape Drives and Hardware Annual Maintenance Contract (AMC) services has significantly contributed to the smooth operation of our critical infrastructure at BHEL. The professionalism, technical proficiency, and timely support demonstrated by Credence Tec's team have exceeded our expectations. We value their commitment to excellence and look forward to an enduring partnership for the continued success of our IT systems.",
      name: 'BHEL',
      location: 'Chennai, India',
      img: img9,
    },
    {
      content:
        'It is our pleasure to express our satisfaction with the services provided by Credence Tec. We engaged with them for the rental of 120+ workstations, and the experience has been truly commendable. The workstations were of high quality, and the rental process was seamless. Credence Tec demonstrated professionalism, reliability, and a customer-centric approach throughout our engagement. Their commitment to delivering top-notch solutions aligns perfectly with the standards we uphold at Rezayat Group. We appreciate the excellent support and look forward to future collaborations with Credence Tec.',
      name: 'Rezayat',
      location: 'Chennai, India',
      img: img2,
    },
    {
      content:
        'We are pleased to extend our appreciation to Credence Tec for their outstanding services in providing 175+ rental laptops to our organization. The entire process, from inquiry to delivery, was handled with utmost professionalism and efficiency. Credence Tec demonstrated flexibility to meet our specific requirements, ensuring the laptops were equipped with the necessary configurations. The quality of the laptops exceeded our expectations, and their prompt support during the rental period was invaluable. We highly recommend Credence Tec for their reliable and customer-focused rental services.',
      name: 'Vodafone',
      location: 'Chennai, India',
      img: img6,
    },
    {
      content:
        'We would like to express our gratitude to Credence Tec for their exceptional services in providing comprehensive AMC support for our servers and tape library systems. The team at Credence Tec demonstrated a deep understanding of our infrastructure needs and executed the maintenance activities with precision. Their proactive approach to preventive maintenance has significantly contributed to the seamless functioning of our critical systems. We appreciate their technical expertise, prompt response, and commitment to ensuring the reliability of our IT infrastructure. Credence Tec has proven to be a trusted partner in maintaining our server and tape library assets.',
      name: 'Schaffler',
      location: 'Chennai, India',
      img: img4,
    },
    {
      content:
        'I am writing this testimonial to express our satisfaction with the outstanding services provided by Credence Tec. We engaged their expertise for Server, Storage, and Desktop AMC, and the results have been exceptional. The Credence Tec team demonstrated unparalleled professionalism, prompt responses, and effective solutions to our IT infrastructure needs. Their proactive approach to preventive maintenance ensured that our systems consistently operated at peak performance. Their dedication to customer satisfaction and technical proficiency is truly commendable. We appreciate the seamless collaboration and the valuable contribution Credence Tec has made to the efficiency and reliability of our IT systems. It is without hesitation that we recommend their services to other organizations seeking top-notch IT support.',
      name: 'White House',
      location: 'Chennai, India',
      img: img7,
    },
    {
      content:
        "I am pleased to provide this testimonial expressing our satisfaction with the exemplary Network AMC services delivered by Credence Tec. Siemens has been relying on their expertise for the maintenance of our network infrastructure, and the experience has been nothing short of outstanding. Credence Tec's team of dedicated professionals exhibited a profound understanding of our network requirements. Their proactive monitoring, quick issue resolution, and preventive maintenance strategies have significantly contributed to the stability and efficiency of our network operations. We appreciate the prompt responses, technical proficiency, and commitment to service excellence demonstrated by the Credence Tec team. Engaging with them has proven to be a valuable investment in ensuring the reliability and performance of our network infrastructure. I would highly recommend Credence Tec to any organization seeking reliable and comprehensive Network AMC services",
      name: 'Siemens',
      location: 'Chennai, India',
      img: img3,
    },
  ];

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        onClick={() => onClick()}
        className="absolute left-3 top-0 flex items-center justify-center w-[42px] md:w-[50px] h-[42px] md:h-[50px] rounded-[50%] bg-primary-900"
      >
        <ArrowLeft size={20} className="text-white_" />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button
        onClick={() => onClick()}
        className="absolute right-3 top-0 flex items-center justify-center w-[42px] md:w-[50px] h-[42px] md:h-[50px] rounded-[50%] bg-primary-900"
      >
        <ArrowRight size={20} className="text-white_" />
      </button>
    );
  };

  return (
    <div className="bg-white_ py-[100px]">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <h3 className="text-[25px] font-oracle font-semibold text-center text-primary-900">
          Trusted by over 300+ clients of the world’s leading companies
        </h3>

        <div className="mt-14 review">
          <Carousel
            autoPlay={true}
            autoPlaySpeed={2000}
            showDots={true}
            infinite={true}
            className="w-full"
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {content.map((data, i) => (
              <div key={i} className="w-[90%] md:w-[70%]  mx-auto mb-10">
                <p className="text-base md:text-[18px] font-oracle text-center">
                  "{data.content}"
                </p>

                <div className="flex justify-center items-center mt-12">
                  <img
                    src={data.img}
                    className="w-[50px] h-[50px] rounded-[50px]"
                    alt=""
                  />
                  <div className="ml-4 font-oracle">
                    <p className="font-semibold text-[16px]">{data.name}</p>
                    <p className="text-[13px] font-oracle">{data.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
