import React, { forwardRef } from 'react';

import { FlagIconBase } from 'src/icons/flag-icon/FlagIconBase';
import { useStableUniqueId } from 'src/icons/flag-icon/useStableUniqueId';

type Props = {
  height: number;
  width: number;
};
export const IR = forwardRef<SVGSVGElement, Props>(({ height, width }, ref) => {
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
          d="M0 0v12h16V0H0Z"
          fill="#F7FCFF"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0v4h16V0H0Z"
            fill="#5EAA22"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8v4h16V8H0Z"
            fill="#E31D1C"
          />
          <path
            d="M.186 8.684H-.95M-.962 9.134v-.261h.37v.252h.374v-.252h-.194M.17 9.123h-.19v-.245h.398v-.2.445h.18v-.446M.76 8.704v.421H.572M2.138 8.684H1M.989 9.134v-.261h.37v.252h.374v-.252h-.194M2.155 9.123h-.188v-.245h.397v-.2.445h.18v-.446M2.745 8.704v.421H2.56M4.124 8.684H2.987M2.975 9.134v-.261h.37v.252h.374v-.252h-.194M4.106 9.123h-.188v-.245h.397v-.2.445h.18v-.446M4.696 8.704v.421H4.51M6.075 8.684H4.938M4.926 9.134v-.261h.37v.252h.374v-.252h-.194M6.058 9.123h-.189v-.245h.397v-.2.445h.18v-.446M6.648 8.704v.421H6.46M8.026 8.684H6.89M6.877 9.134v-.261h.37v.252h.374v-.252h-.194M8.044 9.123h-.189v-.245h.397v-.2.445h.18v-.446M8.634 8.704v.421h-.187M10.012 8.684H8.875M8.863 9.134v-.261h.37v.252h.375v-.252h-.194M10.03 9.123H9.84v-.245h.397v-.2.445h.18v-.446M10.62 8.704v.421h-.187M11.998 8.684h-1.137M10.85 9.134v-.261h.37v.252h.374v-.252H11.4M12.016 9.123h-.189v-.245h.397v-.2.445h.18v-.446M12.606 8.704v.421h-.187M13.984 8.684h-1.137M12.835 9.134v-.261h.37v.252h.375v-.252h-.194M13.967 9.123h-.188v-.245h.396v-.2.445h.18v-.446M14.557 8.704v.421h-.186M15.935 8.684H14.8M14.787 9.134v-.261h.37v.252h.374v-.252h-.194M16.023 9.123h-.189v-.245h.397v-.2.445h.18v-.446M.186 2.583H-.95M-.962 3.034v-.261h.37v.252h.374v-.252h-.194M.17 3.023h-.19v-.245h.398v-.2.445h.18v-.446M.76 2.604v.42H.572M2.138 2.583H1M.989 3.034v-.261h.37v.252h.374v-.252h-.194M2.155 3.023h-.188v-.245h.397v-.2.445h.18v-.446M2.745 2.604v.42H2.56M4.124 2.583H2.987M2.975 3.034v-.261h.37v.252h.374v-.252h-.194M4.106 3.023h-.188v-.245h.397v-.2.445h.18v-.446M4.696 2.604v.42H4.51M6.075 2.583H4.938M4.926 3.034v-.261h.37v.252h.374v-.252h-.194M6.058 3.023h-.189v-.245h.397v-.2.445h.18v-.446M6.648 2.604v.42H6.46M8.026 2.583H6.89M6.877 3.034v-.261h.37v.252h.374v-.252h-.194M8.044 3.023h-.189v-.245h.397v-.2.445h.18v-.446M8.634 2.604v.42h-.187M10.012 2.583H8.875M8.863 3.034v-.261h.37v.252h.375v-.252h-.194M10.03 3.023H9.84v-.245h.397v-.2.445h.18v-.446M10.62 2.604v.42h-.187M11.998 2.583h-1.137M10.85 3.034v-.261h.37v.252h.374v-.252H11.4M12.016 3.023h-.189v-.245h.397v-.2.445h.18v-.446M12.606 2.604v.42h-.187M13.984 2.583h-1.137M12.835 3.034v-.261h.37v.252h.375v-.252h-.194M13.967 3.023h-.188v-.245h.396v-.2.445h.18v-.446M14.557 2.604v.42h-.186M15.935 2.583H14.8M14.787 3.034v-.261h.37v.252h.374v-.252h-.194M16.023 3.023h-.189v-.245h.397v-.2.445h.18v-.446"
            stroke="#F7FCFF"
            strokeWidth=".5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.303 4.125s.214.112.433.112c.218 0 .438-.112.438-.112v.15s-.24.112-.453.112c-.212 0-.418-.112-.418-.112v-.15Zm-1.575 1.77c0-.889 1.221-1.47 1.221-1.47s-.706.378-.706 1.433c0 1.055.367 1.512.367 1.512s-.882-.586-.882-1.475Zm4.119-.049c0-.889-1.22-1.421-1.22-1.421s.706.378.706 1.433c0 1.055-.366 1.512-.366 1.512s.88-.635.88-1.524Zm-3.285.243c-.047-.888.692-1.684.692-1.684s-.269.366-.214 1.42c.02.361.162.9.341 1.217v-2.58h.75v2.602c.18-.296.318-.802.338-1.169.055-1.053-.201-1.49-.201-1.49s.738.796.692 1.684c-.028.529-.435 1.088-.76 1.454.158.035.37.078.66.135.007.032-.058.03-.187.028a4.118 4.118 0 0 0-.65.028c-.133.136-.225.216-.225.216l-.037-.047a1.245 1.245 0 0 0-.037.047s-.093-.08-.225-.216a4.118 4.118 0 0 0-.65-.028c-.13.003-.194.004-.188-.028.29-.057.502-.1.66-.135-.325-.366-.732-.925-.76-1.454Z"
            fill="#E31D1C"
          />
        </g>
      </g>
    </FlagIconBase>
  );
});
