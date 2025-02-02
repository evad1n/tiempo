import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/_FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const BR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(5);
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 16 12">
      <mask
        id={`${ids[0]}`}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="12"
      >
        <path fill="#fff" d="M0 0h16v12H0z" />
      </mask>
      <g mask={`url(#${ids[0]})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v12h16V0H0Z"
          fill="#093"
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
            d="M0 0v12h16V0H0Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <g filter={`url(#${ids[4]})`} fillRule="evenodd" clipRule="evenodd">
            <path
              d="m7.963 1.852 6.101 4.252-6.184 3.982L1.904 6.02l6.06-4.169Z"
              fill="#FFD221"
            />
            <path
              d="m7.963 1.852 6.101 4.252-6.184 3.982L1.904 6.02l6.06-4.169Z"
              fill={`url(#${ids[3]})`}
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 8.6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
            fill="#2E42A5"
          />
          <mask
            id={`${ids[2]}`}
            maskUnits="userSpaceOnUse"
            x="5"
            y="3"
            width="6"
            height="6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 8.6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
              fill="#fff"
            />
          </mask>
          <g mask={`url(#${ids[2]})`} fill="#F7FCFF">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m7.19 7.285-.112.059.022-.125-.09-.088.124-.018L7.19 7l.056.113.125.018-.09.088.02.125-.111-.059Zm1 0-.112.059.022-.125-.09-.088.124-.018L8.19 7l.056.113.125.018-.09.088.02.125-.111-.059Zm0 .6-.112.059.022-.125-.09-.088.124-.018.056-.113.056.113.125.018-.09.088.02.125-.111-.059Zm-.5-2.1-.112.059.022-.125-.09-.088.124-.018.056-.113.056.113.125.018-.09.088.02.125-.111-.059Zm0 1-.112.059.022-.125-.09-.088.124-.018.056-.113.056.113.125.018-.09.088.02.125-.111-.059Zm-.7-.5-.112.059.022-.125-.09-.088.124-.018L6.99 6l.056.113.125.018-.09.088.02.125-.111-.059Zm-.7.4-.112.059.022-.125-.09-.088.124-.018.056-.113.056.113.125.018-.09.088.02.125-.111-.06Zm2.3-1.7-.112.059.022-.125-.09-.088.124-.018.056-.113.056.113.125.018-.09.088.02.125-.111-.059Z"
            />
            <path d="m4.962 5.499.076-.998c2.399.181 4.292.97 5.656 2.373l-.717.697C8.795 6.355 7.131 5.662 4.962 5.5Z" />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          id={`${ids[3]}`}
          x1="16"
          y1="12"
          x2="16"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC600" />
          <stop offset="1" stopColor="#FFDE42" />
        </linearGradient>
        <filter
          id={`${ids[4]}`}
          x="1.904"
          y="1.852"
          width="12.16"
          height="8.234"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feColorMatrix values="0 0 0 0 0.0313726 0 0 0 0 0.368627 0 0 0 0 0 0 0 0 0.28 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_65777"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_157_65777"
            result="shape"
          />
        </filter>
      </defs>
    </FlagIconBase>
  );
});
