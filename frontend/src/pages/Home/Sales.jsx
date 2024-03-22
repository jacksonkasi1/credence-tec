// components
import Typography from '@ui/Typography';

// images
import right from '@assets/images/Services/Sales.png';

// import icon
import { FaArrowRight } from 'react-icons/fa6';

const Sales = () => {
  const content = [
    {
      title: 'Affordability Without Compromise ',
      content:
        'Enjoy cutting-edge technology without breaking the bank. Credence Tec makes advanced solutions accessible to businesses and individuals alike.',
    },
    {
      title: 'Extensive Product Selection',
      content:
        'Find the perfect match for your requirements from our diverse range of products. We bring you options that cater to different preferences, specifications, and budgets.',
    },
    {
      title: 'Customer-Centric Support',
      content:
        'Experience the difference with our customer-centric support. Our team is dedicated to ensuring your satisfaction, making every interaction with Credence Tec a positive one.',
    },
    {
      title: 'Quality Assurance',
      content:
        'While our prices are competitive, we never compromise on quality. Each product undergoes stringent checks to meet the highest standards, ensuring reliability and longevity.',
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 items-start lg:gap-x-20 mt-14">
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

export default Sales;
