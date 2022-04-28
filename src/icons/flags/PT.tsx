import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';
import { useStableUniqueId } from '../FlagIconBase/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const PT = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  const ids = useStableUniqueId(2);
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
          d="M4 0h12v12H4V0Z"
          fill="#EF0000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h6v12H0V0Z"
          fill="#2F8D00"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="8"
          height="8"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.952 9.904c-2.13 0-3.857-1.748-3.857-3.904 0-2.156 1.727-3.904 3.857-3.904S9.81 3.844 9.81 6c0 2.156-1.726 3.904-3.857 3.904Z"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${ids[1]})`} fill="#FFE017">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.714 2h.5v1.35h-.5V2ZM5.714 8.747h.5V10h-.5V8.747Z"
          />
          <path d="m2.157 6.202-.14-.359C3.56 5.228 4.724 4.83 5.514 4.651a29.368 29.368 0 0 1 3.821-.583l.034.384c-1.372.125-2.63.317-3.772.576-.766.173-1.914.565-3.44 1.174Z" />
          <path d="m9.57 3.832-.113.368c-1.166-.368-2.116-.526-2.846-.477l-.025-.385c.784-.052 1.778.113 2.984.494ZM9.974 5.89l-.216.318c-.594-.413-1.326-.62-2.201-.62v-.386c.948 0 1.756.229 2.417.688Z" />
          <path d="m9.651 6.005.098.373c-1.28.347-2.484.544-3.609.59-1.132.047-2.452-.15-3.96-.591l.105-.37c1.472.43 2.752.62 3.84.576 1.095-.045 2.27-.238 3.526-.578Z" />
          <path d="m9.506 7.818-.602.617c-1.145-1.143-2.152-1.96-3.017-2.452-.879-.5-2.025-1.006-3.437-1.52l.29-.816c1.453.528 2.642 1.054 3.567 1.58.94.534 2.004 1.398 3.199 2.591ZM2.73 8.168l-.229-.31a4.64 4.64 0 0 1 .594-.361c.425-.215.852-.35 1.259-.362l.059-.001v.386h-.048c-.343.01-.72.13-1.1.322a4.264 4.264 0 0 0-.536.326Z" />
          <path d="m2.906 8.301.096-.373c1.27.335 2.25.501 2.933.501.68 0 1.694-.196 3.033-.59l.106.37c-1.37.403-2.415.606-3.14.606-.721 0-1.73-.172-3.028-.514ZM2.411 4.847l.604-.616.883.887-.603.616-.884-.887Z" />
          <path d="m7.418 7.924.449-.739 1.402.872-.45.74-1.401-.873Z" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.095 6c0 2.156 1.727 3.904 3.857 3.904S9.81 8.156 9.81 6c0-2.156-1.726-3.904-3.857-3.904-2.13 0-3.857 1.748-3.857 3.904Zm7.238.048c0 1.863-1.492 3.374-3.333 3.374-1.841 0-3.333-1.51-3.333-3.374 0-1.863 1.492-3.373 3.333-3.373 1.84 0 3.333 1.51 3.333 3.373Z"
          fill="#F9E813"
        />
        <path
          d="M3.828 3.593v3.13c.206 1.239.9 1.858 2.083 1.858 1.182 0 1.877-.62 2.083-1.858v-3.13H3.828Z"
          fill="#fff"
        />
        <path
          d="M3.043 3h5.536v3.711l-.004.026C8.307 8.22 7.359 9 5.81 9c-1.548 0-2.496-.78-2.764-2.263l-.004-.026V3Z"
          fill="#C51918"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.524 3.953h-.9v.9h.9v-.9Zm3.5 0h-.9v.9h.9v-.9ZM3.624 5.953h.9v.9h-.9v-.9Zm3.55.014h.9v.9h-.9v-.9Zm.013 1.458h-.9v.9h.9v-.9ZM4.324 7.42h.9v.9h-.9v-.9Z"
          fill="#F9E813"
        />
        <path
          d="M4.426 4.355h2.97v2.22s-.22 1.147-1.485 1.147c-1.265 0-1.485-1.146-1.485-1.146v-2.22Z"
          fill="#F7FCFF"
        />
        <path
          d="M5.619 4.602h.66v.481s-.049.248-.33.248-.33-.248-.33-.248v-.48ZM5.619 5.663h.66v.48s-.049.249-.33.249-.33-.249-.33-.249v-.48ZM6.476 5.663h.66v.48s-.049.249-.33.249c-.28 0-.33-.249-.33-.249v-.48ZM4.762 5.663h.66v.48s-.049.249-.33.249-.33-.249-.33-.249v-.48ZM5.619 6.723h.66v.48s-.049.249-.33.249-.33-.248-.33-.248v-.481Z"
          fill="#013399"
        />
      </g>
    </FlagIconBase>
  );
});
