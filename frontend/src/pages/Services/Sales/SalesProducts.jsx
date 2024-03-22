// images
import img1 from '../../../assets/images/ServicesPage/Sales/Products/Product1.png';
import img2 from '../../../assets/images/ServicesPage/Sales/Products/Product2.png';
import img3 from '../../../assets/images/ServicesPage/Sales/Products/Product3.png';
import img4 from '../../../assets/images/ServicesPage/Sales/Products/Product4.png';
import img5 from '../../../assets/images/ServicesPage/Sales/Products/Product5.png';
import img6 from '../../../assets/images/ServicesPage/Sales/Products/Product6.png';

const SalesProducts = () => {
  const content = [
    {
      img: img1,
      content: 'Laptops / Desktops / Workstations',
    },
    {
      img: img2,
      content: 'Server',
    },
    {
      img: img3,
      content: 'Storages',
    },
    {
      img: img4,
      content: 'Networking Products',
    },
    {
      img: img5,
      content: 'Spares / Parts',
    },
    {
      img: img6,
      content: 'Printer',
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
            Dive into a world of possibilities with our extensive range of
            products.
          </p>
        </div>

        <div className="grid grid-cols-1  gap-6 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-3">
          {content.map((data, i) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={i}
              className=" rounded-lg relative group bg-[#F2F8FD]"
            >
              <div className="overflow-hidden aspect-w-1 aspect-h-1 relative over rounded-lg h-[374px]">
                <img
                  className="object-contain w-full h-full transition-all duration-300 group-hover:scale-125 cursor-pointer p-8"
                  src={data?.img}
                  alt=""
                />

                <div className="absolute left-0 bottom-0 w-full bg-primary-900">
                  <p className="text-center font-oracle text-white_ py-1 text-[14px]">
                    {data.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesProducts;
