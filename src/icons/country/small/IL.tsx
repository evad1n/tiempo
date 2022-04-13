import React from 'react';

import { useStableUniqueId } from 'hooks';

export const IL = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <rect width="16" height="12" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V12H16V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H16V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2V3.78274H16V2H0Z"
            fill="#3D58DB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8.17407V10.0001H16V8.17407H0Z"
            fill="#3D58DB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.69055 7.46947H10.379L8.05791 3.45923L5.69055 7.46947ZM9.42522 6.91947H6.65392L8.05323 4.54907L9.42522 6.91947Z"
            fill="#3D58DB"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.54578 4.46277H10.3404L8.06793 8.4856L5.54578 4.46277ZM9.39801 5.01277H6.53976L8.04332 7.41093L9.39801 5.01277Z"
            fill="#3D58DB"
          />
        </g>
      </g>
    </svg>
  );
};
