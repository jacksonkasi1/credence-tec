// components
import Typography from '@ui/Typography';

// images
import right from '@assets/images/Services/Rentals.png';

// import icon
import { FaArrowRight } from 'react-icons/fa6';

const Rentals = () => {
  const content = [
    {
      title: 'Latest Desktops and Workstations',
      content: {
        line1: 'Dell Inspiron Desktops',
        line2: 'HP Pavilion Desktops',
        line3: 'Apple iMac',
      },
    },
    {
      title: 'Workstations',
      content: {
        line1: 'HP Z Workstations',
        line2: 'Dell Precision Workstations',
        line3: 'Lenovo ThinkStation',
      },
    },
    {
      title: 'Latest Networking Products',
      content: {
        line1: 'Cisco ISR Series Routers',
        line2: 'TP-Link Archer Series',
        line3: ' Netgear Nighthawk Series',
      },
    },
    {
      title: 'Switches',
      content: {
        line1: 'Cisco Catalyst Series Switches',
        line2: 'HPE Aruba Switches',
        line3: ' Ubiquiti UniFi Switches',
      },
    },
    {
      title: 'Wireless Access Points',
      content: {
        line1: 'Ubiquiti UniFi Access Points',
        line2: 'Cisco Meraki Wireless Access Points',
        line3: 'TP-Link Omada Series',
      },
    },
    {
      title: 'Network Security  Appliances',
      content: {
        line1: 'Cisco ASA Firewalls',
        line2: 'Fortinet FortiGate Security Appliances',
        line3: 'SonicWall TZ Series',
      },
    },
    {
      title: 'Rack Servers',
      content: {
        line1: 'Dell PowerEdge R Series',
        line2: 'HPE ProLiant DL Series',
        line3: 'Lenovo ThinkSystem SR Series',
      },
    },
    {
      title: 'Blade Servers',
      content: {
        line1: 'Cisco UCS Blade Servers',
        line2: 'HPE Synergy Blade Servers',
      },
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
            {/* <p className="text-[13px] font-oracle">{data?.content}</p> */}
            <ul className="font-oracle text-[13px] list-disc pl-5">
              <li>{data?.content?.line1}</li>
              <li>{data?.content?.line2}</li>
              {data?.content?.line3 && <li>{data?.content?.line3}</li>}
            </ul>
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

export default Rentals;
