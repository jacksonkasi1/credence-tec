import React from 'react';

// components
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from '../../../components/ui/Button';
import { motion as m } from 'framer-motion';
import { animationVariants } from '../../../utils/animations';

const TalkWithExpert = () => {
  const content = [
    {
      content:
        'Service and Support for multi-brand, multi-vendor, and multi-technology IT environment',
    },
    {
      content: '360-degree internal audit of software assets',
    },
    {
      content: 'Installation, maintenance, upgrade, and repair of IT hardware',
    },
    {
      content:
        'Installation and maintenance of software– anti-virus, update-monitoring tools, and industry-specific software essentials',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. A risus semper sed at pellentesque pellentesque. Lorem',
    },
    {
      content:
        'Lorem ipsum dolor sit amet consectetur. A risus semper sed at pellentesque pellentesque. Lorem',
    },
  ];
  return (
    <div className="bg-white_ py-[100px]">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <h1 className="text-[25px] font-Georgia font-semibold tracking-wide text-center">
          Credence Tec maintenance advantage
        </h1>
        <div className="md:w-[70%] mt-5 flex flex-col gap-5">
          {content.map((data, i) => (
            <m.div
              initial="initial"
              whileInView="visible"
              variants={animationVariants.r_t_l}
              custom={0.01}
              viewport={{ once: true }}
              key={i}
              className="flex items-center"
            >
              <AiOutlineCheckCircle size={20} className="text-primary-900 min-w-[30px]" />
              <p className="ml-5 text-[14px] sm:text-[16px] font-oracle mt-0.5">
                {data?.content}
              </p>
            </m.div>
          ))}
        </div>
        <Button className={'mt-14'}>Talk with an expert</Button>
      </div>
    </div>
  );
};

export default TalkWithExpert;
