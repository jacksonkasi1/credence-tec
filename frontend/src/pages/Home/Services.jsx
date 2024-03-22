import React, { useState } from 'react';

// components
import Typography from '@ui/Typography';

// images
import Maintenance from '../../components/shared/Maintenance';
import Sales from '../../components/shared/Sales';
import Rentals from '../../components/shared/Rentals';

const tabs = [
  {
    btnName: 'Maintenance Services',
  },
  {
    btnName: 'Sales',
  },
  {
    btnName: 'Rentals',
  },
];

const items = [
  { item: <Maintenance /> },
  { item: <Sales /> },
  { item: <Rentals /> },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const handleTabClick = (index) => {
    setActive(index);
  };
  return (
    <div name="services" className="bg-[#F5FAFE]">
      <div className="w-[95%] xl:max-w-7xl mx-auto flex flex-col items-center py-[90px]">
        <Typography variant="P_Bold_H3" type="Georgia">
          Services Highlights
        </Typography>
        <Typography
          variant="P_Regular_H6"
          type="oracle"
          className="mt-3 text-secondary_ text-center"
        >
          Seamless Solutions, Swiftly Delivered - Your IT Journey, Our Expertise
        </Typography>

        <div className="flex items-center  w-full justify-center mt-9 flex-wrap  gap-6">
          {tabs.map((tab, idx) => (
            <div key={idx}>
              <button
                onClick={() => handleTabClick(idx)}
                className={`font-oracle text-[14px] text-primary-900 hover:text-white border-primary-900 duration-500 hover:bg-primary-900 border-[2px] bg-primary-900 px-4 py-2 pt-3 rounded-[5px] ${
                  active === idx
                    ? '!bg-primary-900 !text-white'
                    : 'bg-transparent'
                }`}
              >
                {tab.btnName}
              </button>
            </div>
          ))}
        </div>

        {items.map(
          (item, idx) => active === idx && <div key={idx}>{item.item}</div>,
        )}
      </div>
    </div>
  );
};

export default Services;
