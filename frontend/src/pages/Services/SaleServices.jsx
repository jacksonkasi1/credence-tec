import React, { useState } from 'react';
import OptionImage from '../../components/shared/OptionImage'; // Adjust path as necessary
import OptionItem from '../../components/shared/OptionItem'; // Adjust path as necessary

const SaleServices = ({ content }) => {
  const [active, setActive] = useState(0);

  const handleItemClick = index => {
    setActive(index);
  };

  return (
    <div className="bg-white py-20 lg:py-[100px]">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="mx-auto text-center mb-20">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl font-Georgia tracking-wide">
            Our Offerings
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-secondary font-oracle">
            Innovative Solutions, Unmatched Value: Transforming Your Vision into Reality
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-7 w-full justify-between gap-6">
          <div className="flex col-span-3 flex-col w-full gap-y-5">
            {content?.map((data, i) => (
              <OptionItem
                key={i}
                data={data}
                isActive={active === i}
                onClick={() => handleItemClick(i)}
              />
            ))}
          </div>
          <div className="col-span-4 rounded-[10px] overflow-hidden h-full hidden lg:block">
            {content.map((data, i) => (
              active === i && <OptionImage key={i} src={data.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleServices;
