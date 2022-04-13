import React from 'react';

import { useStableUniqueId } from 'hooks';

export const JE = () => {
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
          fill="#F7FCFF"
        />
        <path
          d="M-2.70137 1.24468L-4.7499 0.00597525V2.3999V22.3999V24.7938L-2.70137 23.5551L13.8364 13.5551L15.7469 12.3999L13.8364 11.2447L-2.70137 1.24468Z"
          fill="#F7FCFF"
          stroke="#E31D1C"
          strokeWidth="2.7"
        />
        <path
          d="M34.9209 1.2325L36.9489 0.0547256V2.3999V22.3999V24.7451L34.9209 23.5673L17.7021 13.5673L15.6919 12.3999L17.7021 11.2325L34.9209 1.2325Z"
          fill="#F7FCFF"
          stroke="#E31D1C"
          strokeWidth="2.7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6748 4.70308C13.6748 4.70308 12.8161 8.50139 15.7809 9.9602C15.7809 9.9602 18.6271 8.40887 17.9878 4.70308C17.9878 4.70308 16.7654 4.29419 15.7935 4.29419C14.8215 4.29419 13.6748 4.70308 13.6748 4.70308Z"
          fill="#E31D1C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9826 5.49858C13.9826 5.49858 14.2997 5.3582 14.4566 5.49858C14.6136 5.63895 14.7422 5.48694 14.7422 5.40226C14.7422 5.31758 14.9914 5.02689 14.9914 5.26273C14.9914 5.49858 14.9139 5.63174 15.1329 5.63174C15.352 5.63174 16.3385 5.30595 16.575 5.40226C16.8116 5.49858 16.9926 5.47462 16.9325 5.33643C16.8723 5.19824 16.7178 5.11187 16.4202 5.1873C16.1226 5.26273 16.1928 5.33643 15.9356 5.33643C15.6784 5.33643 15.3922 5.26273 15.3922 5.26273C15.3922 5.26273 15.4726 5.1388 15.7662 5.22695C16.0599 5.31511 16.4649 5.11778 16.575 5.11778C16.6852 5.11778 16.9883 5.11187 17.0184 5.1873C17.0484 5.26273 17.2315 5.33195 17.092 5.40226C16.9524 5.47258 16.7223 5.51663 16.8807 5.60672C17.039 5.69682 17.403 5.67945 17.4205 5.77317C17.4381 5.86688 17.6106 6.00683 17.5414 6.00683C17.4721 6.00683 17.347 6.13881 17.2304 6.09862C17.1139 6.05843 17.1002 6.02315 17.212 5.99059C17.3237 5.95804 17.3226 5.82113 17.2304 5.82113C17.1383 5.82113 17.1833 5.8691 16.9734 5.82113C16.7636 5.77317 16.4859 5.71985 16.5026 5.82113C16.5193 5.92242 16.6559 6.0779 16.4038 6.09862C16.1518 6.11934 16.0338 6.20254 15.9847 6.13554C15.9356 6.06854 15.7603 5.97927 15.8982 5.95065C16.0361 5.92202 16.1678 6.04795 16.2175 6.02739C16.2672 6.00683 16.3797 5.99538 16.2855 5.90826C16.1912 5.82113 16.0357 5.76984 16.1798 5.70463C16.3239 5.63942 16.2102 5.63808 15.9356 5.77317C15.6611 5.90826 15.5083 6.02306 15.2673 6.00683C15.0262 5.99059 14.9359 6.01249 14.8585 5.99059C14.781 5.9687 14.4036 6.23254 14.295 6.16558C14.1863 6.09862 13.8355 6.07293 13.8987 5.99059C13.9618 5.90826 14.0466 5.86587 14.141 5.90826C14.2355 5.95065 14.3293 5.99304 14.393 5.95065C14.4566 5.90826 14.6405 5.7628 14.5943 5.73371C14.548 5.70463 14.5928 5.60672 14.3309 5.60672C14.069 5.60672 13.9769 5.71584 13.9147 5.64709C13.8525 5.57834 13.9826 5.49858 13.9826 5.49858Z"
          fill="#FFD100"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2442 6.74674C14.2442 6.74674 14.523 6.62332 14.661 6.74674C14.799 6.87015 14.9121 6.73651 14.9121 6.66206C14.9121 6.58762 15.1312 6.33205 15.1312 6.53939C15.1312 6.74674 15.063 6.86381 15.2556 6.86381C15.4482 6.86381 16.3154 6.57739 16.5234 6.66206C16.7314 6.74674 16.8905 6.72568 16.8377 6.60419C16.7848 6.4827 16.6489 6.40676 16.3873 6.47308C16.1257 6.53939 16.1874 6.60419 15.9613 6.60419C15.7352 6.60419 15.4835 6.53939 15.4835 6.53939C15.4835 6.53939 15.5542 6.43044 15.8124 6.50794C16.0705 6.58544 16.4266 6.41196 16.5234 6.41196C16.6203 6.41196 16.8868 6.40676 16.9132 6.47308C16.9396 6.53939 17.1005 6.60024 16.9779 6.66206C16.8552 6.72389 16.6529 6.76261 16.7921 6.84182C16.9313 6.92102 17.2513 6.90576 17.2667 6.98815C17.2822 7.07054 17.4339 7.19357 17.373 7.19357C17.3121 7.19357 17.2021 7.3096 17.0996 7.27427C16.9972 7.23894 16.9851 7.20792 17.0834 7.1793C17.1816 7.15068 17.1807 7.03032 17.0996 7.03032C17.0186 7.03032 17.0581 7.07249 16.8737 7.03032C16.6892 6.98815 16.445 6.94127 16.4597 7.03032C16.4744 7.11937 16.5945 7.25606 16.3729 7.27427C16.1513 7.29249 16.0476 7.36563 16.0044 7.30673C15.9613 7.24783 15.8071 7.16935 15.9283 7.14418C16.0496 7.11901 16.1654 7.22973 16.2091 7.21165C16.2528 7.19357 16.3517 7.18351 16.2688 7.10691C16.1859 7.03032 16.0493 6.98522 16.176 6.92789C16.3027 6.87056 16.2027 6.86938 15.9613 6.98815C15.7199 7.10691 15.5856 7.20784 15.3737 7.19357C15.1618 7.1793 15.0824 7.19855 15.0143 7.1793C14.9462 7.16005 14.6144 7.39201 14.5189 7.33314C14.4233 7.27427 14.1149 7.25169 14.1705 7.1793C14.226 7.10691 14.3005 7.06965 14.3835 7.10691C14.4666 7.14418 14.549 7.18145 14.605 7.14418C14.661 7.10691 14.8227 6.97903 14.782 6.95346C14.7414 6.92789 14.7807 6.84182 14.5504 6.84182C14.3202 6.84182 14.2392 6.93775 14.1846 6.8773C14.1299 6.81686 14.2442 6.74674 14.2442 6.74674Z"
          fill="#FFD100"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6142 8.01345C14.6142 8.01345 14.8256 7.91987 14.9302 8.01345C15.0349 8.10704 15.1206 8.0057 15.1206 7.94925C15.1206 7.89279 15.2868 7.69899 15.2868 7.85622C15.2868 8.01345 15.2351 8.10223 15.3811 8.10223C15.5271 8.10223 16.1848 7.88504 16.3425 7.94925C16.5002 8.01345 16.6209 7.99749 16.5808 7.90536C16.5407 7.81323 16.4377 7.75565 16.2393 7.80594C16.0409 7.85622 16.0877 7.90536 15.9162 7.90536C15.7448 7.90536 15.5539 7.85622 15.5539 7.85622C15.5539 7.85622 15.6075 7.77361 15.8033 7.83237C15.9991 7.89114 16.2691 7.75959 16.3425 7.75959C16.4159 7.75959 16.618 7.75565 16.6381 7.80594C16.6581 7.85622 16.7801 7.90237 16.6871 7.94925C16.5941 7.99613 16.4407 8.02549 16.5462 8.08555C16.6518 8.14562 16.8945 8.13404 16.9062 8.19652C16.9179 8.25899 17.0329 8.35229 16.9867 8.35229C16.9406 8.35229 16.8571 8.44028 16.7794 8.41348C16.7018 8.38669 16.6926 8.36317 16.7671 8.34147C16.8416 8.31976 16.8409 8.22849 16.7794 8.22849C16.718 8.22849 16.748 8.26047 16.6081 8.22849C16.4682 8.19652 16.2831 8.16097 16.2942 8.22849C16.3053 8.29602 16.3964 8.39967 16.2284 8.41348C16.0603 8.4273 15.9817 8.48276 15.9489 8.4381C15.9162 8.39343 15.7993 8.33392 15.8913 8.31484C15.9832 8.29575 16.071 8.3797 16.1041 8.366C16.1373 8.35229 16.2123 8.34466 16.1494 8.28658C16.0866 8.22849 15.983 8.1943 16.079 8.15082C16.1751 8.10735 16.0993 8.10646 15.9162 8.19652C15.7332 8.28658 15.6314 8.36311 15.4707 8.35229C15.31 8.34147 15.2498 8.35606 15.1981 8.34147C15.1465 8.32687 14.8949 8.50277 14.8225 8.45813C14.75 8.41348 14.5162 8.39636 14.5583 8.34147C14.6004 8.28657 14.6569 8.25831 14.7198 8.28658C14.7828 8.31484 14.8453 8.3431 14.8878 8.31484C14.9302 8.28657 15.0528 8.1896 15.022 8.17021C14.9912 8.15082 15.021 8.08555 14.8464 8.08555C14.6718 8.08555 14.6104 8.1583 14.569 8.11246C14.5275 8.06663 14.6142 8.01345 14.6142 8.01345Z"
          fill="#FFD100"
        />
      </g>
    </svg>
  );
};
