// components
import Typography from '@ui/Typography';

// images
import img1 from '../../assets/images/Services/Maintenance/img1.webp';
import img2 from '../../assets/images/Services/Maintenance/img2.webp';
import img3 from '../../assets/images/Services/Maintenance/img3.webp';
import img4 from '../../assets/images/Services/Maintenance/img4.webp';
import img5 from '../../assets/images/Services/Maintenance/img5.webp';
import img6 from '../../assets/images/Services/Maintenance/img6.webp';
import img7 from '../../assets/images/Services/Maintenance/img7.webp';
import img8 from '../../assets/images/Services/Maintenance/img8.webp';

// import icon
import { FaArrowRight } from 'react-icons/fa6';

// import core package
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  const [rightImg, setRightImg] = useState(0);

  const handleImg = (index) => {
    setRightImg(index);
  };

  const content = [
    {
      title: 'Server Maintenance',
      content:
        'Servers are the backbone of your IT infrastructure. Our Server Maintenance services are designed to ensure your servers operate at peak performance, minimizing downtime and preventing costly disruptions',
      img: img1,
      url: '/services/server-maintenance',
    },
    {
      title: 'Network Maintenance',
      content:
        'A reliable network is crucial for your business operations. Our Network Maintenance services guarantee that your network infrastructure remains robust and efficient.',
      img: img2,
      url: '/services/network-maintenance',
    },
    {
      title: 'Storage Maintenance',
      content:
        'Efficient data storage is essential for modern businesses. Our Storage Maintenance services are tailored to maintain your data storage systems, ensuring data security and accessibility.',
      img: img3,
      url: '/services/storage-maintenance',
    },
    {
      title: 'Database Management',
      content:
        'Databases are the heart of your business operations. Our Database Management services handle everything from setup to optimization.',
      img: img4,
      url: '/services/database-maintenance',
    },
    {
      title: 'End-User Maintenance',
      content:
        'Your employees rely on end-user devices for productivity. Our End-User Maintenance services focus on keeping these devices in top shape.',
      img: img5,
      url: '/services/end-user-maintenance',
    },
    {
      title: 'Data Centre Management ',
      content:
        'Data centres require specialized care. Our Data Centre Management services focus on optimizing data centre performance, ensuring efficient cooling, power distribution, and security.',
      img: img6,
      url: '/services/data-centre-management',
    },
    {
      title: 'Facility Management ',
      content:
        'Facility management is vital for a comfortable and productive work environment. Our Facility Management Services cover everything from security to maintenance.',
      img: img7,
      url: '/services/facility-management',
    },
    {
      title: 'A/V Maintenance',
      content:
        'Audio/Visual equipment plays a crucial role in modern business communication. Our A/V Maintenance services guarantee that your presentation and communication tools are always ready when you need them.',
      img: img8,
      url: '/services/av-maintenance',
    },
  ];

  return (
    <div className="grid  grid-cols-1 gap-y-12 lg:grid-cols-7 lg:gap-x-20 items-start  mt-14">
      <div className="lg:col-span-3 lg:order-last hidden lg:block">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"
          className="relative overflow-hidden"
        >
          {content.map(
            (data, i) =>
              rightImg === i && (
                <img
                  key={i}
                  className="object-cover w-full max-h-[1140px]  rounded-[20px]"
                  src={data.img}
                  alt=""
                />
              ),
          )}
        </div>
      </div>

      <div className="lg:col-span-4 max-h-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content.map((data, i) => (
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            onClick={() => handleImg(i)}
            key={i}
            className="bg-white_ p-[20px] !h-auto rounded-[8px] border-[1px] border-transparent hover:border-[#236DF8] transition-all duration-300 hover:shadow-custom cursor-pointer flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-[20px] font-semibold font-oracle mb-4">
                {data.title}
              </h3>
              <p className=" font-oracle">{data?.content}</p>
            </div>
            <Link to={data.url}>
              <Typography
                variant="P_Regular_H6"
                type="Georgia"
                className="text-primary-900 mt-6 block"
              >
                Explore <FaArrowRight className="inline ml-1" />
              </Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maintenance;
