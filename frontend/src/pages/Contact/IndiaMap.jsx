import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import INDIA_TOPO_JSON from './india.topo.json';

import MapMarkerIco from './Marker';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import flag from '../../assets/svg/Map/logo.svg';

const PROJECTION_CONFIG = {
  scale: 800, // Increased map size
  center: [78.9629, 22.5937], // East Latitude, North Longitude
};

// Longtititue, Latitute

// { name: 'Imphal', coordinates: [93.91607755897068, 24.60697016805692] },
// { name: 'Aizawl', coordinates: [92.78552992104912, 23.467738393076306] },
// { name: 'Kohima', coordinates: [94.5133510939464, 26.066374589222736] },
// { name: 'Agartala', coordinates: [91.71198979111689, 23.75418857211756] },

const capitals = [
  { name: 'Amaravati', coordinates: [80.650002, 16.516667] },
  { name: 'Itanagar', coordinates: [93.62, 27.1] },
  { name: 'Dispur', coordinates: [91.7362, 26.1445] },
  { name: 'Patna', coordinates: [85.1376, 25.5941] },
  { name: 'Raipur', coordinates: [81.62, 21.2514] },
  { name: 'Panaji', coordinates: [73.8282, 15.4909] },
  { name: 'Ahmedabad', coordinates: [72.5714, 23.0225] },
  { name: 'Delhi', coordinates: [77.209, 28.6139] },
  { name: 'Shimla', coordinates: [77.1734, 31.1048] },
  { name: 'Ranchi', coordinates: [85.2799, 23.3441] },
  { name: 'Bengaluru', coordinates: [77.5946, 12.9716] },
  { name: 'Thiruvananthapuram', coordinates: [76.9366, 8.5241] },
  { name: 'Bhopal', coordinates: [77.4126, 23.2599] },
  { name: 'Mumbai', coordinates: [72.8777, 19.076] },
  { name: 'Shillong', coordinates: [91.8822, 25.5788] },
  { name: 'Bhubaneswar', coordinates: [85.8245, 20.2961] },
  { name: 'Chandigarh', coordinates: [76.7794, 30.7333] },
  { name: 'Jaipur', coordinates: [75.7873, 26.9124] },
  { name: 'Gangtok', coordinates: [88.6112, 27.3389] },
  { name: 'Lucknow', coordinates: [80.9462, 26.8467] },
  { name: 'Hyderabad', coordinates: [78.4867, 17.385] },
  { name: 'Chennai', coordinates: [80.2785, 13.0827] },
  { name: 'Dehradun', coordinates: [78.0322, 30.3165] },
  { name: 'Kolkata', coordinates: [88.3639, 22.5726] },
];

const IndiaMap = () => {
  return (
    <div className="overflow-hidden">
      <div className="tooltip-container">
        <Tooltip id="tooltip" className="tooltip" />
      </div>

      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        className="-ml-[150px] -mr-[100px] md:ml-0 md:mr-0 -mt-[50px] -mb-[50px]"
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className="text-gray-300 outline-none fill-current hover:fill-light-blue-200 pressed:outline-none"
                style={{
                  default: {
                    outline: 'none',
                    fill: '#D0D5DD',
                    stroke: '#fff',
                    strokeWidth: 0.5,
                  }, // Added white border
                  hover: {
                    fill: '#e1e5eb',
                    transition: 'all 250ms',
                    outline: 'none',
                  },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {capitals.map(({ name, coordinates }, index) => (
          <Marker key={index} coordinates={coordinates}>
            <MapMarkerIco
              data-tooltip-id="tooltip"
              data-tooltip-html={`
                <div>
                  <header style="display: flex; flex-direction: column; align-items: center;">
                    <img loading="lazy" src=${flag} alt="logo" style="height: 30px; width: 30px; object-fit: contain; border-radius: 50%;">
                    <h3 style="width: 100%; margin-top: 0.5rem; font-weight: 600; color: #334155; font-size: 13px;">Credence Tec</h3>
                    <p style="margin-top: 0.25rem; font-size: 13px; color: #71717a;">${name}</p>
                  </header>
                </div>
                `}
            />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default IndiaMap;
