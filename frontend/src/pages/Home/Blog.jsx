// import core package
import { Link, useNavigate } from 'react-router-dom';

// import images
import img1 from '../../assets/images/blogs/Blog1.png';
import img2 from '../../assets/images/blogs/Blog2.png';
import img3 from '../../assets/images/blogs/Blog3.png';

// components
import { ArrowRight } from 'react-feather';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-[#F5FAFE] sm:py-16 lg:py-20">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-black_ sm:text-4xl font-Georgia">
            Read Our Blog
          </h2>
          <p className="mt-5 font-normal text-gray-600 text-xl font-oracle">
            Where Words Come to Life!
          </p>
        </div>

        <div className="grid grid-cols-1 mx-auto mt-8 sm:mt-16 sm:text-left sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
          <Link
            to="https://credencetecglobal.wordpress.com/2024/03/14/elevating-it-excellence-the-impact-of-rental-equipment-on-the-it-industry/"
            target="_blank"
          >
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="400"
              // onClick={() => navigate('/blog/Elevating-IT-Excellence')}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                  src={img1}
                  alt=""
                />
              </div>
              {/* <p className="mt-6  text-sm font-normal text-gray-600 font-oracle">
                Mar 4, 2024
              </p> */}
              <p className="mt-4 text-xl font-bold text-gray-900 font-oracle">
                Elevating IT Excellence: The Impact of Rental Equipment on the
                IT Industry
              </p>

              <Link
                to="https://credencetecglobal.wordpress.com/2024/03/14/elevating-it-excellence-the-impact-of-rental-equipment-on-the-it-industry/"
                target="_blank"
                className="mt-4 font-oracle flex gap-x-2 text-primary-900 items-center"
              >
                Read More <ArrowRight size={20} />
              </Link>
            </div>
          </Link>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            // onClick={() => navigate('/blog/Why-AMC')}
            className="relative group cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src={img2}
                alt=""
              />
            </div>
            {/* <p className="mt-6 text-sm font-normal text-gray-600 font-oracle">
              Jan 16, 2024
            </p> */}
            <p className="mt-4 text-xl font-bold text-gray-900 font-oracle">
              Why AMC is Crucial for the Smooth Functioning of an IT Company
            </p>
            
            <p
              // href="#"
              className="mt-4 font-oracle flex gap-x-2 text-primary-900 items-center"
            >
              Read More <ArrowRight size={20} />
            </p>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="600"
            // onClick={() => navigate('/blog/Unlocking')}
            className="relative group cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
              <img
                className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
                src={img3}
                alt=""
              />
            </div>
            {/* <p className="mt-6 text-sm font-normal text-gray-600 font-oracle">
              Jan 18, 2024
            </p> */}
            <p className="mt-4 text-xl font-bold text-gray-900 font-oracle">
              Unlocking Efficiency: The Comprehensive Benefits of AMC Services
              by Credence Tec
            </p>

            <p
              // href="#"
              className="mt-4 font-oracle flex gap-x-2 text-primary-900 items-center"
            >
              Read More <ArrowRight size={20} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
