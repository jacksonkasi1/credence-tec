// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import storyImg from '../../../assets/images/ServicesPage/ServicesMantaines/EndUser/Story.png';

// components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import SaleServices from '../SaleServices';
import Compare from '../Compare';
import ServerStory from '../ServerStory';

// import contents img
import img1 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/EndUser/img12.webp';

const EndUserMaintenance = () => {
  const content =
    'Credence Tec transforms your end-user IT experience with our comprehensive End User IT Maintenance Services. Our dedicated team ensures the uninterrupted functionality of end-user devices, providing proactive support and rapid issue resolution. From software updates to hardware troubleshooting, we tailor our services to meet the diverse needs of your workforce. Credence Tec prioritizes user satisfaction and operational efficiency, delivering top-notch solutions that enhance productivity and minimize disruptions. Partner with us for a reliable and secure IT environment, empowering your end-users to work seamlessly and focus on driving business success. Choose Credence Tec for cutting-edge End User IT Maintenance Services that optimize user experiences and contribute to the overall success of your organization.';

  const contents = [
    {
      title: 'Desktop and Laptop Support',
      point: [
        {
          line: 'Troubleshooting and resolving issues with individual desktops and laptops.',
        },
        { line: 'Installing, updating, and configuring operating systems.' },
        {
          line: 'Providing hardware and software support for end-user devices.',
        },
      ],
      img: img1,
    },
    {
      title: 'Software Installation and Updates',
      point: [
        {
          line: 'Installing and configuring software applications.',
        },
        {
          line: 'Ensuring that software updates and patches are applied promptly.',
        },
        {
          line: 'Managing license compliance for installed software.',
        },
      ],
      img: img2,
    },
    {
      title: 'User Account Management',
      point: [
        {
          line: 'Creating and managing user accounts.',
        },
        { line: 'Resetting passwords and resolving account-related issues.' },
        {
          line: ' Implementing access controls and permissions.',
        },
      ],
      img: img3,
    },
    {
      title: 'Hardware Upgrades and Replacements',
      point: [
        {
          line: 'Assessing and performing hardware upgrades as needed.',
        },
        { line: 'Replacing faulty or outdated hardware components.' },
        {
          line: 'Coordinating with vendors for warranty and support services.',
        },
      ],
      img: img4,
    },
    {
      title: 'Peripheral Device Support',
      point: [
        {
          line: 'Troubleshooting and supporting peripheral devices (printers, scanners, etc.).',
        },
        {
          line: 'Installing and configuring peripheral devices for end-users.',
        },
        {
          line: 'Addressing issues related to connectivity and functionality.',
        },
      ],
      img: img5,
    },
    {
      title: 'Mobile Device Management (MDM)',
      point: [
        {
          line: 'Managing and securing mobile devices (smartphones, tablets).',
        },
        { line: 'Enforcing security policies on mobile devices.' },
        {
          line: 'Assisting with device configurations and troubleshooting.',
        },
      ],
      img: img6,
    },
    {
      title: 'Remote Assistance and Help Desk Support',
      point: [
        {
          line: 'Providing remote assistance for end-user issues.',
        },
        {
          line: 'Offering help desk support for technical queries and problem resolution.',
        },
        {
          line: 'Utilizing ticketing systems to track and manage support requests.',
        },
      ],
      img: img7,
    },
    {
      title: 'Training and User Education',
      point: [
        {
          line: 'Conducting training sessions for new software or technology implementations.',
        },
        {
          line: 'Providing ongoing user education on best practices and security awareness.',
        },
        {
          line: 'Creating documentation and resources for self-help.',
        },
      ],
      img: img8,
    },
    {
      title: 'Endpoint Security',
      point: [
        {
          line: 'Implementing and managing antivirus and anti-malware solutions.',
        },
        { line: 'Ensuring endpoint security compliance.' },
        {
          line: 'Responding to and mitigating security incidents on end-user devices.',
        },
      ],
      img: img9,
    },
    {
      title: 'Collaboration Tools Support',
      point: [
        {
          line: 'Supporting communication and collaboration tools (email, messaging, video conferencing).',
        },
        { line: 'Troubleshooting issues related to collaboration platforms.' },
        {
          line: 'Assisting with user onboarding and training for collaboration tools.',
        },
      ],
      img: img10,
    },
    {
      title: 'Data Backup and Recovery for End-User Devices',
      point: [
        {
          line: 'Implementing and managing backup solutions for user data.',
        },
        {
          line: 'Assisting with data recovery in case of device failures.',
        },
        {
          line: 'Educating users on data backup best practices.',
        },
      ],
      img: img11,
    },
    {
      title: 'Performance Optimization for End-User Devices',
      point: [
        {
          line: 'Monitoring and optimizing the performance of desktops and laptops.',
        },
        {
          line: 'Removing unnecessary software or files to improve performance.',
        },
        {
          line: 'Providing guidance on hardware upgrades for improved user experience.',
        },
      ],
      img: img12,
    },
  ];
  return (
    <div>
      <Hero
        image={headerBg}
        title={'End-User Maintenance'}
        content={'Home / Services'}
      />
      <ServerStory
        img={storyImg}
        heading={'End-User Maintenance'}
        subHeading={
          "Unleash your tech confidence, we'll be your Tec champions!"
        }
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

export default EndUserMaintenance;
