// images
import headerBg from '../../../assets/images/ServicesPage/ServicesMantaines/ServerMaintaines/header.webp';
import storyImg from '../../../assets/images/ServicesPage/ServicesMantaines/Database/Story.png';

// components
import Hero from '../../../components/shared/Hero';
import Brands from '@shared/Brands';
import ClientReview from '../../../components/shared/ClientReview';
import ConnectBanner from '../../../components/shared/ConnectBanner';
import SaleServices from '../SaleServices';
import Compare from '../Compare';
import ServerStory from '../ServerStory';

// import contents img
import img1 from '../../../assets/images/ServicesPage/ServicesImg/Database/img1.webp';
import img2 from '../../../assets/images/ServicesPage/ServicesImg/Database/img2.webp';
import img3 from '../../../assets/images/ServicesPage/ServicesImg/Database/img3.webp';
import img4 from '../../../assets/images/ServicesPage/ServicesImg/Database/img4.webp';
import img5 from '../../../assets/images/ServicesPage/ServicesImg/Database/img5.webp';
import img6 from '../../../assets/images/ServicesPage/ServicesImg/Database/img6.webp';
import img7 from '../../../assets/images/ServicesPage/ServicesImg/Database/img7.webp';
import img8 from '../../../assets/images/ServicesPage/ServicesImg/Database/img8.webp';
import img9 from '../../../assets/images/ServicesPage/ServicesImg/Database/img9.webp';
import img10 from '../../../assets/images/ServicesPage/ServicesImg/Database/img10.webp';
import img11 from '../../../assets/images/ServicesPage/ServicesImg/Database/img11.webp';
import img12 from '../../../assets/images/ServicesPage/ServicesImg/Database/img12.webp';

const DatabaseMaintenance = () => {
  const content =
    'Credence Tec offers comprehensive Database Management Services designed to optimize the performance and reliability of your critical databases. Our expert team ensures the seamless operation of your database infrastructure through proactive monitoring, routine maintenance, and swift issue resolution. We specialize in fine-tuning database configurations, implementing security measures, and managing backups to safeguard your valuable data. Credence Tec tailors its services to align with your unique database requirements, delivering cutting-edge solutions that enhance efficiency and minimize downtime. Partner with us to elevate your database performance, ensuring scalability and data integrity. Trust Credence Tec for unparalleled Database Management Services that empower your business with robust and secure data management.';

  const contents = [
    {
      content:
        'Regularly backing up databases to prevent data loss. Implementing and testing database recovery procedures. Establishing and maintaining backup schedules.',
      title: 'Database Backup and Recovery',
      img: img1,
    },
    {
      content:
        'Monitoring database performance metrics.       Identifying and addressing performance bottlenecks. Tuning queries and optimizing database configurations.',
      title: 'Performance Monitoring and Tuning',
      img: img2,
    },
    {
      content:
        'Managing database indexes for improved query performance. Rebuilding or reorganizing indexes to maintain efficiency. Optimizing database schema and table structures.',
      title: 'Indexing and Optimization',
      img: img3,
    },
    {
      content:
        'Applying updates and patches to the DBMS software. Keeping the database management system up-to-date with the latest releases. Implementing security patches to address vulnerabilities.',
      title: 'Software Updates and Patch Management',
      img: img4,
    },
    {
      content:
        'Implementing access controls and user permissions.   Regularly auditing and monitoring database access. Managing encryption and data masking for sensitive information.',
      title: 'Security Management',
      img: img5,
    },
    {
      content:
        'Managing changes to the database schema. Ensuring compatibility with application updates. Documenting and versioning database schema changes.',
      title: 'Database Schema Changes and Evolution',
      img: img6,
    },
    {
      content:
        'Planning and executing database migrations.        Upgrading the DBMS software to newer versions. Ensuring data integrity during migration and upgrades.',
      title: 'Data Migration and Upgrades',
      img: img7,
    },
    {
      content:
        'Implementing database replication for redundancy. Configuring high availability solutions to minimize downtime. Monitoring and managing failover mechanisms',
      title: 'Database Replication and High Availability',
      img: img8,
    },
    {
      content:
        'Analyzing and optimizing database queries.        Tuning SQL statements for better performance. Implementing best practices for efficient query execution.',
      title: 'Query Optimization and SQL Tuning',
      img: img9,
    },
    {
      content:
        'Regularly testing database backups for integrity.      Performing recovery drills to validate backup procedures. Documenting and updating backup and recovery plans.',
      title: 'Backup Validation and Testing',
      img: img10,
    },
    {
      content:
        'Maintaining accurate documentation of database configurations.  Documenting database schema, relationships, and stored procedures. Creating documentation for disaster recovery plans',
      title: 'Database Documentation',
      img: img11,
    },
    {
      content:
        'Conducting regular audits for compliance with industry regulations. Ensuring databases adhere to data protection and privacy standards. Generating audit reports and maintaining compliance documentation.',
      title: 'Database Auditing and Compliance',
      img: img12,
    },
  ];

  return (
    <div>
      <Hero
        image={headerBg}
        title={'Database Management'}
        content={'Home / Services'}
      />
      <ServerStory
        img={storyImg}
        heading={'Database Management'}
        subHeading={
          "Prevent data disasters before they occur. CT’s Proactive DBMS care that's secure"
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

export default DatabaseMaintenance;
