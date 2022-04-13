import React from 'react';

import { useStableUniqueId } from 'hooks';

export const SK = () => {
  const ids = useStableUniqueId(3);
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
          fill="#3D58DB"
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
            fill="#F7FCFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 16V24H32V16H0Z"
            fill="#E31D1C"
          />
          <path
            d="M15.604 6.03027L16.1012 5.97737L16.0537 5.53027H15.604H6.34495H5.87753L5.84608 5.99663L6.34495 6.03027L5.84608 5.99672L5.84606 5.99694L5.84601 5.99774L5.8458 6.00081L5.84501 6.01273L5.84196 6.05899L5.83062 6.23518C5.82096 6.38756 5.80742 6.60681 5.79183 6.87476C5.76066 7.41051 5.72128 8.14173 5.68846 8.92289C5.62378 10.4625 5.58089 12.2649 5.69291 13.1066C5.91148 14.7491 6.91162 18.4362 10.7799 20.1072L10.9817 20.1943L11.1823 20.1046C14.8565 18.4617 16.0854 15.1531 16.3688 13.1093C16.5119 12.0779 16.4392 10.2731 16.3388 8.77326C16.2879 8.01324 16.2286 7.31489 16.182 6.8067C16.1587 6.5525 16.1385 6.34563 16.1242 6.20211C16.117 6.13034 16.1113 6.07439 16.1074 6.03627L16.1028 5.99271L16.1017 5.98142L16.1013 5.97848L16.1013 5.9777L16.1012 5.97748C16.1012 5.97742 16.1012 5.97737 15.604 6.03027Z"
            fill="#E31D1C"
            stroke="white"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="5"
            y="5"
            width="12"
            height="16"
          >
            <path
              d="M15.604 6.03027L16.1012 5.97737L16.0537 5.53027H15.604H6.34495H5.87753L5.84608 5.99663L6.34495 6.03027L5.84608 5.99672L5.84606 5.99694L5.84601 5.99774L5.8458 6.00081L5.84501 6.01273L5.84196 6.05899L5.83062 6.23518C5.82096 6.38756 5.80742 6.60681 5.79183 6.87476C5.76066 7.41051 5.72128 8.14173 5.68846 8.92289C5.62378 10.4625 5.58089 12.2649 5.69291 13.1066C5.91148 14.7491 6.91162 18.4362 10.7799 20.1072L10.9817 20.1943L11.1823 20.1046C14.8565 18.4617 16.0854 15.1531 16.3688 13.1093C16.5119 12.0779 16.4392 10.2731 16.3388 8.77326C16.2879 8.01324 16.2286 7.31489 16.182 6.8067C16.1587 6.5525 16.1385 6.34563 16.1242 6.20211C16.117 6.13034 16.1113 6.07439 16.1074 6.03627L16.1028 5.99271L16.1017 5.98142L16.1013 5.97848L16.1013 5.9777L16.1012 5.97748C16.1012 5.97742 16.1012 5.97737 15.604 6.03027Z"
              fill="white"
              stroke="white"
            />
          </mask>
          <g mask={`url(#${ids[2]})`}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2571 6.5896C10.2571 6.5896 10.4636 6.90422 10.556 7.3853C10.6485 7.86639 10.6644 8.7093 10.6644 8.7093L8.70555 8.46812V9.95341L10.7082 9.69836L10.6756 11.1081C10.6756 11.1081 10.0765 11.1702 9.58514 11.1081C9.09376 11.046 8.12573 10.7858 8.12573 10.7858V12.4862C8.12573 12.4862 9.10923 12.1715 9.58514 12.0993C10.061 12.0271 10.6756 12.0993 10.6756 12.0993V14.1877H11.4887V12.0993C11.4887 12.0993 12.3774 12.0221 12.9076 12.1057C13.4378 12.1894 13.9407 12.4862 13.9407 12.4862V10.7858C13.9407 10.7858 13.4312 11.0396 12.9506 11.1028C12.4701 11.166 11.4887 11.1081 11.4887 11.1081L11.5212 9.69836C11.5212 9.69836 12.1865 9.62949 12.5597 9.68016C12.9329 9.73082 13.4 9.95341 13.4 9.95341V8.46812C13.4 8.46812 12.9447 8.71586 12.5865 8.7608C12.2283 8.80574 11.4775 8.7093 11.4775 8.7093C11.4775 8.7093 11.4908 7.83944 11.5678 7.41588C11.6448 6.99232 11.8629 6.5896 11.8629 6.5896H10.2571Z"
              fill="#F7FCFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.89746 16.2452C6.89746 16.2452 7.33695 15.302 8.05209 15.1226C8.76722 14.9433 9.5171 15.6839 9.5171 15.6839C9.5171 15.6839 9.975 14.1875 11.0911 14.1875C12.2072 14.1875 12.5989 15.6839 12.5989 15.6839C12.5989 15.6839 13.0751 15.1226 13.7599 15.1226C14.4447 15.1226 15.0791 16.2452 15.0791 16.2452C15.0791 16.2452 13.0337 19.9587 10.9883 19.9587C8.94287 19.9587 6.89746 16.2452 6.89746 16.2452Z"
              fill="#2E42A5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
