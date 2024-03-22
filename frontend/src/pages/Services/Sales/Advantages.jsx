// import component
import Typography from '../../../components/ui/Typography';

// import image
import bg from '../../../assets/images/Advantages/bg.webp';

const Advantages = () => {
  
  const content = [
    {
      title: 'Low Cost, High Value',
      des: 'At Credence Tec, we understand the importance of a budget-friendly approach without compromising on quality. Our products and services are strategically priced to offer you the best value in the market. Experience cost-effectiveness without sacrificing performance or reliability.',
    },
    {
      title: 'Variety Beyond Compare',
      des: "Dive into a world of possibilities with our extensive range of products. Whether you're seeking cutting-edge desktops, powerful workstations, reliable networking equipment, robust servers, or scalable storage solutions, Credence Tec has it all. Our diverse product portfolio ensures that you find the perfect fit for your unique needs.",
    },
    {
      title: 'Impeccable Support at Every Step',
      des: "Your journey with Credence Tec is not just about products; it's about a partnership built on unwavering support. Our dedicated team is committed to providing impeccable assistance throughout your experience. From pre-purchase inquiries to post-purchase support, we're here for you. Count on us for quick responses, expert guidance, and prompt issue resolution",
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="py-10 bg-[#F2F8FD] sm:py-16 lg:py-24 bg-cover bg-no-repeat "
    >
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className=" mx-auto text-center">
          <Typography
            variant="P_Bold_H3"
            type="Georgia"
            className="mt-6 leading-tight text-white "
          >
            Our Advantages
          </Typography>
          <p className="mt-4 text-[#E7E3DF] text-sm leading-relaxed text- font-oracle">
            Unmatched Value with Credence Tec: Your Affordable Technology
            Partner
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:mt-20 lg:gap-x-12 justify-center">
          {content?.map((data, i) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={i}
              className="bg-white rounded-[10px] border-[1px] border-transparent hover:border-[#236DF8] transition-all duration-300 hover:shadow-custom cursor-pointer"
            >
              <div className="py-10 font-oracle px-6 ">
                <h3 className="mt-4 text-xl  font-semibold text-black">
                  {data.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 ">{data.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
