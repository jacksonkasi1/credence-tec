// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import storyImg from '../../../assets/images/ServicesPage/ServicesMantaines/NetworkMaintaines/Sotry.png';

// components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import SaleServices from '../SaleServices';
import Compare from '../Compare';
import ServerStory from '../ServerStory';

// import contents img
import img1 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/NetworkMaintenance/img12.webp';

const NetworkMaintenance = () => {
  const content =
    "Credence Tec offers unparalleled Network Maintenance Services, ensuring the seamless operation and security of your network infrastructure. Our dedicated team of experts employs cutting-edge technologies and proactive strategies to identify and address potential issues, minimizing downtime and optimizing network performance. From routine maintenance tasks to intricate troubleshooting, we tailor our services to meet the unique needs of your business. With a focus on reliability and efficiency, Credence Tec's Network Maintenance Services provide comprehensive solutions for network stability, cybersecurity, and continuous enhancement. Partner with us to safeguard your network's integrity, enabling your business to thrive in an interconnected digital landscape.";

  const contents = [
    {
      content:
        'Regular inspection of network hardware, including routers, switches, and access points. Testing and replacing faulty network components. Cleaning and preventive maintenance to avoid hardware issues',
      title: 'Hardware Inspection and Maintenance',
      img: img1,
    },
    {
      content:
        'Applying firmware updates to network devices.        Updating network operating systems and management software. Installing patches for security and performance improvements',
      title: 'Firmware and Software Updates',
      img: img2,
    },
    {
      content:
        'Continuous monitoring of network traffic and performance. Identifying and addressing network congestion or bottlenecks. Monitoring for anomalies or suspicious activities.',
      title: 'Network Monitoring',
      img: img3,
    },
    {
      content:
        'Conducting regular security audits of network infrastructure. Performing vulnerability assessments to identify potential weaknesses. Implementing and updating security measures, including firewalls and intrusion detection systems.',
      title: 'Security Audits and Vulnerability Assessments',
      img: img4,
    },
    {
      content:
        'Managing and documenting network configurations. Implementing changes to network configurations as needed. Keeping track of IP addresses, subnets, and DNS configurations. ',
      title: 'Configuration Management',
      img: img5,
    },
    {
      content:
        'Configuring and optimizing QoS settings for network traffic. Prioritizing network traffic to ensure optimal performance for critical applications. Monitoring and adjusting QoS policies as needed.',
      title: 'Quality of Service (QoS) Management',
      img: img6,
    },
    {
      content:
        'Managing and optimizing wireless access points.        Configuring and securing wireless networks. Monitoring and addressing issues related to wireless connectivity.',
      title: 'Wireless Network Services',
      img: img7,
    },
    {
      content:
        'Identifying and resolving performance issues. Fine-tuning network configurations for optimal efficiency. Implementing load balancing and failover solutions.',
      title: 'Network Optimization',
      img: img8,
    },
    {
      content:
        'Maintaining accurate documentation of network configurations. Generating reports on network health, performance, and usage. Documenting changes and updates to the network infrastructure',
      title: 'Documentation and Reporting',
      img: img9,
    },
    {
      content:
        'Utilizing remote monitoring tools for proactive issue detection. Remote troubleshooting and resolution of network issues. Monitoring and managing network devices remotely.',
      title: 'Remote Monitoring and Management (RMM)',
      img: img10,
    },
    {
      content:
        'Responding to network incidents promptly.       Troubleshooting network issues and outages. Implementing corrective actions to restore network functionality.',
      title: 'Incident Response and Troubleshooting',
      img: img11,
    },
    {
      content:
        'Monitoring network capacity and usage. Planning for network expansions based on growth projections. Optimizing network resources to accommodate increased demand.',
      title: 'Capacity Planning',
      img: img12,
    },
  ];

  return (
    <div>
      <Hero
        image={headerBg}
        title={'Network Maintenance'}
        content={'Home / Server'}
      />
      <ServerStory
        img={storyImg}
        heading={'Network Maintenance'}
        subHeading={
          'We speak the language of routers and switches, fluency guaranteed!'
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

export default NetworkMaintenance;
