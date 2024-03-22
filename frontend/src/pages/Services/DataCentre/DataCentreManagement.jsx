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
import img1 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/DataCentre/img12.webp';

const DataCentreManagement = () => {
  const content =
    "Experience seamless Data Centre Management Services with Credence Tec, where innovation meets reliability. Our comprehensive solutions ensure the optimal performance and security of your critical data infrastructure. From robust server maintenance to efficient resource utilization, our expert team render services to meet your unique data centre needs. We specialize in proactive monitoring, rapid issue resolution, and continuous enhancement to keep your data centre at peak efficiency. Credence Tec is committed to delivering cutting-edge solutions that elevate your data centre's resilience and scalability. Trust us to be your strategic partner, providing top-notch Data Centre Management Services that empower your business with a secure and high-performance data environment.";

  const contents = [
    {
      content:
        'Provisioning, configuring, and maintaining servers.        Implementing server updates, patches, and security measures. Monitoring server health and performance.',
      title: 'Server Management',
      img: img1,
    },
    {
      content:
        'Managing storage systems, including SANs and NAS. Allocating and optimizing storage resources. Implementing backup and data recovery solutions.',
      title: 'Storage Management',
      img: img2,
    },
    {
      content:
        'Configuring and maintaining network infrastructure. Monitoring network traffic and performance. Implementing security measures for network protection.',
      title: 'Network Management',
      img: img3,
    },
    {
      content:
        'Developing and implementing backup strategies.       Regularly testing data backup and recovery procedures. Ensuring data integrity and compliance with recovery objectives.',
      title: 'Data Backup and Recovery',
      img: img4,
    },
    {
      content:
        'Managing virtualization platforms and hypervisors.     Allocating and optimizing virtual machine resources. Monitoring virtual machine performance.',
      title: 'Virtualization Management',
      img: img5,
    },
    {
      content:
        'Implementing physical security measures for the data centre. Managing access controls and permissions. Monitoring and responding to security incidents.',
      title: 'Security and Access Control',
      img: img6,
    },
    {
      content:
        'Monitoring and forecasting data centre capacity needs. Planning for expansions and hardware upgrades. Optimizing resource utilization for efficiency.',
      title: 'Capacity Planning',
      img: img7,
    },
    {
      content:
        'Responding to and resolving data center incidents.     Conducting root cause analysis for recurring issues. Implementing corrective actions to prevent future incidents.',
      title: 'Incident Response and Troubleshooting',
      img: img8,
    },
    {
      content:
        'Maintaining comprehensive documentation of data center configurations. Generating reports on data center performance, incidents, and capacity. Documenting changes and updates to the data center infrastructure.',
      title: 'Documentation and Reporting',
      img: img9,
    },
    {
      content:
        'Ensuring compliance with industry standards and regulations. Conducting audits to verify adherence to data centre best practices. Implementing measures to meet data protection and privacy requirements.',
      title: 'Compliance and Standards Adherence',
      img: img10,
    },
    {
      content:
        'Developing and maintaining disaster recovery plans. Conducting regular drills and tests for disaster recovery procedures. Ensuring data centre resilience in the face of catastrophic events',
      title: 'Disaster Recovery Planning',
      img: img11,
    },
    {
      content:
        'Utilizing remote monitoring tools for proactive issue detection. Conducting remote management tasks for efficient operations. Enabling remote troubleshooting and support.',
      title: 'Remote Monitoring and Management (RMM)',
      img: img12,
    },
  ];

  return (
    <div>
      <Hero
        image={headerBg}
        title={'Data Centre Management'}
        content={'Home / Services'}
      />
      <ServerStory
        img={storyImg}
        heading={'Data Centre Management'}
        subHeading={
          'Peak Performance, Zero Downtime. CT’s management that delivers results'
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

export default DataCentreManagement;
