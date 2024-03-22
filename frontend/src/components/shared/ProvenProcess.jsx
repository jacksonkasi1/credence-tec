// images
import bg from '@assets/images/ProvenProcess/bg.webp';

// components
import Typography from '@ui/Typography';

const ProvenProcess = () => {
  const content = [
    {
      title: 'Issue Identification',
      content:
        'Clients raise tickets by reporting technical issues or service requests clearly detailing the problem or task they need assistance with.',
    },
    {
      title: 'Ticket Logging',
      content:
        "Our support team logs each ticket into our system, capturing essential information such as the client's details issue description and priority level.",
    },
    {
      title: 'Assignment to Technicians',
      content:
        'Tickets are assigned to skilled technicians or engineers based on their expertise and workload ensuring the most qualified personnel address each issue.',
    },
    {
      title: 'Spare Part Delivery',
      content:
        "If any spare parts are required to address the issue our dedicated logistics team swiftly procures from our warehouse and dispatches the necessary components ensuring a seamless resolution to the client's concern.",
    },
    {
      title: 'Resolution and Documentation',
      content:
        'Technicians work diligently to resolve the issue documenting the steps taken and any solutions applied. Clear communication is maintained with the client throughout the process.',
    },
    {
      title: 'Closure and Feedback',
      content:
        'Once the issue is resolved, the ticket is marked as closed. Clients are encouraged to provide feedback on the resolution process helping us continually improve our services.',
    },
  ];
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="py-[70px]">
      <div className="w-[95%] xl:max-w-7xl mx-auto flex flex-col items-center">
        <Typography
          variant="P_Bold_H3"
          type="Georgia"
          className="text-white_ text-center"
        >
          {' '}
          Service Delivery Process Flow{' '}
        </Typography>
        <Typography
          variant="P_Regular_H6"
          type="oracle"
          className="text-[#E7E3DF] mt-4 max-w-[600px] text-center leading-[30px]"
        >
          Our Proactive Approach to IT Maintenance
        </Typography>
        <div className="w-[90%] md:max-w-[70%] grid grid-cols-1 lg:grid-cols-2 mt-12 gap-7">
          {content.map((data, i) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={i}
              className="bg-white_ rounded-[5px] p-5 lg:p-8 flex gap-2 lg:gap-4"
            >
              <div>
                <Typography
                  variant="P_Bold_H4"
                  className="text-primary-900 mt-[2px]  !text-[20px] block"
                >
                  0{i + 1}
                </Typography>
              </div>
              <div className="flex flex-col ml-3">
                <Typography
                  variant="P_SemiBold_H7"
                  type="oracle"
                  className="text-black_  !text-[20px]"
                >
                  {data?.title}
                </Typography>
                <Typography
                  variant="P_Regular_H7"
                  type="oracle"
                  className="text-black_ mt-4 !text-[16px]"
                >
                  {data?.content}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProvenProcess;
