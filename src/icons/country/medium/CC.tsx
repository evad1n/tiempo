import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CC = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 0H20V15H0V0Z"
          fill="#5EAA22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 4.375L14.375 4.83253L14.4587 4.0625L13.75 3.75L14.4587 3.4375L14.375 2.66747L15 3.125L15.625 2.66747L15.5413 3.4375L16.25 3.75L15.5413 4.0625L15.625 4.83253L15 4.375Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3517 8.54908L13.7267 9.00662L13.8104 8.23658L13.1017 7.92408L13.8104 7.61158L13.7267 6.84155L14.3517 7.29908L14.9767 6.84155L14.893 7.61158L15.6017 7.92408L14.893 8.23658L14.9767 9.00662L14.3517 8.54908Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.25 11.875L15.625 12.3325L15.7087 11.5625L15 11.25L15.7087 10.9375L15.625 10.1675L16.25 10.625L16.875 10.1675L16.7913 10.9375L17.5 11.25L16.7913 11.5625L16.875 12.3325L16.25 11.875Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.875 5.9375L16.5625 6.16627L16.6044 5.78125L16.25 5.625L16.6044 5.46875L16.5625 5.08373L16.875 5.3125L17.1875 5.08373L17.1456 5.46875L17.5 5.625L17.1456 5.78125L17.1875 6.16627L16.875 5.9375Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.375 8.75C6.10089 8.75 7.5 7.35089 7.5 5.625C7.5 3.89911 6.10089 2.5 4.375 2.5C2.64911 2.5 1.25 3.89911 1.25 5.625C1.25 7.35089 2.64911 8.75 4.375 8.75Z"
          fill="#FECA00"
        />
        <path
          d="M4.05593 7.49216L3.83167 7.33417C4.32775 6.68426 4.19657 5.77601 4.05593 5.17913L4.96844 4.96411C5.17792 5.85312 4.71285 6.63154 4.05593 7.49216Z"
          fill="#915E2B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4361 9.34061C12.0247 10.0466 11.371 10.367 10.496 10.367C9.18653 10.367 8.125 9.30546 8.125 7.99599C8.125 6.68653 9.18653 5.625 10.496 5.625C11.4951 5.625 12.2922 5.97455 12.6579 6.92662C12.3684 6.63952 11.9203 6.44259 11.25 6.46755C10.2145 6.46755 9.54084 7.27429 9.54084 7.96464C9.54084 8.655 10.2145 9.59343 11.25 9.59343C11.7708 9.58563 12.1556 9.4904 12.4361 9.34061Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.37501 5.46216C5.41054 5.46216 6.07064 5.18234 6.07064 4.83716C6.07064 4.49198 5.41054 4.21216 4.37501 4.21216C3.33948 4.21216 2.80273 4.49198 2.80273 4.83716C2.80273 5.18234 3.33948 5.46216 4.37501 5.46216Z"
          fill="#5EAA22"
        />
      </g>
    </svg>
  );
};
