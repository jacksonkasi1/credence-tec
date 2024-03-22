import React, { useEffect, useState } from 'react';
import { menuItems } from './menu-items';
import { Link } from 'react-router-dom';

const MenuItems = ({ search }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = menuItems.filter((el) =>
      el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    setItems(filteredItems);
  }, [search]);

  return (
    <div className="absolute top-10 0 w-full bg-white   ">
      <ul className="font-oracle py-4 border-b-[5px] border-primary-900 !tracking-wide">
        {items.length > 0 ? (
          items.slice(0, 7).map((item, index) => (
            <Link key={index} to={item.href}>
              <li className="flex gap-2 items-center px-4 py-2 hover:bg-[#F2F8FD] border-b ">
                <img className="h-5 w-5" src={item.icon} alt="" />
                <p className="text-[13px]">{item.name}</p>
              </li>
            </Link>
          ))
        ) : (
          <li className="text-[13px] px-4">Not Found !</li>
        )}
      </ul>
    </div>
  );
};

export default MenuItems;
