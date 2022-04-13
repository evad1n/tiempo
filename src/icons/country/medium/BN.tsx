import React from 'react';

import { useStableUniqueId } from 'hooks';

export const BN = () => {
  const ids = useStableUniqueId(2);
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
          d="M0 0V15H20V0H0Z"
          fill="#FFD221"
        />
        <mask
          id={`${ids[1]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="15"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V15H20V0H0Z"
            fill="white"
          />
        </mask>
        <g mask={`url(#${ids[1]})`}>
          <path
            d="M-1.91687 6.63463L-0.661876 3.77271L21.1048 13.3177L19.8498 16.1796L-1.91687 6.63463Z"
            fill="#313131"
          />
          <path
            d="M-1.88574 3.48105L-0.631274 0.618896L22.2178 10.6335L20.9634 13.4957L-1.88574 3.48105Z"
            fill="#FAF9F9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.58179 7.7482C3.69519 6.6602 3.84341 5.92432 3.84341 5.92432C3.84341 5.92432 4.75076 5.95748 4.74064 6.54257C4.74064 6.7898 5.0661 7.02382 5.34648 7.22543C5.55866 7.378 5.74502 7.51201 5.74502 7.61914C5.74502 7.86784 5.93228 10.3752 5.93228 10.3752C5.93228 10.3752 5.80149 10.6035 5.17502 10.6035C4.54855 10.6035 4.58179 10.2427 4.58179 10.2427C4.9616 9.77697 4.58179 7.7482 4.58179 7.7482ZM15.4186 7.7482C16.3052 6.6602 16.1569 5.92432 16.1569 5.92432C16.1569 5.92432 15.2496 5.95748 15.2597 6.54257C15.2597 6.7898 14.9343 7.02382 14.6539 7.22543C14.4417 7.378 14.2553 7.51201 14.2553 7.61914C14.2553 7.86784 14.0681 10.3752 14.0681 10.3752C14.0681 10.3752 14.1989 10.6035 14.8253 10.6035C15.4518 10.6035 15.4186 10.2427 15.4186 10.2427C15.0388 9.77697 15.4186 7.7482 15.4186 7.7482Z"
            fill="#CF1225"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0374 1.79663L10.7416 2.29935L10.2801 2.42266L10.7416 2.82153L10.167 2.67598V3.07896H10.7416L10.9337 4.02358L10.7114 3.86587L10.489 4.02358L10.2667 3.86587L10.0444 4.02358L9.81532 3.86587L9.58629 4.02358L9.35724 3.86587L9.12822 4.02358L9.41671 3.07896H9.94835V1.79663H10.0374ZM13.1782 4.96953C13.1782 4.96953 12.9635 5.15929 12.5032 4.96953C12.3494 4.90614 12.1808 4.79531 12.0049 4.67968C11.6543 4.44918 11.2747 4.19961 10.9254 4.26882C10.401 4.37275 10.168 4.62305 10.168 4.62305V4.04658H10.1044H10.0059H9.94234V4.62305C9.94234 4.62305 9.70928 4.37275 9.18485 4.26882C8.8356 4.19961 8.456 4.44918 8.10539 4.67968C7.92951 4.79531 7.76093 4.90614 7.60714 4.96953C7.14676 5.15929 6.93213 4.96953 6.93213 4.96953C6.93213 4.96953 6.93213 5.13017 7.27437 5.37757C7.42285 5.4849 7.59263 5.47717 7.73728 5.43402C7.63016 5.51484 7.57823 5.60979 7.74898 5.68589C8.10287 5.84359 8.68459 5.42844 8.74819 5.38178C8.67732 5.43447 7.97414 5.96326 8.29637 5.96326C8.6355 5.96326 9.18485 5.51889 9.18485 5.51889C9.18485 5.51889 8.51826 6.15847 8.87688 6.2581C9.10515 6.32152 9.37771 5.98888 9.5058 5.79182C9.50992 5.8337 9.5484 5.85933 9.59033 5.88726C9.64406 5.92305 9.70344 5.9626 9.70344 6.04493C9.70344 6.15048 9.72963 6.16859 9.75259 6.18447C9.77051 6.19687 9.78647 6.20791 9.78647 6.2581V6.40392L9.70344 6.52637C9.70344 6.52637 9.70344 6.71685 9.78647 6.86825C9.84935 6.98292 9.81698 7.07935 9.76149 7.24461C9.74372 7.29753 9.72358 7.35752 9.70344 7.42742C9.62042 7.71559 9.78647 8.20777 9.78647 8.20777H9.70344C9.70344 8.20777 9.78647 8.26839 9.78647 8.51111C9.78647 8.70874 9.73143 8.82097 9.62747 9.03292C9.60375 9.08128 9.57749 9.13483 9.54875 9.19577C9.39406 9.52381 9.70344 9.94087 9.70344 9.94087C9.70344 9.94087 9.18485 9.71326 9.2888 9.94087C9.36863 10.1157 9.80682 10.2857 10.0059 10.3552V10.388C10.0059 10.388 10.0241 10.3824 10.0551 10.372C10.0862 10.3824 10.1044 10.388 10.1044 10.388V10.3552C10.3035 10.2857 10.7417 10.1157 10.8215 9.94087C10.9254 9.71326 10.4068 9.94087 10.4068 9.94087C10.4068 9.94087 10.7162 9.52381 10.5615 9.19577C10.5328 9.13483 10.5065 9.08128 10.4828 9.03292C10.3789 8.82097 10.3238 8.70874 10.3238 8.51111C10.3238 8.26839 10.4068 8.20777 10.4068 8.20777H10.3238C10.3238 8.20777 10.4899 7.71559 10.4068 7.42742C10.3867 7.35752 10.3666 7.29753 10.3488 7.24461C10.2933 7.07935 10.2609 6.98292 10.3238 6.86825C10.4068 6.71685 10.4068 6.52637 10.4068 6.52637L10.3238 6.40392V6.2581C10.3238 6.20791 10.3398 6.19687 10.3577 6.18447C10.3807 6.16859 10.4068 6.15048 10.4068 6.04493C10.4068 5.9626 10.4662 5.92305 10.52 5.88726C10.5619 5.85933 10.6004 5.8337 10.6045 5.79182C10.7326 5.98888 11.0051 6.32152 11.2334 6.2581C11.592 6.15847 10.9254 5.51889 10.9254 5.51889C10.9254 5.51889 11.4748 5.96326 11.8139 5.96326C12.1362 5.96326 11.433 5.43447 11.3621 5.38178C11.4257 5.42844 12.0074 5.84359 12.3613 5.68589C12.5321 5.60979 12.4801 5.51484 12.373 5.43402C12.5177 5.47717 12.6874 5.4849 12.8359 5.37757C13.1782 5.13017 13.1782 4.96953 13.1782 4.96953ZM12.0383 5.26106C12.0383 5.26106 12.1842 5.3777 12.373 5.43402C12.245 5.33746 12.0383 5.26106 12.0383 5.26106ZM10.5615 5.68589C10.5053 5.61098 10.5313 5.6793 10.6045 5.79182C10.6071 5.76488 10.5956 5.73121 10.5615 5.68589ZM9.54875 5.68589C9.60498 5.61098 9.57895 5.6793 9.5058 5.79182C9.50315 5.76488 9.51473 5.73121 9.54875 5.68589ZM8.07202 5.26106C8.07202 5.26106 7.92605 5.3777 7.73728 5.43402C7.86526 5.33746 8.07202 5.26106 8.07202 5.26106Z"
            fill="#CF1225"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.01836 5.98608C7.01836 5.98608 6.27234 7.00085 6.35536 8.08509C6.43838 9.16933 7.32302 11.6919 9.9474 11.6919C9.96996 11.6919 9.99239 11.6913 10.0147 11.6913C12.7956 11.6913 13.5849 8.90992 13.5849 7.90972C13.5849 6.90084 12.9557 5.98608 12.9557 5.98608C12.9557 5.98608 13.0292 7.33984 12.9557 7.90972C12.734 9.62878 11.651 10.4228 9.99607 10.4228C8.33088 10.4228 7.30047 9.59877 7.01836 7.90972C6.92715 7.36362 7.01836 5.98608 7.01836 5.98608Z"
            fill="#CF1225"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.66602 12.3444C5.66602 12.3444 5.80143 11.9566 5.96789 11.9566C6.13435 11.9566 5.6494 11.62 5.96789 11.5248C6.28638 11.4296 6.77648 11.9042 6.77648 11.4296C6.77648 10.955 6.36201 10.6961 6.66655 10.6961C6.97108 10.6961 7.28881 10.6052 7.28881 10.6052C7.28881 10.6052 8.58453 11.9566 9.88174 11.9566C11.1789 11.9566 12.7389 10.6961 12.7389 10.6961C12.7389 10.6961 13.3138 10.5499 13.3138 10.7779C13.3138 11.006 13.1877 11.3502 13.1877 11.3502C13.1877 11.3502 13.5906 11.2708 13.7955 11.3502C14.0005 11.4296 13.7955 11.8096 13.7955 11.8096V11.9566C13.7955 11.9566 14.3288 11.8392 14.3288 12.0493C14.3288 12.2594 14.0714 12.1394 13.5497 12.1994C13.028 12.2594 12.8301 12.6673 12.5023 12.6673C12.1746 12.6673 12.104 12.3444 12.104 12.3444C12.104 12.3444 11.0885 12.8949 9.88174 12.8949C8.67501 12.8949 7.94607 12.3444 7.94607 12.3444C7.94607 12.3444 8.0599 12.9095 7.67436 12.7884C7.28881 12.6673 6.89439 11.8992 6.43114 12.0493C5.96789 12.1994 5.66602 12.3444 5.66602 12.3444Z"
            fill="#CF1225"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.53869 10.103C7.56151 10.0817 7.58442 10.0581 7.61447 10.0255C7.69958 9.93309 7.72263 9.90862 7.74005 9.89742C7.74355 9.91321 7.74594 9.93902 7.74594 9.97449C7.74594 10.2098 7.75429 10.3875 7.7772 10.511C7.79353 10.5991 7.81621 10.6561 7.85625 10.6832C7.91477 10.7228 7.97375 10.6883 8.02847 10.6061C8.15365 10.4179 8.38925 10.3947 8.38925 10.4665C8.38925 10.4851 8.38192 10.5052 8.33616 10.6173C8.32825 10.6367 8.32202 10.6523 8.31624 10.6676C8.28411 10.7521 8.26979 10.8133 8.27675 10.8666C8.28715 10.946 8.34569 10.9907 8.44048 10.9907C8.54591 10.9907 8.6152 10.9225 8.69178 10.7881C8.69924 10.775 8.71934 10.7384 8.72785 10.7229L8.72789 10.7228L8.7279 10.7228L8.73168 10.716C8.7457 10.6908 8.75596 10.6739 8.76541 10.6607C8.79334 10.6218 8.79942 10.6248 8.86129 10.771C8.87758 10.8095 8.91101 10.8906 8.93996 10.9609L8.94 10.961C8.96288 11.0165 8.98296 11.0653 8.98958 11.0808C9.03021 11.1763 9.05869 11.2326 9.08868 11.272C9.15757 11.3625 9.23979 11.3618 9.33798 11.2778C9.35742 11.2612 9.37915 11.2448 9.40425 11.2275C9.41731 11.2185 9.44842 11.1985 9.47817 11.1794L9.47823 11.1793L9.47826 11.1793L9.47827 11.1793C9.5065 11.1611 9.53347 11.1438 9.5426 11.1374C9.59957 11.0976 9.62785 11.0663 9.62729 11.0201C9.62659 10.9616 9.5778 10.9249 9.48053 10.8887C9.46126 10.8816 9.44632 10.8748 9.43549 10.8698L9.43549 10.8698L9.43547 10.8698C9.4275 10.8662 9.42175 10.8636 9.41813 10.8626C9.42056 10.8621 9.42411 10.8603 9.42968 10.8575L9.43454 10.8551C9.49556 10.8248 9.61874 10.8026 9.72869 10.8026L9.72931 10.8026C9.73444 10.8026 9.73753 10.8026 9.73934 10.8041C9.74206 10.8064 9.74193 10.8121 9.74161 10.8262V10.8262L9.74157 10.8278C9.74083 10.861 9.73366 10.893 9.70652 10.9949L9.69716 11.0305C9.6664 11.1501 9.65785 11.2224 9.67901 11.2848C9.71002 11.3761 9.79814 11.4079 9.93501 11.3808C10.1202 11.3442 10.2104 11.2706 10.2339 11.1579C10.2398 11.1296 10.241 11.1081 10.2411 11.064C10.2412 10.9914 10.2415 10.9907 10.3036 10.9907C10.3918 10.9907 10.4268 11.0221 10.464 11.1089L10.4772 11.1407C10.5203 11.2447 10.5604 11.29 10.6507 11.29C10.711 11.29 10.753 11.2646 10.7456 11.2062C10.7437 11.1913 10.7386 11.1781 10.7296 11.1598L10.7223 11.1456L10.7094 11.1202C10.6534 11.0056 10.6756 10.9181 10.8683 10.7946C10.9234 10.7594 11.0085 10.6998 11.0822 10.6481C11.1353 10.6109 11.1824 10.5779 11.2082 10.561C11.2103 10.5767 11.2118 10.5982 11.2132 10.6295L11.2163 10.7118L11.2177 10.7522C11.226 10.9614 11.2695 11.1529 11.3329 11.2307C11.4405 11.3624 11.5443 11.2407 11.6149 10.9509C11.6825 10.6737 11.7789 10.4122 11.8729 10.2536C11.919 10.1758 11.9622 10.127 11.995 10.1122C12.0168 10.1024 12.0322 10.1094 12.0547 10.1504C12.1396 10.3046 12.2703 10.4476 12.3808 10.4902C12.5447 10.5534 12.642 10.4203 12.642 10.1245C12.642 9.87654 12.6822 9.67879 12.7489 9.52621C12.7718 9.47374 12.7961 9.43076 12.8202 9.39666C12.834 9.3771 12.8441 9.36528 12.8489 9.36061L12.7781 9.28458C12.7456 9.31643 12.6999 9.38115 12.6554 9.48322C12.5828 9.64947 12.5395 9.86188 12.5395 10.1245C12.5395 10.3584 12.4935 10.4213 12.4168 10.3918C12.3334 10.3597 12.2181 10.2334 12.1439 10.0987C12.0973 10.0141 12.0282 9.98243 11.9538 10.0159C11.897 10.0416 11.8414 10.1043 11.7854 10.1989C11.6853 10.3679 11.5854 10.6387 11.5156 10.9254C11.4852 11.0501 11.4536 11.1293 11.4115 11.1632C11.3667 11.1084 11.3275 10.9355 11.3201 10.7479L11.3187 10.7088L11.3155 10.6248C11.3138 10.5855 11.3118 10.5595 11.3086 10.5385C11.2982 10.4711 11.2641 10.4314 11.2028 10.4475C11.1788 10.4537 11.0632 10.5341 10.9592 10.6064L10.9592 10.6064C10.9013 10.6467 10.847 10.6844 10.8141 10.7054C10.5757 10.8581 10.5384 11.005 10.6178 11.1674L10.6242 11.18C10.6051 11.1712 10.5919 11.1487 10.5715 11.0995L10.5578 11.0667C10.5059 10.9454 10.4392 10.8856 10.3036 10.8856C10.1732 10.8856 10.1388 10.9403 10.1386 11.0638C10.1385 11.1007 10.1377 11.1171 10.1337 11.1358C10.1198 11.2025 10.0638 11.2482 9.91561 11.2776C9.82302 11.2959 9.78685 11.2829 9.77577 11.2502C9.76385 11.2151 9.77082 11.1561 9.79623 11.0573L9.80535 11.0226C9.83539 10.9098 9.84299 10.8759 9.84401 10.8302C9.84577 10.751 9.80697 10.6975 9.72869 10.6975C9.60455 10.6975 9.46676 10.7223 9.38987 10.7605C9.26372 10.8232 9.28872 10.9292 9.44561 10.9876C9.47642 10.999 9.4968 11.0088 9.50917 11.0148C9.51796 11.019 9.52269 11.0213 9.52424 11.0208C9.52309 11.0211 9.52025 11.0234 9.51541 11.0273C9.50899 11.0326 9.49907 11.0406 9.48495 11.0505C9.4775 11.0557 9.4538 11.0709 9.42764 11.0878C9.39666 11.1077 9.36223 11.1298 9.34717 11.1402C9.31932 11.1594 9.2948 11.1779 9.27238 11.197C9.21508 11.2461 9.19903 11.2462 9.16943 11.2073C9.14637 11.177 9.12077 11.1264 9.08348 11.0388C9.07709 11.0237 9.05746 10.9761 9.03491 10.9214C9.00583 10.8508 8.9719 10.7684 8.95527 10.7291C8.8672 10.5209 8.77202 10.4741 8.6829 10.5984C8.67059 10.6155 8.65856 10.6354 8.64274 10.6638L8.63805 10.6723C8.62911 10.6885 8.61018 10.723 8.60333 10.735C8.54393 10.8393 8.4969 10.8856 8.44048 10.8856C8.39392 10.8856 8.38136 10.876 8.3783 10.8526C8.37436 10.8225 8.3856 10.7744 8.4117 10.7058C8.41712 10.6915 8.42306 10.6766 8.43066 10.658C8.48769 10.5183 8.49171 10.5072 8.49171 10.4665C8.49171 10.2533 8.11433 10.2906 7.94385 10.5468C7.92936 10.5686 7.91697 10.5828 7.90787 10.5899C7.89913 10.5764 7.88725 10.542 7.87786 10.4914C7.85653 10.3764 7.8484 10.2033 7.8484 9.97449C7.8484 9.82951 7.80484 9.75281 7.71119 9.79462C7.66884 9.81353 7.66724 9.81514 7.54002 9.95325C7.51161 9.98408 7.49031 10.006 7.46983 10.0251C7.44331 10.0498 7.42035 10.0674 7.40061 10.0778C7.37153 10.0931 7.36035 10.0836 7.34464 10.0159C7.32835 9.94567 7.32302 9.84652 7.32308 9.68141L7.32327 9.6122L7.32347 9.54092C7.32347 9.42372 7.2921 9.35806 7.21561 9.35806C7.18941 9.35806 7.16311 9.36696 7.12983 9.3839C7.11816 9.38984 7.10596 9.39659 7.0896 9.40603L7.04848 9.42984C6.97794 9.4701 6.9311 9.48835 6.88705 9.48835C6.87883 9.48835 6.87403 9.48965 6.87186 9.49024L6.87186 9.49024C6.87099 9.49048 6.87055 9.4906 6.87047 9.49048C6.87039 9.49035 6.87072 9.48995 6.87142 9.48911C6.87331 9.48685 6.87785 9.48141 6.88382 9.46967C6.91291 9.4125 6.99116 9.32023 7.11703 9.19654L7.04616 9.12061C6.91264 9.25182 6.82876 9.35073 6.793 9.421C6.74354 9.5182 6.78185 9.59349 6.88705 9.59349C6.95353 9.59349 7.01344 9.57015 7.09828 9.52172C7.19646 9.46568 7.20133 9.4632 7.21561 9.4632C7.21564 9.4632 7.22101 9.47445 7.22101 9.54092L7.22081 9.61176L7.22062 9.68137C7.22055 9.85491 7.22616 9.95919 7.24497 10.0403C7.27392 10.165 7.34482 10.2254 7.44746 10.1713C7.47644 10.156 7.5061 10.1333 7.53869 10.103ZM7.75082 9.89105C7.75157 9.89114 7.75211 9.89114 7.75234 9.89104L7.75082 9.89105ZM9.41505 10.8576C9.41321 10.8564 9.4123 10.8556 9.41227 10.8555C9.4133 10.8599 9.41425 10.8625 9.41586 10.8636L9.41505 10.8576ZM11.2283 10.5493L11.2272 10.5496L11.2279 10.5495L11.2283 10.5493Z"
            fill="#F6E017"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.64544 12.3438C8.6 12.4664 8.5283 12.507 8.44729 12.4457C8.42268 12.4271 8.39876 12.4006 8.36542 12.3577L8.35795 12.3479L8.35795 12.3479C8.34017 12.3245 8.29601 12.2665 8.27976 12.2463C8.20997 12.1594 8.14986 12.105 8.08456 12.0772L8.07858 12.0747L8.07858 12.0747C7.99897 12.0407 7.98186 12.0335 7.96508 12.0255L7.94678 12.0166C7.85099 11.9699 7.79634 11.9214 7.74373 11.8308C7.70258 11.76 7.66273 11.664 7.59521 11.4784L7.6912 11.4417C7.75658 11.6214 7.79479 11.7134 7.83175 11.777C7.87346 11.8488 7.91254 11.8835 7.99079 11.9217L8.00715 11.9296C8.02314 11.9372 8.03945 11.9442 8.11827 11.9777L8.11829 11.9777L8.11829 11.9778L8.12386 11.9801C8.20809 12.016 8.27929 12.0804 8.35881 12.1794C8.37657 12.2015 8.424 12.2639 8.4401 12.285L8.44011 12.285L8.44549 12.2921C8.47352 12.3282 8.49278 12.3495 8.5081 12.3611C8.51641 12.3674 8.51689 12.3678 8.51581 12.3685C8.52294 12.3641 8.53558 12.3444 8.54968 12.3064C8.5811 12.2216 8.55352 12.156 8.47713 12.0876C8.4743 12.085 8.46649 12.0788 8.45625 12.0706L8.45625 12.0706C8.42697 12.0471 8.37787 12.0078 8.36881 11.9943C8.33969 11.951 8.36463 11.907 8.4096 11.8951C8.42985 11.8897 8.45978 11.8877 8.50756 11.8877C8.673 11.8877 8.7185 11.9849 8.74918 12.2334L8.74969 12.2375C8.77386 12.4334 8.79832 12.4872 8.88193 12.4872C8.97626 12.4872 9.0337 12.4496 9.13398 12.3425L9.15595 12.319C9.28374 12.183 9.37323 12.1373 9.52357 12.1789C9.64365 12.2121 9.69497 12.2712 9.70705 12.3627C9.70839 12.3729 9.70905 12.3803 9.71037 12.3977C9.71623 12.4749 9.72985 12.4872 9.87927 12.4872C9.9926 12.4872 10.0981 12.4932 10.2356 12.5054L10.2522 12.5069L10.2522 12.5069C10.2845 12.5098 10.3531 12.516 10.3737 12.5177C10.4185 12.5214 10.4502 12.5232 10.4753 12.5232C10.4932 12.5232 10.507 12.5222 10.5164 12.5206C10.5203 12.4905 10.5381 12.4693 10.6099 12.388C10.6182 12.3786 10.6246 12.3712 10.6305 12.3642C10.6641 12.3246 10.6789 12.2981 10.678 12.2939C10.6778 12.2931 10.6478 12.2822 10.5667 12.2822C10.4922 12.2822 10.455 12.273 10.4483 12.2204C10.4426 12.1765 10.468 12.1553 10.5243 12.1253C10.5887 12.091 10.7062 12.0465 10.8472 12.0016C10.9829 11.9584 11.1261 11.9195 11.2351 11.8967C11.294 11.8843 11.342 11.8768 11.3769 11.8748C11.4435 11.871 11.4831 11.8803 11.4831 11.9403C11.4831 11.9653 11.5534 12.0512 11.6236 12.0902C11.7073 12.1368 11.7668 12.1191 11.8078 12.0098C11.8677 11.8502 11.9926 11.6778 12.1143 11.5791C12.1796 11.5262 12.2397 11.4977 12.2916 11.5023C12.3618 11.5087 12.3985 11.5689 12.3985 11.6599H12.296C12.296 11.6172 12.2903 11.6078 12.2827 11.6071C12.2633 11.6053 12.2244 11.6238 12.1778 11.6616C12.0704 11.7487 11.9567 11.9057 11.9034 12.0476C11.8389 12.2196 11.71 12.2579 11.5747 12.1826C11.4918 12.1365 11.4125 12.0489 11.3882 11.9795C11.3536 11.9814 11.31 11.9883 11.2556 11.9997C11.1502 12.0218 11.0102 12.0598 10.8776 12.102C10.7897 12.13 10.7114 12.1578 10.6515 12.1823C10.7246 12.1927 10.7669 12.2199 10.778 12.2711C10.789 12.3222 10.7642 12.3667 10.7078 12.4332C10.7014 12.4409 10.6945 12.4487 10.6858 12.4586C10.6362 12.5147 10.6179 12.5388 10.6179 12.5397C10.6179 12.6092 10.5651 12.6283 10.4753 12.6283C10.4469 12.6283 10.4128 12.6264 10.3655 12.6225C10.3443 12.6208 10.2744 12.6144 10.2426 12.6115L10.2268 12.6101C10.0919 12.5982 9.98912 12.5923 9.87927 12.5923C9.67751 12.5923 9.61833 12.5391 9.60822 12.4059C9.60705 12.3905 9.60651 12.3844 9.60551 12.3768C9.59901 12.3275 9.57743 12.3027 9.49688 12.2804C9.39179 12.2513 9.33428 12.2807 9.22971 12.392L9.20786 12.4154C9.08982 12.5414 9.01199 12.5923 8.88193 12.5923C8.73483 12.5923 8.68664 12.5136 8.65609 12.3101C8.65322 12.3211 8.64968 12.3324 8.64544 12.3438ZM8.65401 12.2507L8.65339 12.2466C8.64368 12.1821 8.63371 12.1327 8.62091 12.0953C8.67155 12.1593 8.68922 12.2299 8.66383 12.3101C8.6604 12.2914 8.65715 12.2716 8.65401 12.2507ZM10.5283 12.1743L10.5314 12.1753L10.5296 12.1746L10.5283 12.1743ZM10.5263 12.5183L10.5237 12.5191L10.5254 12.5188L10.5263 12.5183Z"
            fill="#F6E017"
          />
        </g>
      </g>
    </svg>
  );
};
