import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BQSA = () => {
  const ids = useStableUniqueId(1);
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <rect width="32" height="24" fill="white" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H32V24H0V0Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.664V0H16L0 11.664Z"
          fill="#F00000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 11.664V0H16L32 11.664Z"
          fill="#F00000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.664V24H16L0 11.664Z"
          fill="#00268D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 11.6639V24.3359L16 23.9999L32 11.6639Z"
          fill="#00268D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.714 14.2563L12.1965 16.7633L13.4873 12.622L10 10.087H14.3446L15.714 6L17.1655 10.087H21.3918L17.9349 12.622L19.2489 16.7633L15.714 14.2563Z"
          fill="#FEDA00"
        />
      </g>
    </svg>
  );
};
