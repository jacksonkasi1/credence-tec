// import core package
import { Link } from 'react-router-dom';

// images
import leftImg from '@assets/svg/Story/credence.svg';

// components
import Typography from '@ui/Typography';
import Button from '@ui/Button';

const Story = ({ button, children }) => {
  return (
    <div className=" bg-snowfall_ ">
      <div className="w-[95%] xl:max-w-7xl mx-auto flex justify-between py-10 lg:py-[100px] md:flex-row gap-10 flex-col overflow-hidden">
        <div className="flex items-center w-[90%] md:w-[45%] justify-center">
          <img src={leftImg} alt="" className="h-full w-full" />
        </div>

        <div className="w-[95%] xs:w-[90%] sm:w-[70%] md:!w-[45%] flex flex-col">
          <Typography
            variant="P_SemiBold_H6"
            type="Poppins"
            className="text-secondary_"
          >
            Our Story
          </Typography>
          <Typography variant="P_SemiBold_H4" type="Georgia">
            Delivering Excellence in IT Services Since 2007
          </Typography>

          {button && (
            <Typography variant="P_Regular_H6" className="mt-5">
              Welcome to Credence Tec, a proud venture born from the legacy of
              our parent company, Chennai Softech. Established as a prominent
              content development entity, Chennai Softech laid the foundation
              for our journey. In 2022, Credence Tec emerged with a singular
              mission — to offer a specialized IT Maintenance arm dedicated to
              providing our customers with the utmost reliability. We envision a
              future where businesses experience uninterrupted IT excellence,
              and our commitment to "Seamless IT Performance, Year-round
              Assurance" drives us to deliver top-notch Annual Maintenance
              Contract (AMC) services. With a strong lineage in content
              development and a renewed focus on IT maintenance, Credence Tec
              stands as your steadfast partner in navigating the dynamic digital
              landscape.
            </Typography>
          )}
          {!button && children}

          {button && (
            <Link to="/about-us">
              <Button className="!w-[115px] mt-7">Explore</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;
