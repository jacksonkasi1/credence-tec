// import core package
import { Link } from 'react-router-dom';

// components
import Header from '../template/Header';
import Typography from '@ui/Typography';
import Button from '../ui/Button';

// import third party package
import { Link as ScrollLink } from 'react-scroll';

const Hero = ({ status, title, content, image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full bg-cover"
    >
      <div className="w-[95%]  xl:max-w-7xl mx-auto">
        <Header />

        {status === 'Home' ? (
          <div className="mt-20 lg:mt-[150px]  md:w-1/2 flex flex-col pb-10 lg:pb-[130px]">
            <Typography
              shadow={true}
              variant="P_SemiBold_H3"
              type="Georgia"
              className="text-white_ !leading-[48px]"
            >
              Seamless IT Performance, <br /> Year-round Assurance
            </Typography>
            <Typography variant="P_Regular_H6" className="mt-4 text-white_">
              Credence Tec offers unparalleled Annual Maintenance Contract (AMC)
              services, ensuring your IT infrastructure's seamless performance
              year-round. With our expert technicians and proactive approach, we
              provide comprehensive support, preventive maintenance, and rapid
              issue resolution, ensuring your business experiences uninterrupted
              IT excellence.
            </Typography>
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <ScrollLink to="services" smooth={true} duration={500}>
                <Button>Explore Our Services</Button>
              </ScrollLink>
              <Link to="/contact">
                <Button
                  className={'!text-white_ !bg-transparent !border-white_'}
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="pt-20 lg:pt-[130px] flex flex-col pb-10 lg:pb-[130px]">
            <Typography
              shadow={true}
              variant="P_SemiBold_H3"
              type="Georgia"
              className="text-white_ !leading-[48px]"
            >
              {title}
            </Typography>

            <Typography variant="P_Regular_H6" className="mt-4 text-white_">
              <Link to="/">{content}</Link>
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
