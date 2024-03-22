// components
import Typography from '@ui/Typography';

// images
import img1 from '../../assets/images/Services/Sales/img1.webp';
import img2 from '../../assets/images/Services/Sales/img2.webp';
import img3 from '../../assets/images/Services/Sales/img3.webp';
import img4 from '../../assets/images/Services/Sales/img4.webp';

// import icon
import { FaArrowRight } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sales = () => {
  const [rightImg, setRightImg] = useState(0);

  const handleImg = (index) => {
    setRightImg(index);
  };

  const content = [
    {
      title: 'Affordability Without Compromise ',
      content:
        'Enjoy cutting-edge technology without breaking the bank. Credence Tec makes advanced solutions accessible to businesses and individuals alike.',
      img: img1,
    },
    {
      title: 'Extensive Product Selection',
      content:
        'Find the perfect match for your requirements from our diverse range of products. We bring you options that cater to different preferences, specifications, and budgets.',
      img: img2,
    },
    {
      title: 'Customer-Centric Support',
      content:
        'Experience the difference with our customer-centric support. Our team is dedicated to ensuring your satisfaction, making every interaction with Credence Tec a positive one.',
      img: img3,
    },
    {
      title: 'Quality Assurance',
      content:
        'While our prices are competitive, we never compromise on quality. Each product undergoes stringent checks to meet the highest standards, ensuring reliability and longevity.',
      img: img4,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-7 items-start lg:gap-x-20 mt-14">
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
                  className="object-cover w-full max-h-[1140px] rounded-[20px]"
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
            <Link to="/sales">
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

export default Sales;
