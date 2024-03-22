import React from 'react';

const OptionItem = ({ data, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? 'bg-primary-900' : 'bg-[#F1F1F1]'
      } rounded-[10px] px-[15px] py-[20px] w-full transition-all duration-300 cursor-pointer`}
    >
      <h1
        className={`${
          isActive ? 'text-white_' : 'text-black'
        } text-[20px] font-Georgia`}
      >
        {data?.title}
      </h1>
      {isActive && (
        <div>
          <p
            className={`${
              isActive ? 'text-white_' : 'text-black'
            } mt-3 text-[14px] md:text-base font-oracle`}
          >
            {data?.content}
          </p>
          {data?.point?.map((p, idx) => (
            <ul key={idx} className="list-disc pl-5 font-oracle">
              <li
                className={`${
                  isActive ? 'text-white_' : 'text-black'
                } mt-3 text-[14px] md:text-base font-oracle`}
              >
                {p.line}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default OptionItem;
