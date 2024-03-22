// components
import Typography from '@ui/Typography';
import Carousel from 'react-multi-carousel';

// styles
import 'react-multi-carousel/lib/styles.css';

// images
import image1 from '@assets/svg/Brands/brand1.svg';
import image2 from '@assets/svg/Brands/brand2.svg';
import image3 from '@assets/svg/Brands/brand3.svg';
import image4 from '@assets/svg/Brands/brand4.svg';
import image5 from '@assets/svg/Brands/brand5.svg';
import image6 from '@assets/svg/Brands/brand6.svg';
import image7 from '@assets/svg/Brands/brand7.svg';
import image8 from '@assets/svg/Brands/brand8.svg';
import image9 from '@assets/svg/Brands/brand9.svg';
import image10 from '@assets/svg/Brands/brand10.svg';
import image11 from '@assets/svg/Brands/brand11.svg';
import image12 from '@assets/svg/Brands/brand12.svg';

// carousel responsive object
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  minTablet: {
    breakpoint: { max: 750, min: 550 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 550, min: 350 },
    items: 2,
  },
  minMobile: {
    breakpoint: { max: 350, min: 0 },
    items: 1,
  },
};

const Brands = () => {
  return (
    <div className="flex items-center py-6 flex-col w-[95%] xl:max-w-7xl mx-auto overflow-hidden">
      <Typography
        variant="P_SemiBold_H4"
        type="Georgia"
        className="text-center"
      >
        Over 300+ trusted clients around the world
      </Typography>

      <div className="w-full brands">
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          showDots={true}
          className="w-full"
          responsive={responsive}
        >
          <div>
            <img className="w-[150px] mx-auto" src={image1} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image2} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image3} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image4} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image5} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image6} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image7} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image8} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image9} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto" src={image10} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto mt-4" src={image11} alt="" />
          </div>
          <div>
            <img className="w-[150px] mx-auto mt-4" src={image12} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Brands;
