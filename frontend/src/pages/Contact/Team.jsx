import { Tooltip as ReactTooltip } from 'react-tooltip';
// images
import IndiaMap from './IndiaMap';

const Team = () => {
  return (
    <div className="pt-20 lg:pt-[100px] bg-white_">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl font-Georgia tracking-wide">
            We’re a Distributed Team
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-secondary_ font-oracle">
            As we have teams all around the Asia.
          </p>
        </div>

        <div>
          <IndiaMap />
        </div>
      </div>
    </div>
  );
};

export default Team;
