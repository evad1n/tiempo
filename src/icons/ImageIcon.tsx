import React from 'react';

import { type IconProps } from '~/src/types';

import { IconBase } from './IconBase';

export const ImageIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M9.00003 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9.00003 7C7.89546 7 7.00003 7.89543 7.00003 9C7.00003 10.1046 7.89546 11 9.00003 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6428 3H10.3572C9.27341 2.99999 8.39925 2.99998 7.69138 3.05782C6.96253 3.11737 6.32234 3.24318 5.73005 3.54497C4.78924 4.02434 4.02434 4.78924 3.54497 5.73005C3.24318 6.32234 3.11737 6.96253 3.05782 7.69138C2.99998 8.39925 2.99999 9.2734 3 10.3572V13.6428C2.99999 14.7266 2.99998 15.6007 3.05782 16.3086C3.11737 17.0375 3.24318 17.6777 3.54497 18.27C4.02434 19.2108 4.78924 19.9757 5.73005 20.455C6.32234 20.7568 6.96253 20.8826 7.69138 20.9422C8.39923 21 9.27334 21 10.3571 21H13.6428C14.7266 21 15.6008 21 16.3086 20.9422C17.0375 20.8826 17.6777 20.7568 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C20.699 17.7912 20.8279 17.2812 20.8998 16.7184C20.9169 16.5849 20.9308 16.4484 20.9422 16.3086C20.986 15.7727 20.9966 15.1414 20.9992 14.3959C21 14.1569 21 13.9061 21 13.6429V10.3572C21 9.27344 21 8.39923 20.9422 7.69138C20.8826 6.96253 20.7568 6.32234 20.455 5.73005C19.9757 4.78924 19.2108 4.02434 18.27 3.54497C17.6777 3.24318 17.0375 3.11737 16.3086 3.05782C15.6007 2.99998 14.7266 2.99999 13.6428 3ZM19 13.0931V10.4C19 9.2634 18.9992 8.47108 18.9488 7.85424C18.8994 7.24907 18.8072 6.90138 18.673 6.63803C18.3854 6.07354 17.9265 5.6146 17.362 5.32698C17.0986 5.1928 16.7509 5.10062 16.1458 5.05118C15.5289 5.00078 14.7366 5 13.6 5H10.4C9.2634 5 8.47108 5.00078 7.85424 5.05118C7.24907 5.10062 6.90138 5.1928 6.63803 5.32698C6.07354 5.6146 5.6146 6.07354 5.32698 6.63803C5.1928 6.90138 5.10062 7.24907 5.05118 7.85424C5.00078 8.47108 5 9.26339 5 10.4V13.6C5 13.6855 5.00001 13.7691 5.00003 13.8508L5.34986 13.6345L5.4285 13.5857C5.7582 13.381 6.08979 13.1751 6.46336 13.079C6.78945 12.9951 7.12912 12.9779 7.462 13.0286C7.84335 13.0866 8.19399 13.258 8.54262 13.4285L8.62578 13.4691L9.15413 13.7262C9.68352 13.9838 9.74666 14.001 9.78884 14.0065C9.86003 14.0159 9.93241 14.0099 10.001 13.9888C10.0417 13.9763 10.1011 13.9489 10.5803 13.6068L13.0859 11.8177L13.179 11.751C13.5633 11.4754 13.9489 11.1988 14.3939 11.08C14.7814 10.9766 15.1882 10.9679 15.5798 11.0548C16.0294 11.1545 16.4264 11.4145 16.822 11.6736L16.9179 11.7363L19 13.0931ZM5.05314 16.1694C5.10304 16.76 5.19455 17.1021 5.32698 17.362C5.6146 17.9265 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8994 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8994 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C18.8072 17.0986 18.8994 16.7509 18.9488 16.1458C18.9655 15.9418 18.9767 15.7186 18.9843 15.4701L15.826 13.4119C15.2633 13.0452 15.1926 13.0175 15.1467 13.0073C15.0684 12.99 14.987 12.9917 14.9095 13.0124C14.8641 13.0245 14.7946 13.0552 14.2481 13.4454L11.7424 15.2344L11.6612 15.2926C11.3225 15.5355 10.982 15.7796 10.5886 15.9005C10.2454 16.006 9.8835 16.0363 9.52754 15.9894C9.11946 15.9356 8.74313 15.7515 8.36871 15.5684L8.27895 15.5246L7.7506 15.2674C7.25899 15.0282 7.20097 15.0119 7.16134 15.0058C7.09476 14.9957 7.02683 14.9991 6.96161 15.0159C6.92278 15.0259 6.8667 15.048 6.40169 15.3355L5.05314 16.1694Z"
      fill="currentColor"
    />
  </IconBase>
);

