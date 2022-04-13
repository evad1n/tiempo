import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SG = () => {
  const ids = useStableUniqueId(2);
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
          d="M0 0V24H32V0H0Z"
          fill="#F7FCFF"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V24H32V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V12H32V0H0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.86852 10.5896C8.86852 10.5896 6.04283 9.45307 6.04283 6.37399C6.04283 3.29492 8.86852 2.19514 8.86852 2.19514C7.49519 1.84747 3.85107 2.15843 3.85107 6.37399C3.85107 10.5896 7.44012 11.3846 8.86852 10.5896ZM9.59249 10.0806L10.4031 9.59123L11.2316 10.0806L11.0288 9.12565L11.7023 8.37231H10.7898L10.4031 7.48061L10.0164 8.37231L9.10234 8.41095L9.77739 9.12565L9.59249 10.0806ZM13.3494 9.53659L12.5388 10.026L12.7237 9.071L12.0486 8.3563L12.9627 8.31766L13.3494 7.42596L13.7361 8.31766H14.6486L13.9751 9.071L14.1779 10.026L13.3494 9.53659ZM11.2873 5.76985L12.0979 5.28048L12.9264 5.76985L12.7236 4.81489L13.3971 4.06155H12.4846L12.0979 3.16985L11.7112 4.06155L10.7971 4.10019L11.4722 4.81489L11.2873 5.76985ZM9.36991 7.22264L8.55928 7.71201L8.74418 6.75705L8.06913 6.04236L8.98319 6.00371L9.36991 5.11201L9.75663 6.00371H10.6691L9.99563 6.75705L10.1984 7.71201L9.36991 7.22264ZM13.9177 7.66816L14.7283 7.17879L15.5568 7.66816L15.354 6.7132L16.0275 5.95986H15.115L14.7283 5.06816L14.3416 5.95986L13.4275 5.9985L14.1026 6.7132L13.9177 7.66816Z"
            fill="#F1F9FF"
          />
        </g>
      </g>
    </svg>
  );
};
