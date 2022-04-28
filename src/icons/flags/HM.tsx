import React, { forwardRef } from 'react';

import { FlagIconBase } from '../FlagIconBase/FlagIconBase';

type Props = {
  height: number;
  width: number;
};
export const HM = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
  return (
    <FlagIconBase height={height} width={width} ref={ref} viewBox="0 0 640 480">
      <g strokeWidth="1pt">
        <path fill="#006" d="M0 0h640v480H0z" />
        <path
          fill="#fff"
          d="M0 0v30.6l372.6 243h46.9V243L46.9 0H0zm419.5 0v30.6l-372.6 243H0V243L372.6 0h46.9z"
        />
        <path
          fill="#fff"
          d="M174.8 0v273.6h69.9V0h-70zM0 91.2v91.2h419.5V91.2H0z"
        />
        <path
          fill="#c00"
          d="M0 109.4v54.8h419.5v-54.8H0zM188.8 0v273.6h42V0h-42zM0 273.6l139.8-91.2h31.3L31.3 273.6H0zM0 0l139.8 91.2h-31.2L0 20.4V0zm248.4 91.2L388.2 0h31.3L279.6 91.2h-31.2zm171 182.4-139.7-91.2h31.2l108.6 70.8v20.4z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M125.5 416.5 98 414l23.8-14-15.3-23 25.8 9.7 8.4-26.3 8.5 26.3L175 377l-15.3 23 23.7 14-27.5 2.5 3.8 27.3-19-20-19 20m370.5 1.9-19.4-1.7 16.7-10-10.7-16 18.1 6.8 6-18.5 6 18.5 18-6.9-10.7 16.2L533 444l-19.3 1.7 2.7 19.2-13.4-14-13.4 14m2.7-307-19.4-1.7 16.7-9.9-10.7-16.2 18.1 7 6-18.6 6 18.5 18-6.9-10.7 16.2 16.7 10-19.3 1.6 2.7 19.2-13.4-14-13.4 14m-105.2 97.7-19.4-1.7 16.7-9.9-10.8-16.1 18.2 6.8 6-18.5 5.9 18.5 18.2-6.8-10.8 16.1 16.7 10-19.3 1.6 2.6 19.3L395 280l-13.4 14M588 246l-19.4-1.6 16.8-10-10.8-16.1 18.2 6.9 5.9-18.5 6 18.5 18-7-10.6 16.2 16.7 10-19.4 1.6 2.7 19.3-13.4-14.1-13.4 14M563 305.7l-9.5 8 3 12-10.6-6.5-10.5 6.6 3-12-9.6-8.1 12.4-1 4.7-11.4 4.7 11.5"
        />
      </g>
    </FlagIconBase>
  );
});
