import * as React from 'react';
const MapMarkerIco = (props) => (
  <g transform="translate(-9.5, 0)" className="cursor-pointer " {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={19}
      fill="none"
      viewBox="0 0 29 29"
      {...props}
    >
      <rect
        width={28.279}
        height={28.279}
        x={-0.001}
        fill="#236DF8"
        opacity={0.1}
        rx={14.14}
      />
      <rect
        width={16.968}
        height={16.968}
        x={5.655}
        y={5.654}
        fill="#73C4FF"
        fillOpacity={0.7}
        rx={8.484}
      />
      <rect
        width={5.656}
        height={5.656}
        x={11.311}
        y={11.311}
        fill="#236DF8"
        rx={2.828}
      />
    </svg>
  </g>
);

export default MapMarkerIco;