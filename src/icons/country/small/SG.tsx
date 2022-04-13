import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SG = () => {
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
            d="M0 0V6H16V0H0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.43426 5.29478C4.43426 5.29478 3.02142 4.72653 3.02142 3.187C3.02142 1.64746 4.43426 1.09757 4.43426 1.09757C3.74759 0.923736 1.92554 1.07922 1.92554 3.187C1.92554 5.29478 3.72006 5.69228 4.43426 5.29478ZM4.79625 5.0403L5.20156 4.79562L5.6158 5.0403L5.51442 4.56282L5.85117 4.18615H5.39492L5.20156 3.7403L5.0082 4.18615L4.55117 4.20548L4.8887 4.56282L4.79625 5.0403ZM6.67471 4.76829L6.2694 5.01298L6.36185 4.5355L6.02432 4.17815L6.48135 4.15883L6.67471 3.71298L6.86807 4.15883H7.32432L6.98757 4.5355L7.08895 5.01298L6.67471 4.76829ZM5.64364 2.88493L6.04895 2.64024L6.46319 2.88493L6.36181 2.40744L6.69856 2.03077H6.24231L6.04895 1.58493L5.85559 2.03077L5.39856 2.0501L5.73609 2.40744L5.64364 2.88493ZM4.68495 3.61132L4.27964 3.85601L4.37209 3.37853L4.03456 3.02118L4.49159 3.00186L4.68495 2.55601L4.87831 3.00186H5.33456L4.99782 3.37853L5.0992 3.85601L4.68495 3.61132ZM6.95885 3.83408L7.36416 3.58939L7.7784 3.83408L7.67702 3.3566L8.01377 2.97993H7.55752L7.36416 2.53408L7.1708 2.97993L6.71377 2.99925L7.0513 3.3566L6.95885 3.83408Z"
            fill="#F1F9FF"
          />
        </g>
      </g>
    </svg>
  );
};
