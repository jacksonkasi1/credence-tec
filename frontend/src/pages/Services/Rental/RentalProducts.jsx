// images
import img1 from '../../../assets/svg/ServicesPage/Products/Product1.webp';
import img2 from '../../../assets/svg/ServicesPage/Products/Product2.webp';
import img3 from '../../../assets/svg/ServicesPage/Products/Product3.webp';
import img4 from '../../../assets/svg/ServicesPage/Products/Product4.webp';
import img5 from '../../../assets/svg/ServicesPage/Products/Product5.webp';
import img6 from '../../../assets/svg/ServicesPage/Products/Product6.webp';
import img7 from '../../../assets/svg/ServicesPage/Products/Product7.webp';
import img8 from '../../../assets/svg/ServicesPage/Products/Product8.webp';
import img9 from '../../../assets/svg/ServicesPage/Products/Product9.webp';
import img10 from '../../../assets/svg/ServicesPage/Products/Product10.webp';
import img11 from '../../../assets/svg/ServicesPage/Products/Product11.webp';
import img12 from '../../../assets/svg/ServicesPage/Products/Product12.webp';

// import core package
import { useState } from 'react';

const RentalProducts = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const content = [
    {
      img: img1,
      content: 'Laptops / Desktops ',

      point: ['Dell Inspiron Desktops', 'HP Pavilion Desktops', 'Apple iMac'],
    },
    {
      img: img2,
      content: 'Workstations',
      point: [
        'HP Z Workstations',
        'Dell Precision Workstations',
        'Lenovo ThinkStation',
      ],
    },
    {
      img: img3,
      content: 'Latest Networking Products',
      point: [
        'Cisco ISR Series Routers',
        'TP-Link Archer Series',
        ' Netgear Nighthawk Series',
      ],
    },
    {
      img: img4,
      content: 'Switches',
      point: [
        'Cisco Catalyst Series Switches',
        'HPE Aruba Switches',
        'Ubiquiti UniFi Switches',
      ],
    },
    {
      img: img5,
      content: 'Wireless Access Points',
      point: [
        'Ubiquiti UniFi Access Points',
        'Cisco Meraki Wireless Access Points',
        'TP-Link Omada Series',
      ],
    },
    {
      img: img6,
      content: 'Network Security Appliances',
      point: [
        'Cisco ASA Firewalls',
        'Fortinet FortiGate Security Appliances',
        'SonicWall TZ Series',
      ],
    },
    {
      img: img7,
      content: 'Latest Server Products',
      point: [
        'Dell PowerEdge T Series',
        'HPE ProLiant ML Series',
        'Lenovo ThinkSystem ST Series',
      ],
    },
    {
      img: img8,
      content: 'Rack Servers',
      point: [
        'Dell PowerEdge R Series',
        'HPE ProLiant DL Series',
        'Lenovo ThinkSystem SR Series',
      ],
    },
    {
      img: img9,
      content: 'Blade Servers',
      point: ['Cisco UCS Blade Servers', 'HPE Synergy Blade Servers'],
    },
    {
      img: img10,
      content: 'Latest Storage Products',
      point: [
        'Seagate Backup Plus Series',
        'Western Digital My Passport Series',
        'LaCie Rugged Series',
      ],
    },
    {
      img: img11,
      content: 'Network Attached Storage',
      point: [
        'Synology DiskStation Series',
        'QNAP Turbo NAS Series',
        ' Buffalo LinkStation Series',
      ],
    },
    {
      img: img12,
      content: 'Enterprise Storage',
      point: ['Dell EMC PowerStore', 'HPE Nimble Storage', 'NetApp FAS Series'],
    },
  ];

  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className=" mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl font-Georgia tracking-wide">
          Our Offerings
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-oracle">
            Laptop, Desktop, Workstation, Networking Products, Server and
            Storage Range Includes:
          </p>
        </div>

        <div className="grid grid-cols-1  gap-6 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-3">
          {content.map((data, i) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={i}
              onClick={() => handleCardClick(i)}
              className=" rounded-lg relative group bg-[#F2F8FD]"
            >
              <div className="overflow-hidden aspect-w-1 aspect-h-1 relative over rounded-lg h-[374px]">
                <img
                  className="object-contain w-full h-full transition-all duration-300 group-hover:scale-125 cursor-pointer p-8"
                  src={data?.img}
                  alt=""
                />

                <div
                  className={`${
                    activeCard === i && 'hidden'
                  } absolute left-0 bottom-0 w-full bg-primary-900`}
                >
                  <p className="text-center font-oracle text-white_ py-1 text-[14px]">
                    {data.content}
                  </p>
                </div>
              </div>
              {activeCard === i && (
                <div className="absolute rounded-lg left-0 top-0 w-full h-full bg-gradient-to-b from-primary-900 to-primary-600/40 cursor-pointer py-10 px-6">
                  <h2 className="font-semibold font-oracle text-xl text-white">
                    {data.content}
                  </h2>
                  <ul className="font-oracle list-disc ml-8 text-white mt-6">
                    {data.point.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalProducts;
