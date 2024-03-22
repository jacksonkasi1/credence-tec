import React from 'react';

// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import leftImg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/left.webp';

// import contents img
import img1 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/ServerMaintenance/img12.webp';

// components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import ServerStory from '../ServerStory';
import SaleServices from '../SaleServices';
import Compare from '../Compare';

const ServerMaintenance = () => {
  const content =
    'Discover unparalleled Server Maintenance Services at Credence Tec, ensuring the optimal performance and security of your critical server infrastructure. Our expert team specializes in proactive maintenance, swift issue resolution, and continuous enhancement to keep your servers operating at peak efficiency. From routine check-ups to intricate troubleshooting, we tailor our services to meet the unique needs of your business. Credence Tec is committed to maximizing the reliability and  efficiency of your server environment, minimizing downtime and  ensuring seamless business operations. Partner with us for  cutting-edge solutions that safeguard your data, enhance  scalability, and contribute to the overall success of your  organization. Trust Credence Tec to be your dedicated partner  in maintaining the backbone of your IT infrastructure.';

  const contents = [
    {
      content:
        'Inspection and replacement of faulty hardware components. Cleaning and dusting to prevent overheating. Upgrading or adding hardware components for improved performance.',
      title: 'Hardware Maintenance',
      img: img1,
    },
    {
      content:
        'Installing operating system updates and patches. Updating server software and applications. Applying security patches to address vulnerabilities.',
      title: 'Software Updates and Patch Management',
      img: img2,
    },
    {
      content:
        'Regular data backups to prevent data loss.        Testing and verifying backup systems. Establishing and updating disaster recovery plans.',
      title: 'Backup and Disaster Recovery',
      img: img3,
    },
    {
      content:
        'Conducting regular security audits. Monitoring server logs for suspicious activities. Implementing and updating security measures.',
      title: 'Security Audits and Monitoring',
      img: img4,
    },
    {
      content:
        'Monitoring server performance metrics. Identifying and resolving performance bottlenecks. Optimizing server configurations for efficiency',
      title: 'Performance Optimization',
      img: img5,
    },
    {
      content:
        'Checking and maintaining network connectivity. Managing IP addresses and DNS configurations. Monitoring network traffic for performance and security.',
      title: 'Network Maintenance',
      img: img6,
    },
    {
      content:
        'Managing and updating virtualization software. Allocating and optimizing virtual resources. Monitoring virtual machine performance.',
      title: 'Virtualization Maintenance',
      img: img7,
    },
    {
      content:
        'Managing user accounts and access permissions. Regularly reviewing and updating access controls. Implementing security measures for user authentication.',
      title: 'User Access and Permissions Management',
      img: img8,
    },
    {
      content:
        'Maintaining accurate server documentation. Generating and reviewing reports on server health and performance. Documenting changes and updates to configurations',
      title: 'Documentation and Reporting',
      img: img9,
    },
    {
      content:
        'Ensuring proper environmental conditions (temperature, humidity) for server rooms. Checking and maintaining power sources, including UPS systems',
      title: 'Environmental Maintenance',
      img: img10,
    },
    {
      content:
        'Ensuring servers comply with industry regulations.     Conducting audits to verify compliance with relevant standards.',
      title: 'Compliance and Regulation',
      img: img11,
    },
    {
      content:
        'Utilizing remote monitoring tools for proactive issue detection. Remote troubleshooting and resolution of server issues.',
      title: 'Remote Monitoring and Management (RMM)',
      img: img12,
    },
  ];

  return (
    <div>
      <Hero
        image={headerBg}
        title={'Server Maintenance'}
        content={'Home / Services'}
      />
      <ServerStory
        img={leftImg}
        heading={'Server Maintenance'}
        subHeading={'Downtime? Not on our watch!'}
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

export default ServerMaintenance;
