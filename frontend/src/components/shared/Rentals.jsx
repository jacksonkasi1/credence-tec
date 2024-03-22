// components
import Typography from '@ui/Typography';

// images
import img1 from '../../assets/images/Services/Rentals/img1.webp';
import img2 from '../../assets/images/Services/Rentals/img2.webp';
import img3 from '../../assets/images/Services/Rentals/img3.webp';
import img4 from '../../assets/images/Services/Rentals/img4.webp';
import img5 from '../../assets/images/Services/Rentals/img5.webp';
import img6 from '../../assets/images/Services/Rentals/img6.webp';
import img7 from '../../assets/images/Services/Rentals/img7.webp';
import img8 from '../../assets/images/Services/Rentals/img8.webp';

// import icon
import { FaArrowRight } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Rentals = () => {
  const [rightImg, setRightImg] = useState(0);

  const handleImg = (index) => {
    setRightImg(index);
  };

  const content = [
    {
      title: 'Latest Desktops and Workstations',
      content: {
        line1: 'Dell Inspiron Desktops',
        line2: 'HP Pavilion Desktops',
        line3: 'Apple iMac',
      },
      img: img1,
    },
    {
      title: 'Workstations',
      content: {
        line1: 'HP Z Workstations',
        line2: 'Dell Precision Workstations',
        line3: 'Lenovo ThinkStation',
      },
      img: img2,
    },
    {
      title: 'Latest Networking Products',
      content: {
        line1: 'Cisco ISR Series Routers',
        line2: 'TP-Link Archer Series',
        line3: ' Netgear Nighthawk Series',
      },
      img: img3,
    },
    {
      title: 'Switches',
      content: {
        line1: 'Cisco Catalyst Series Switches',
        line2: 'HPE Aruba Switches',
        line3: ' Ubiquiti UniFi Switches',
      },
      img: img4,
    },
    {
      title: 'Wireless Access Points',
      content: {
        line1: 'Ubiquiti UniFi Access Points',
        line2: 'Cisco Meraki Wireless Access Points',
        line3: 'TP-Link Omada Series',
      },
      img: img5,
    },
    {
      title: 'Network Security  Appliances',
      content: {
        line1: 'Cisco ASA Firewalls',
        line2: 'Fortinet FortiGate Security Appliances',
        line3: 'SonicWall TZ Series',
      },
      img: img6,
    },
    {
      title: 'Rack Servers',
      content: {
        line1: 'Dell PowerEdge R Series',
        line2: 'HPE ProLiant DL Series',
        line3: 'Lenovo ThinkSystem SR Series',
      },
      img: img7,
    },
    {
      title: 'Blade Servers',
      content: {
        line1: 'Cisco UCS Blade Servers',
        line2: 'HPE Synergy Blade Servers',
      },
      img: img8,
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
                  className="object-cover w-full max-h-[1140px]  rounded-[20px]"
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

              <ul className="font-oracle  list-disc pl-5">
                <li>{data?.content?.line1}</li>
                <li>{data?.content?.line2}</li>
                {data?.content?.line3 && <li>{data?.content?.line3}</li>}
              </ul>
            </div>
            <Link to="/rental">
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

export default Rentals;
