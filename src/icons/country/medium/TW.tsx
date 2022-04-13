import React from 'react';

import { useStableUniqueId } from 'hooks';

export const TW = () => {
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
          fill="#EF0000"
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
            d="M0 0V8.75H11.25V0H0Z"
            fill="#2E42A5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.45602 6.75672L4.52998 7.91204L4.30567 6.44848L2.92604 6.986L3.46355 5.60637L2 5.38206L3.15532 4.45602L2 3.52998L3.46355 3.30567L2.92604 1.92604L4.30567 2.46355L4.52998 1L5.45602 2.15532L6.38206 1L6.60637 2.46355L7.986 1.92604L7.44848 3.30567L8.91204 3.52998L7.75672 4.45602L8.91204 5.38206L7.44848 5.60637L7.986 6.986L6.60637 6.44848L6.38206 7.91204L5.45602 6.75672ZM5.45602 6.24498C6.44404 6.24498 7.24498 5.44404 7.24498 4.45602C7.24498 3.468 6.44404 2.66705 5.45602 2.66705C4.468 2.66705 3.66705 3.468 3.66705 4.45602C3.66705 5.44404 4.468 6.24498 5.45602 6.24498ZM6.88719 4.45602C6.88719 5.24643 6.24643 5.88719 5.45602 5.88719C4.6656 5.88719 4.02484 5.24643 4.02484 4.45602C4.02484 3.6656 4.6656 3.02484 5.45602 3.02484C6.24643 3.02484 6.88719 3.6656 6.88719 4.45602Z"
            fill="#FEFFFF"
          />
        </g>
      </g>
    </svg>
  );
};
