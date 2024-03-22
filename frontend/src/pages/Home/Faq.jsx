// import core package
import React, { useState } from 'react';

//  import icons
import { FaRegWindowMinimize } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: 'Why should I consider Credence Tec for IT services?',
      answer:
        'Credence Tec stands out as a preferred choice for IT services due to its robust team of highly skilled technicians and engineers. Our professionals bring a wealth of technical expertise and experience to the table, ensuring that your IT infrastructure is in capable hands. Moreover, we offer affordable and competitive commercial packages, making Credence Tec a reliable partner for your IT support needs.',
      open: false,
    },
    {
      question: 'What services does Credence Tec provide?',
      answer:
        'Credence Tec specializes in a comprehensive range of IT services, including but not limited to:',
      point: [
        { line: 'Annual Maintenance Contracts (AMC) for IT systems' },
        { line: 'Server and Storage Maintenance' },
        { line: 'Desktop and Laptop Maintenance' },
        { line: 'Network Maintenance' },
        { line: 'Hardware Rental Services' },
        { line: 'Firmware Updates and Support' },
        { line: 'On-Demand Technical Support' },
      ],
      open: false,
    },
    {
      question: 'How experienced is the technical team at Credence Tec?',
      answer:
        'Our technical team at Credence Tec comprises seasoned professionals with a wealth of experience in the IT industry. Each member of our team undergoes rigorous training and possesses the necessary certifications to handle diverse IT challenges effectively.',
      open: false,
    },
    {
      question: 'What sets Credence Tec apart from other IT service providers?',
      answer:
        'Credence Tec distinguishes itself through a combination of factors, including:',
      point: [
        { line: 'Annual Maintenance Contracts (AMC) for IT systems' },
        {
          line: 'Proven Track Record: With a successful history of serving diverse clients, we have a track record of delivering reliable and efficient IT solutions.',
        },
        {
          line: 'Global Presence: Headquartered in Chennai, Credence Tec has an international presence in China, Malaysia, and Gulf Countries, enabling us to serve clients globally.',
        },
        {
          line: 'Client-Centric Approach: Our client-centric approach ensures that we tailor our services to meet the unique needs and challenges of each client.',
        },
        {
          line: 'Cost-Effective Solutions: We offer competitive and affordable commercial packages, ensuring that our clients receive value for their investment.',
        },
        {
          line: "Sales of new equipment: comprehensive range of high-quality IT equipment tailored to your needs. Whether you're upgrading your infrastructure or starting anew, Credence Tec offers top-notch products, ensuring reliability and cutting-edge technology.",
        },
        {
          line: 'Rental Services:  Optimize your resource utilization with our IT equipment rental services. From servers and storage to laptops and network switches, access state-of-the-art technology on a flexible rental basis, meeting your requirements.',
        },
      ],
      open: false,
    },
    {
      question: 'Does Credence Tec provide 24/7 support?',
      answer:
        'Yes, Credence Tec understands the critical nature of IT infrastructure. Therefore, we provide round-the-clock support to address any issues or emergencies that may arise, ensuring minimal downtime for your operations.',
      open: false,
    },
    {
      question: 'How can I initiate a partnership with Credence Tec?',
      answer:
        'Initiating a partnership with Credence Tec is simple. You can reach out to our team through our website or contact us directly via email or phone. Our representatives will guide you through the process of understanding your specific requirements and tailoring a solution that best suits your needs.',
      open: false,
    },
    {
      question: 'What geographical locations does Credence Tec serve?',
      answer:
        'Credence Tec offers its IT services across India and internationally, with a presence in China, Malaysia, and Gulf Countries. Our widespread coverage ensures that clients from various locations can benefit from our expertise and support.',
      open: false,
    },
    {
      question:
        'Why should I choose Credence Tec over OEM for IT maintenance services?',
      answer:
        'Credence Tec offers several advantages over Original Equipment Manufacturer (OEM) services. Firstly, we provide personalized and flexible solutions tailored to your specific needs. Our services are not confined to a particular brand or model, allowing us to support a diverse range of equipment from multiple vendors. Additionally, Credence Tec often presents a cost-effective alternative to OEM services, offering competitive pricing without compromising on quality. We pride ourselves on quick response times, ensuring prompt issue resolution and minimal downtime. Ultimately, our third-party maintenance services are designed to deliver value, reliability, and a customer-centric approach.',
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      }),
    );
  };

  return (
    <section className="py-10 bg-[#F5FAFE] sm:py-16 lg:py-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="max-w-2xl text-center mx-auto ">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl font-Georgia tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 font-oracle">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 "
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-semibold text-black font-oracle !text-start">
                  {' '}
                  {item.question}{' '}
                </span>

                {!item.open ? (
                  <FaPlus className="text-primary-900 text-xl" />
                ) : (
                  <FaRegWindowMinimize className="text-primary-900 text-xl" />
                )}
              </button>

              <div
                className={`${
                  item.open ? 'block' : 'hidden'
                } px-4 pb-5 sm:px-6 sm:pb-6 !text-start font-oracle`}
              >
                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                {item?.point &&
                  item?.point.map((p, idx) => (
                    <ul key={idx} className="list-disc pl-5 font-oracle">
                      <li>{p.line}</li>
                    </ul>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
