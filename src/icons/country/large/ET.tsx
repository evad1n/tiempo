import React from 'react';

import { useStableUniqueId } from 'hooks';

export const ET = () => {
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
          fill="#FECA00"
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
            d="M0 0V8H32V0H0Z"
            fill="#5EAA22"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16V24H32V16H0Z"
            fill="#E31D1C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6C12.6863 6 10 8.68629 10 12C10 15.3137 12.6863 18 16 18Z"
            fill="#2B77B8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9999 14L13.2379 14.9265L14.0978 12.618L12.2244 10.382H14.8244L15.9999 8L17.1755 10.382H19.8328L17.902 12.618L18.5874 14.9265L15.9999 14Z"
            stroke="#FECA00"
            strokeWidth="1.5"
          />
          <path d="M15.696 12.0344L13.6113 16.3946" stroke="#2B77B8" />
          <path d="M15.3682 11.4795H11.3682" stroke="#2B77B8" />
          <path d="M16.1216 12.8376L20.0306 14.6418" stroke="#2B77B8" />
          <path d="M16.9668 11.8738L19.7964 8.77661" stroke="#2B77B8" />
        </g>
      </g>
    </svg>
  );
};
