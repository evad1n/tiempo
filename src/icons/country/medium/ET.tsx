import React from 'react';

import { useStableUniqueId } from 'hooks';

export const ET = () => {
  const ids = useStableUniqueId(2);
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V15H20V0H0Z"
          fill="#FECA00"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V5H20V0H0Z"
            fill="#5EAA22"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 10V15H20V10H0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 11.25C12.0711 11.25 13.75 9.57107 13.75 7.5C13.75 5.42893 12.0711 3.75 10 3.75C7.92893 3.75 6.25 5.42893 6.25 7.5C6.25 9.57107 7.92893 11.25 10 11.25Z"
            fill="#2B77B8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99999 8.75L8.27372 9.32908L8.81117 7.88627L7.64026 6.48873H9.26526L9.99999 5L10.7347 6.48873H12.3955L11.1888 7.88627L11.6171 9.32908L9.99999 8.75Z"
            stroke="#FECA00"
            strokeWidth="0.9375"
          />
          <path
            d="M9.81012 7.52148L8.5072 10.2466"
            stroke="#2B77B8"
            strokeWidth="0.625"
          />
          <path
            d="M9.6051 7.17456H7.1051"
            stroke="#2B77B8"
            strokeWidth="0.625"
          />
          <path
            d="M10.0759 8.02344L12.5191 9.15103"
            stroke="#2B77B8"
            strokeWidth="0.625"
          />
          <path
            d="M10.6041 7.4211L12.3726 5.48535"
            stroke="#2B77B8"
            strokeWidth="0.625"
          />
        </g>
      </g>
    </svg>
  );
};