export const ImageSolidIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9.4C3 7.15979 3 6.03969 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V12.9202C21 13.4005 21 13.6407 20.8997 13.7742C20.8123 13.8905 20.6786 13.9629 20.5335 13.9726C20.3669 13.9838 20.1657 13.8527 19.7632 13.5904L16.9181 11.7363L16.8222 11.6737C16.4266 11.4146 16.0296 11.1546 15.5799 11.0549C15.1883 10.968 14.7816 10.9766 14.394 11.0801C13.949 11.1988 13.5635 11.4754 13.1792 11.7511L13.0861 11.8178L10.5804 13.6068C10.1013 13.9489 10.0419 13.9763 10.0012 13.9888C9.93257 14.0099 9.86019 14.016 9.789 14.0066C9.74682 14.001 9.68368 13.9839 9.15429 13.7263L8.62594 13.4691L8.54278 13.4285C8.19415 13.2581 7.84351 13.0866 7.46216 13.0286C7.12928 12.978 6.78961 12.9951 6.46352 13.079C6.08995 13.1751 5.75836 13.381 5.42866 13.5857L5.35002 13.6345L3.41481 14.8311C3.23366 14.9431 3 14.813 3 14.6V9.4ZM3.49522 17.1328C3.34038 17.2286 3.26295 17.2765 3.20745 17.3483C3.16172 17.4075 3.1244 17.4915 3.1111 17.5651C3.09496 17.6544 3.10936 17.7334 3.13817 17.8912C3.20266 18.2446 3.29724 18.5437 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C6.03969 21 7.15979 21 9.4 21H14.6C16.8402 21 17.9603 21 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7825 18.3872 20.8915 17.892 20.9459 17.2228C20.9586 17.0662 20.9649 16.988 20.9455 16.909C20.9289 16.8416 20.8948 16.772 20.8516 16.7176C20.8011 16.654 20.7311 16.6083 20.5911 16.5171L15.8261 13.4119C15.2635 13.0453 15.1928 13.0176 15.1469 13.0074C15.0685 12.99 14.9872 12.9918 14.9097 13.0124C14.8642 13.0246 14.7948 13.0553 14.2482 13.4455L11.7426 15.2345L11.6614 15.2927C11.3226 15.5355 10.9822 15.7797 10.5887 15.9006C10.2455 16.0061 9.88366 16.0364 9.5277 15.9895C9.11962 15.9357 8.74329 15.7516 8.36887 15.5685L8.27911 15.5246L7.75075 15.2675C7.25915 15.0282 7.20113 15.0119 7.1615 15.0059C7.09492 14.9958 7.02698 14.9992 6.96177 15.016C6.92294 15.026 6.86686 15.048 6.40185 15.3356L3.49522 17.1328ZM11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z"
      fill="currentColor"
    />
  </IconBase>
);

export const ImageDuotoneIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M3 9.4C3 7.15979 3 6.03968 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03968 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03968 21 7.15979 21 9.4V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H9.4C7.15979 21 6.03968 21 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3 17.9603 3 16.8402 3 14.6V9.4Z"
      fill="currentColor"
    />
    <path
      d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
      fill="#3D3D40"
    />
    <path
      d="M3 15.0874C3.00116 16.0587 3.0095 16.799 3.06965 17.3958L6.40166 15.3355C6.86668 15.048 6.92276 15.0259 6.96158 15.0159C7.0268 14.9991 7.09473 14.9957 7.16131 15.0058C7.20094 15.0119 7.25896 15.0282 7.75057 15.2674L8.27892 15.5246L8.36868 15.5684C8.7431 15.7515 9.11943 15.9356 9.52751 15.9894C9.88347 16.0363 10.2454 16.006 10.5886 15.9005C10.982 15.7796 11.3225 15.5355 11.6612 15.2926L11.7424 15.2344L14.2481 13.4454C14.7946 13.0552 14.864 13.0245 14.9095 13.0124C14.987 12.9917 15.0684 12.99 15.1467 13.0073C15.1926 13.0175 15.2633 13.0452 15.8259 13.4119L20.9737 16.7665C20.9998 16.1817 20.9998 15.4766 20.9998 14.5999V14.3963L16.9179 11.7363L16.822 11.6736C16.4264 11.4145 16.0294 11.1545 15.5798 11.0548C15.1881 10.9679 14.7814 10.9766 14.3938 11.08C13.9489 11.1988 13.5633 11.4754 13.179 11.751L13.0859 11.8177L10.5802 13.6068C10.1011 13.9489 10.0417 13.9763 10.001 13.9888C9.93238 14.0099 9.86001 14.0159 9.78881 14.0065C9.74664 14.001 9.68349 13.9838 9.15411 13.7262L8.62575 13.4691L8.54259 13.4285C8.19396 13.258 7.84332 13.0866 7.46198 13.0286C7.1291 12.9779 6.78942 12.9951 6.46333 13.079C6.08976 13.1751 5.75817 13.381 5.42848 13.5857L5.34983 13.6345L3 15.0874Z"
      fill="#3D3D40"
    />
  </IconBase>
);
