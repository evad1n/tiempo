import React from 'react';

import { useStableUniqueId } from 'hooks';

export const CC = () => {
  const ids = useStableUniqueId(1);
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
          d="M0 0H16V12H0V0Z"
          fill="#5EAA22"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 3.5L11.5 3.86603L11.567 3.25L11 3L11.567 2.75L11.5 2.13397L12 2.5L12.5 2.13397L12.433 2.75L13 3L12.433 3.25L12.5 3.86603L12 3.5Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4814 6.83941L10.9814 7.20544L11.0484 6.58941L10.4814 6.33941L11.0484 6.08941L10.9814 5.47339L11.4814 5.83941L11.9814 5.47339L11.9144 6.08941L12.4814 6.33941L11.9144 6.58941L11.9814 7.20544L11.4814 6.83941Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 9.5L12.5 9.86603L12.567 9.25L12 9L12.567 8.75L12.5 8.13397L13 8.5L13.5 8.13397L13.433 8.75L14 9L13.433 9.25L13.5 9.86603L13 9.5Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 4.75L13.25 4.93301L13.2835 4.625L13 4.5L13.2835 4.375L13.25 4.06699L13.5 4.25L13.75 4.06699L13.7165 4.375L14 4.5L13.7165 4.625L13.75 4.93301L13.5 4.75Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 7C4.88071 7 6 5.88071 6 4.5C6 3.11929 4.88071 2 3.5 2C2.11929 2 1 3.11929 1 4.5C1 5.88071 2.11929 7 3.5 7Z"
          fill="#FECA00"
        />
        <path
          d="M3.24472 5.99363L3.06531 5.86724C3.46218 5.34731 3.35724 4.62071 3.24472 4.14321L3.97472 3.97119C4.14231 4.6824 3.77026 5.30513 3.24472 5.99363Z"
          fill="#915E2B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.94887 7.47248C9.61978 8.03725 9.09681 8.29359 8.39679 8.29359C7.34922 8.29359 6.5 7.44436 6.5 6.39679C6.5 5.34922 7.34922 4.5 8.39679 4.5C9.19606 4.5 9.83378 4.77964 10.1264 5.5413C9.89475 5.31162 9.53627 5.15407 9 5.17404C8.17157 5.17404 7.63267 5.81943 7.63267 6.37171C7.63267 6.924 8.17157 7.67474 9 7.67474C9.41667 7.6685 9.72446 7.59232 9.94887 7.47248Z"
          fill="#FECA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.50001 4.36987C4.32844 4.36987 4.85651 4.14602 4.85651 3.86987C4.85651 3.59373 4.32844 3.36987 3.50001 3.36987C2.67158 3.36987 2.24219 3.59373 2.24219 3.86987C2.24219 4.14602 2.67158 4.36987 3.50001 4.36987Z"
          fill="#5EAA22"
        />
      </g>
    </svg>
  );
};
