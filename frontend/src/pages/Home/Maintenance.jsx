// components
import Typography from '@ui/Typography';

// images
import right from '@assets/images/Services/right.png';

// import icon
import { FaArrowRight } from 'react-icons/fa6';

const Maintenance = () => {
  const content = [
    {
      title: 'Server Maintenance',
      content:
        'Servers are the backbone of your IT infrastructure. Our Server Maintenance services are designed to ensure your servers operate at peak performance, minimizing downtime and preventing costly disruptions',
    },
    {
      title: 'Network Maintenance',
      content:
        'A reliable network is crucial for your business operations. Our Network Maintenance services guarantee that your network infrastructure remains robust and efficient.',
    },
    {
      title: 'Storage Maintenance',
      content:
        'Efficient data storage is essential for modern businesses. Our Storage Maintenance services are tailored to maintain your data storage systems, ensuring data security and accessibility.',
    },
    {
      title: 'Database Management',
      content:
        'Databases are the heart of your business operations. Our Database Management services handle everything from setup to optimization.',
    },
    {
      title: 'End-User Maintenance',
      content:
        'Your employees rely on end-user devices for productivity. Our End-User Maintenance services focus on keeping these devices in top shape.',
    },
    {
      title: 'Data Centre Management ',
      content:
        'Data centres require specialized care. Our Data Centre Management services focus on optimizing data centre performance, ensuring efficient cooling, power distribution, and security.',
    },
    {
      title: 'Facility Management ',
      content:
        'Facility management is vital for a comfortable and productive work environment. Our Facility Management Services cover everything from security to maintenance.',
    },
    {
      title: 'A/V Maintenance',
      content:
        'Audio/Visual equipment plays a crucial role in modern business communication. Our A/V Maintenance services guarantee that your presentation and communication tools are always ready when you need them.',
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 lg:gap-x-20 mt-14">
      <div className="lg:col-span-3 lg:order-last">
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-full max-h-[1030px]  rounded-[20px]"
            src={right}
            alt=""
          />
        </div>
      </div>

      <div className="lg:col-span-4 max-h-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content.map((data, i) => (
          <div
            key={i}
            className="bg-white_ p-[20px] !h-auto rounded-[8px] border-[1px] border-transparent hover:border-[#236DF8] transition-all duration-300 hover:shadow-custom cursor-pointer"
          >
            <h3 className="text-[18px] font-semibold font-oracle mb-4">
              {data.title}
            </h3>
            <p className="text-[13px] font-oracle">{data?.content}</p>
            <Typography
              variant="P_Regular_H6"
              type="Georgia"
              className="text-primary-900 mt-6 block"
            >
              Explore <FaArrowRight className="inline ml-1" />
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maintenance;
