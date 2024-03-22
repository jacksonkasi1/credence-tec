// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import storyImg from '../../../assets/images/ServicesPage/ServicesMantaines/StorageMaintaines/story.png';

// components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import SaleServices from '../SaleServices';
import Compare from '../Compare';
import ServerStory from '../ServerStory';

// import contents img
import img1 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/StorageMaintenance/img12.webp';

const StorageMaintenance = () => {
  const content =
    "Discover unparalleled Storage Maintenance Services at Credence Tec, designed to optimize and safeguard your critical data infrastructure. Our expert team ensures the seamless operation of your storage systems, offering proactive maintenance, swift issue resolution, and continuous performance enhancement. From routine check-ups to intricate problem-solving, we tailor our services to meet your unique storage needs. Credence Tec is committed to maximizing the reliability and efficiency of your storage environment, minimizing the risk of data loss and ensuring business continuity. Partner with us for cutting-edge solutions that keep your storage infrastructure secure, resilient, and ready to support your organization's evolving needs. Trust Credence Tec to be your dedicated partner in maintaining the backbone of your data management.";

  const contents = [
    {
      content:
        'Regular inspection of storage hardware components. Testing and replacing faulty components such as hard drives, controllers, and power supplies. Cleaning and preventive maintenance to avoid dust and debris-related issues.',
      title: 'Hardware Inspection and Maintenance',
      img: img1,
    },
    {
      content:
        'Applying firmware updates to storage devices.      Updating storage management software. Installing patches for security and performance improvements',
      title: 'Firmware and Software Updates',
      img: img2,
    },
    {
      content:
        'Regularly backing up critical data. Testing and verifying data backups for integrity. Implementing and updating disaster recovery plans for storage systems.',
      title: 'Data Backup and Recovery',
      img: img3,
    },
    {
      content:
        'Monitoring storage capacity and usage. Planning and implementing storage expansions when needed. Optimizing storage configurations for performance.',
      title: 'Capacity Planning and Optimization',
      img: img4,
    },
    {
      content:
        'Monitoring storage performance metrics.Identifying and addressing performance bottlenecks. Fine-tuning storage configurations for optimal efficiency',
      title: 'Performance Monitoring and Tuning',
      img: img5,
    },
    {
      content:
        'Managing and updating storage virtualization solutions. Allocating and optimizing virtual storage resources. Monitoring the performance of virtualized storage environments.',
      title: 'Storage Virtualization Management',
      img: img6,
    },
    {
      content:
        'Implementing security measures to protect stored data.Managing access controls and permissions for storage systems. Implementing encryption for sensitive data stored on the storage infrastructure.',
      title: 'Data Security and Encryption',
      img: img7,
    },
    {
      content:
        'Configuring and managing RAID (Redundant Array of Independent Disks) setups. Rebuilding RAID arrays in case of disk failures. Monitoring RAID health and taking corrective actions.',
      title: 'RAID Configuration and Management',
      img: img8,
    },
    {
      content:
        'Managing storage area networks (SANs) and network-attached storage (NAS) systems. Configuring and optimizing storage network connections.Monitoring and managing Fiber Channel or Ethernet connectivity',
      title: 'Storage Networking Services',
      img: img9,
    },
    {
      content:
        'Maintaining accurate documentation of storage configurations. Generating reports on storage health, performance, and usage. Documenting changes and updates to storage systems.',
      title: 'Documentation and Reporting',
      img: img10,
    },
    {
      content:
        'Coordinating with storage hardware and software vendors for support. Engaging with vendor technical support for issue resolution. Managing warranty and support agreements.',
      title: 'Vendor Support Coordination',
      img: img11,
    },
    {
      content:
        'Ensuring storage systems comply with data retention policies. Managing compliance with industry regulations related to data storage.',
      title: 'Compliance and Data Retention',
      img: img12,
    },
  ];
  return (
    <div>
      <Hero
        image={headerBg}
        title={'Storage Maintenance'}
        content={'Home / Storage'}
      />
      <ServerStory
        img={storyImg}
        heading={'Storage Maintenance'}
        subHeading={
          'Maximize space, minimize stress. Storage maintenance made easy'
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

export default StorageMaintenance;
