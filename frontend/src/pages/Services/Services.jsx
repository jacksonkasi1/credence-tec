// import component
import Button from '../../components/ui/Button';

// import core package
import { Link } from 'react-router-dom';

const Services = ({ img, title, content }) => {
  return (
    <section className="py-10 bg-[#F2F8FD] sm:py-16 lg:py-24">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="grid  md:grid-cols-2 md:gap-x-20 gap-y-10">
          <div className="relative  sm:pl-6 md:pl-0 xl:pr-0 md:order-1">
            <div className="overflow-hidden w-full h-full !rounded-[10px]">
              <img
                className="object-cover w-full h-full scale-150 !rounded-[10px] overflow-hidden"
                src={img}
                alt=""
              />
            </div>
          </div>

          <div className="md:order-1">
            <h2 className="text-3xl font-bold leading-tight font-oracle text-[#2E2E2E]">
              {title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-secondary_ font-oracle">
              {content}
            </p>

            <Link to="/contact">
              <Button className={'mt-10'}>Contact us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
