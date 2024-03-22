import React from 'react';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} font-oracle text-[14px] text-white_ border-primary-900 hover:border-blue-700 hover:bg-blue-700 duration-500 border-[2px] bg-primary-900 px-4 py-2 pt-3 rounded-[5px]`}
    >
      {children}
    </button>
  );
};

export default Button;
