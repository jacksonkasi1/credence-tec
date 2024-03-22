// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import storyImg from '../../../assets/images/ServicesPage/ServicesMantaines/FacilityManagement/story.png';

// components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import SaleServices from '../SaleServices';
import Compare from '../Compare';
import ServerStory from '../ServerStory';

// import contents img
import img1 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/Facility/img12.webp';

const FacilityManagement = () => {
  const content =
    "Elevate your operational efficiency with Credence Tec's Facility Management Services, where excellence meets seamless functionality. Our dedicated engineer/technician team ensures the smooth running of your facilities, providing end-to-end solutions for maintenance, security, and operational support. From proactive maintenance to tailored security measures, Credence Tec customizes services to suit the unique needs of your infrastructure. We prioritize the reliability and safety of your facilities, offering cutting-edge solutions that minimize downtime and optimize resource utilization. Partner with us for a strategic and comprehensive approach to Facility Management Services, empowering your organization with a well-maintained, secure, and high-performance work environment. Choose Credence Tec for top-tier facility solutions that contribute to the overall success of your business.";

  const contents = [
    {
      content:
        'Providing initial user support via phone, email, or chat. Assisting users with common IT issues and inquiries.',
      title: 'Remote Technical Support',
      img: img1,
    },
    {
      content:
        'Triaging and categorizing incoming support requests. Resolving straightforward technical issues promptly',
      title: 'Incident Triage and Resolution',
      img: img2,
    },
    {
      content:
        'Handling password reset requests and account-related issues. Managing user access permissions.',
      title: 'Password Resets and Account Management',
      img: img3,
    },
    {
      content:
        'Assisting users with software installation and configuration. Troubleshooting basic software-related problems.',
      title: 'Software Installation and Troubleshooting',
      img: img4,
    },
    {
      content:
        'Providing on-site assistance for hardware and software issues. Conducting hands-on troubleshooting and problem resolution',
      title: 'On-Site Technical Support',
      img: img5,
    },
    {
      content:
        'Repairing or replacing faulty hardware components. Performing routine maintenance on IT equipment.',
      title: 'Hardware Maintenance and Repairs',
      img: img6,
    },
    {
      content:
        'Diagnosing and resolving network connectivity issues. Collaborating with network engineers for advanced problem resolution.',
      title: 'Network Troubleshooting',
      img: img7,
    },
    {
      content:
        'Administering and maintaining server infrastructure. Implementing server updates and patches.',
      title: 'Server Administration and Maintenance',
      img: img8,
    },
    {
      content:
        'Providing support for database-related issues. Assisting with database backups, maintenance, and optimization',
      title: 'Database Support',
      img: img9,
    },
    {
      content:
        'Implementing and managing security measures across IT systems. Responding to security incidents and implementing preventive measures.',
      title: 'Security Management',
      img: img10,
    },
    {
      content:
        'Contributing to IT infrastructure planning and design. Implementing infrastructure changes and upgrades.',
      title: 'Infrastructure Planning and Implementation',
      img: img11,
    },
    {
      content:
        'Contributing to the development of disaster recovery plans. Conducting testing and drills for disaster recovery procedures.',
      title: 'Disaster Recovery Planning',
      img: img12,
    },
  ];

  return (
    <div>
      <Hero
        image={headerBg}
        title={'Facility Management Services'}
        content={'Home / Services'}
      />
      <ServerStory
        img={storyImg}
        heading={'Facility Management Services'}
        subHeading={"It's not just fixing things, it's building trust"}
        title={'Welcome To Credence Tec'}
        content={content}
      />
      <SaleServices content={contents} />
      <Compare />
      <Brands />
      <ClientReview />
      <ConnectBanner />
    </div>
  );
};

export default FacilityManagement;
