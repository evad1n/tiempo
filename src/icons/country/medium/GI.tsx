import React from 'react';

import { useStableUniqueId } from 'hooks';

export const GI = () => {
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
        <rect width="20" height="15" fill="#F7FCFF" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10H20V15H0V10Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.83769 2.04175H8.91663V2.95841H9.37126L9.33883 5.47925H7.99558V4.33341H8.45611V3.41675H7.53505V3.87508H7.07453V3.41675H6.15348V4.33341H6.614V5.47925H5.64282V6.39592L6.10335 6.39591V9.14591H5.64282V10.0626H14.3928V9.14591H13.4718V6.39591L14.3928 6.39592V5.47925H13.49L13.5128 4.33341H13.9824V3.41675H13.0614V3.87508H12.6008V3.41675H11.6798V4.33341H12.1312L12.1084 5.47925H10.7204L10.7528 2.95841H11.2193V2.04175H10.2982V2.50008H9.83769V2.04175Z"
          fill="#DB000B"
        />
        <path
          d="M7.13159 5.48026C7.13159 5.35309 7.23468 5.25 7.36185 5.25V5.25C7.48903 5.25 7.59212 5.35309 7.59212 5.48026V6.625H7.13159V5.48026Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.75989 8.55651C6.75989 8.175 7.06916 7.86572 7.45068 7.86572V7.86572C7.83219 7.86572 8.14147 8.175 8.14147 8.55651V9.69906H6.75989V8.55651Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8257 8.55651C11.8257 8.175 12.135 7.86572 12.5165 7.86572V7.86572C12.898 7.86572 13.2073 8.175 13.2073 8.55651V9.69906H11.8257V8.55651Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.0625 8.32852C9.0625 7.81984 9.47487 7.40747 9.98355 7.40747V7.40747C10.4922 7.40747 10.9046 7.81984 10.9046 8.32852V10.1575H9.0625V8.32852Z"
          fill="#272727"
        />
        <path
          d="M9.89478 5.48026C9.89478 5.35309 9.99787 5.25 10.125 5.25V5.25C10.2522 5.25 10.3553 5.35309 10.3553 5.48026V6.625H9.89478V5.48026Z"
          fill="#272727"
        />
        <path
          d="M12.6578 5.48026C12.6578 5.35309 12.7609 5.25 12.8881 5.25V5.25C13.0153 5.25 13.1184 5.35309 13.1184 5.48026V6.625H12.6578V5.48026Z"
          fill="#272727"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3264 9.49839L10.2134 9.70586L10.003 9.39185L8.27869 10.5474L10.2011 11.4623L11.8966 10.3536L10.3264 9.49839ZM9.5391 10.4551L10.0938 10.0834L10.6798 10.4026L10.1528 10.7472L9.5391 10.4551Z"
          fill="#E8AA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.97363 12.8335H9.89469V13.7502H8.97363V12.8335Z"
          fill="#E8AA00"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 11.25H10.593V13.75H9.5V11.25Z"
          fill="#E8AA00"
        />
      </g>
    </svg>
  );
};
