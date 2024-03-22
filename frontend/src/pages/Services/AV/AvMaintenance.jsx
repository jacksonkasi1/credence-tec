// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import storyImg from '../../../assets/images/ServicesPage/ServicesMantaines/AvMaintenance/Story.png';
import saleImg from '../../../assets/images/ServicesPage/ServicesMantaines/AvMaintenance/Sales.png';

// components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import SaleServices from '../SaleServices';
import Compare from '../Compare';
import ServerStory from '../ServerStory';

// import contents img
import img1 from '../../../assets/images/ServicesPage/ServicesImg/AV/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/AV/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/AV/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/AV/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/AV/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/AV/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/AV/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/AV/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/AV/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/AV/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/AV/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/AV/img12.webp';
import img13 from '../../../assets/images/ServicesPage/ServicesImg/AV/img13.webp';

const AvMaintenance = () => {
  const content =
    "Elevate your audio-visual experience with Credence Tec's A/V Maintenance Services, ensuring the seamless performance of your audio and visual systems. Our skilled technicians specialize in proactive maintenance, swiftly addressing potential issues to enhance reliability and optimize functionality. From routine check-ups to intricate troubleshooting, our tailored services cater to the unique requirements of your A/V infrastructure. Credence Tec is committed to delivering cutting-edge solutions, keeping your systems at peak performance for immersive presentations, collaborative meetings, and engaging multimedia experiences. Trust us to provide comprehensive A/V maintenance, enabling you to focus on impactful communication and seamless interaction in your business environment. Partner with Credence Tec for unparalleled A/V solutions that elevate your technological landscape.";

  const contents = [
    {
      content:
        'Installing and configuring audio and video equipment. Ensuring proper connectivity and integration with other systems',
      title: 'Equipment Installation and Setup',
      img: img1,
    },
    {
      content:
        'Calibrating audio and video systems for optimal performance. Adjusting settings to achieve the desired audio and visual quality.',
      title: 'System Calibration',
      img: img2,
    },
    {
      content:
        'Diagnosing and resolving issues with A/V equipment. Repairing or replacing faulty components for uninterrupted operation.',
      title: 'Troubleshooting and Repairs',
      img: img3,
    },
    {
      content:
        'Updating firmware and software for A/V devices. Ensuring compatibility and implementing new features when available.',
      title: 'Software Updates',
      img: img4,
    },
    {
      content:
        'Maintaining and calibrating projectors. Replacing projector lamps as needed. Adjusting projection screens for clarity.',
      title: 'Projection System Maintenance',
      img: img5,
    },
    {
      content:
        'Checking and optimizing speaker configurations.        Tuning audio systems for clear and balanced sound. Replacing worn-out or damaged audio components.',
      title: 'Audio System Maintenance',
      img: img6,
    },
    {
      content:
        'Monitoring and maintaining video display systems.      Calibrating monitors and displays for color accuracy. Replacing or upgrading video components as necessary.',
      title: 'Video System Maintenance',
      img: img7,
    },
    {
      content:
        'Supporting A/V needs in conference rooms.        Assisting with video conferencing setups. Troubleshooting connectivity issues during meetings.',
      title: 'Conference Room Support',
      img: img8,
    },
    {
      content:
        'Providing A/V support for events and presentations. Setting up and managing audio and video equipment for live events. Ensuring seamless A/V integration during live performances',
      title: 'Event Support',
      img: img9,
    },
    {
      content:
        'Configuring and maintaining A/V control systems.        Programming control interfaces for user-friendly operation. Troubleshooting control system issues.',
      title: 'Control System Management',
      img: img10,
    },
    {
      content:
        'Organizing and managing A/V cables for neat and efficient setups. Addressing cable-related issues, such as wear or damage. Implementing cable management solutions to prevent tangling.',
      title: 'Cable Management',
      img: img11,
    },
    {
      content:
        'Providing training to end-users on A/V equipment operation. Educating users on basic troubleshooting techniques. Offering guidance on maximizing A/V system features.',
      title: 'User Training',
      img: img12,
    },
    {
      content:
        'Utilizing remote monitoring tools for A/V system health checks. Offering remote support for troubleshooting and issue resolution. Implementing remote updates and adjustments when feasible.',
      title: 'Remote Monitoring and Support',
      img: img13,
    },
  ];

  return (
    <div>
      <Hero
        image={headerBg}
        title={'A/V Maintenance'}
        content={'Home / Services'}
      />
      <ServerStory
        img={storyImg}
        heading={'A/V Maintenance'}
        subHeading={'Sleep soundly, your A/V is in CT’s hands, guaranteed'}
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

export default AvMaintenance;
