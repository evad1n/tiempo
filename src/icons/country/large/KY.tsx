import React from 'react';

import { useStableUniqueId } from 'hooks';

export const KY = () => {
  const ids = useStableUniqueId(5);
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
      <g mask={`url(#${ids[0]})`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V24H32V0H0Z"
        fill="#2E42A5"
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
        <rect width="18" height="14" fill="#2B409A" />
        <mask
          id={`${ids[2]}`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="14"
        >
          <rect width="18" height="14" fill="white" />
        </mask>
        <g mask={`url(#${ids[2]})`}>
          <path
            d="M-2.00415 12.9999L1.9568 14.7371L18.09 1.88878L20.1793 -0.692749L15.9436 -1.27337L9.3633 4.26332L4.06679 7.99375L-2.00415 12.9999Z"
            fill="#F7FCFF"
          />
          <path
            d="M-1.46191 14.217L0.556007 15.2251L19.429 -0.932617H16.5956L-1.46191 14.217Z"
            fill="#F50100"
          />
          <path
            d="M20.0044 12.9999L16.0434 14.7371L-0.0897522 1.88878L-2.17906 -0.692749L2.0566 -1.27337L8.63695 4.26332L13.9335 7.99375L20.0044 12.9999Z"
            fill="#F7FCFF"
          />
          <path
            d="M19.8691 13.8732L17.8512 14.8813L9.81489 7.96339L7.43229 7.19046L-2.3802 -0.684069H0.453194L10.2602 7.00356L12.8651 7.93038L19.8691 13.8732Z"
            fill="#F50100"
          />
          <mask
            id={`${ids[3]}`}
            maskUnits="userSpaceOnUse"
            x="-2"
            y="-2"
            width="22"
            height="18"
            fill="black"
          >
            <rect fill="white" x="-2" y="-2" width="22" height="18" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.98451 0H7.98451V6H0V8H7.98451V14H9.98451V8H18V6H9.98451V0Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.98451 0H7.98451V6H0V8H7.98451V14H9.98451V8H18V6H9.98451V0Z"
            fill="#F50100"
          />
          <path
            d="M7.98451 0V-1.5H6.48451V0H7.98451ZM9.98451 0H11.4845V-1.5H9.98451V0ZM7.98451 6V7.5H9.48451V6H7.98451ZM0 6V4.5H-1.5V6H0ZM0 8H-1.5V9.5H0V8ZM7.98451 8H9.48451V6.5H7.98451V8ZM7.98451 14H6.48451V15.5H7.98451V14ZM9.98451 14V15.5H11.4845V14H9.98451ZM9.98451 8V6.5H8.48451V8H9.98451ZM18 8V9.5H19.5V8H18ZM18 6H19.5V4.5H18V6ZM9.98451 6H8.48451V7.5H9.98451V6ZM7.98451 1.5H9.98451V-1.5H7.98451V1.5ZM9.48451 6V0H6.48451V6H9.48451ZM0 7.5H7.98451V4.5H0V7.5ZM1.5 8V6H-1.5V8H1.5ZM7.98451 6.5H0V9.5H7.98451V6.5ZM9.48451 14V8H6.48451V14H9.48451ZM9.98451 12.5H7.98451V15.5H9.98451V12.5ZM8.48451 8V14H11.4845V8H8.48451ZM18 6.5H9.98451V9.5H18V6.5ZM16.5 6V8H19.5V6H16.5ZM9.98451 7.5H18V4.5H9.98451V7.5ZM8.48451 0V6H11.4845V0H8.48451Z"
            fill="#F7FCFF"
            mask={`url(#${ids[3]})`}
          />
        </g>
        <path
          d="M21.0576 14.722V11.05H28.8597V11.0504V11.0567V11.0631V11.0695V11.0759V11.0824V11.0888V11.0953V11.1018V11.1083V11.1148V11.1213V11.1278V11.1344V11.141V11.1475V11.1541V11.1607V11.1674V11.174V11.1807V11.1873V11.194V11.2007V11.2074V11.2142V11.2209V11.2277V11.2344V11.2412V11.248V11.2548V11.2616V11.2685V11.2753V11.2822V11.2891V11.296V11.3029V11.3098V11.3167V11.3236V11.3306V11.3376V11.3446V11.3515V11.3586V11.3656V11.3726V11.3796V11.3867V11.3938V11.4008V11.4079V11.415V11.4222V11.4293V11.4364V11.4436V11.4507V11.4579V11.4651V11.4723V11.4795V11.4867V11.494V11.5012V11.5084V11.5157V11.523V11.5303V11.5376V11.5449V11.5522V11.5595V11.5669V11.5742V11.5816V11.5889V11.5963V11.6037V11.6111V11.6185V11.6259V11.6334V11.6632V11.9068V11.9378V11.9455V11.9533V11.9611V11.9689V11.9767V11.9845V11.9923V12.0001V12.0079V12.0158V12.0236V12.0314V12.0393V12.0471V12.055V12.0629V12.0707V12.0786V12.0865V12.0944V12.1023V12.1101V12.1181V12.126V12.1339V12.1418V12.1497V12.1576V12.1656V12.1735V12.1814V12.1894V12.1973V12.2053V12.2133V12.2212V12.2292V12.2372V12.2451V12.2531V12.2611V12.2691V12.2771V12.2851V12.2931V12.3011V12.3091V12.3171V12.3251V12.3331V12.3411V12.3492V12.3572V12.3652V12.3733V12.3813V12.3893V12.3974V12.4054V12.4135V12.4215V12.4296V12.4376V12.4457V12.4537V12.4618V12.4698V12.4779V12.486V12.494V12.5021V12.5102V12.5183V12.5263V12.5344V12.5425V12.5506V12.5586V12.5667V12.5748V12.5829V12.591V12.5991V12.6071V12.6152V12.6233V12.6314V12.6395V12.6476V12.6557V12.6638V12.6718V12.6799V12.688V12.6961V12.7042V12.7123V12.7204V12.7285V12.7366V12.7447V12.7527V12.7608V12.7689V12.777V12.7851V12.7932V12.8013V12.8093V12.8174V12.8255V12.8336V12.8417V12.8497V12.8578V12.8659V12.874V12.882V12.8901V12.8982V12.9062V12.9143V12.9224V12.9304V12.9385V12.9465V12.9546V12.9627V12.9707V12.9787V12.9868V12.9948V13.0029V13.0109V13.0189V13.027V13.035V13.043V13.051V13.0591V13.0671V13.0751V13.0831V13.0911V13.0991V13.1071V13.1151V13.1231V13.1311V13.139V13.147V13.155V13.163V13.1709V13.1789V13.1868V13.1948V13.2027V13.2107V13.2186V13.2266V13.2345V13.2424V13.2503V13.2583V13.2662V13.2741V13.282V13.2899V13.2977V13.3056V13.3135V13.3214V13.3292V13.3371V13.345V13.3528V13.3606V13.3685V13.3763V13.3841V13.392V13.3998V13.4076V13.4387V13.4698V13.4775V13.4853V13.493V13.5007V13.5084V13.5161V13.5238V13.5315V13.5392V13.5469V13.5546V13.5622V13.5699V13.5775V13.5852V13.5928V13.6004V13.608V13.6156V13.6232V13.6308V13.6384V13.646V13.6535V13.6611V13.6686V13.6762V13.6837V13.6912V13.6987V13.7062V13.7137V13.7212V13.7287V13.7361V13.7436V13.751V13.7585V13.7659V13.7733V13.7807V13.7881V13.7955V13.8028V13.8102V13.8176V13.8249V13.8322V13.8396V13.8469V13.8542V13.8615V13.8687V13.876V13.8833V13.8905V13.9194V13.9481V13.9552V13.9623V13.9695V13.9766V13.9837V13.9908V13.9978V14.0049V14.0119V14.019V14.026V14.033V14.04V14.047V14.054V14.0609V14.0679V14.0748V14.0817V14.0886V14.0955V14.1024V14.1093V14.1161V14.123V14.1298V14.1366V14.1434V14.1502V14.157V14.1637V14.1705V14.1772V14.1839V14.1906V14.1973V14.204V14.2107V14.2173V14.2239V14.2306V14.2372V14.2438V14.2503V14.2569V14.2634V14.27V14.2765V14.283V14.2895V14.2959V14.3024V14.3088V14.3152V14.3216V14.328V14.3344V14.3408V14.3471V14.3534V14.3598V14.3661V14.3723V14.3786V14.3848V14.3911V14.3973V14.4035V14.4097V14.4158V14.422V14.4281V14.4342V14.4403V14.4464V14.4525V14.4585V14.4645V14.4705V14.4765V14.4825V14.4885V14.4944V14.5003V14.5062V14.5121V14.518V14.5239V14.5297V14.5355V14.5413V14.5471V14.722C28.8597 17.0739 27.9507 18.6314 27.0248 19.6012C26.5615 20.0864 26.0936 20.4248 25.7327 20.6417C25.5522 20.7502 25.3987 20.8281 25.2862 20.8788C25.2299 20.9041 25.1842 20.9225 25.1507 20.9344C25.1339 20.9404 25.1207 20.9445 25.111 20.9472C25.1052 20.9488 25.1017 20.9495 25.1001 20.9498C25.0985 20.9495 25.0949 20.9487 25.0886 20.9471C25.0785 20.9444 25.0645 20.9402 25.0469 20.9341C25.0116 20.9222 24.963 20.9037 24.9031 20.8783C24.7833 20.8275 24.619 20.7495 24.4254 20.641C24.0382 20.4239 23.5347 20.0853 23.0356 19.5999C22.0382 18.6297 21.0576 17.0726 21.0576 14.722Z"
          fill="white"
        />
        <path
          d="M21.0576 14.722V11.05H28.8597V11.0504V11.0567V11.0631V11.0695V11.0759V11.0824V11.0888V11.0953V11.1018V11.1083V11.1148V11.1213V11.1278V11.1344V11.141V11.1475V11.1541V11.1607V11.1674V11.174V11.1807V11.1873V11.194V11.2007V11.2074V11.2142V11.2209V11.2277V11.2344V11.2412V11.248V11.2548V11.2616V11.2685V11.2753V11.2822V11.2891V11.296V11.3029V11.3098V11.3167V11.3236V11.3306V11.3376V11.3446V11.3515V11.3586V11.3656V11.3726V11.3796V11.3867V11.3938V11.4008V11.4079V11.415V11.4222V11.4293V11.4364V11.4436V11.4507V11.4579V11.4651V11.4723V11.4795V11.4867V11.494V11.5012V11.5084V11.5157V11.523V11.5303V11.5376V11.5449V11.5522V11.5595V11.5669V11.5742V11.5816V11.5889V11.5963V11.6037V11.6111V11.6185V11.6259V11.6334V11.6632V11.9068V11.9378V11.9455V11.9533V11.9611V11.9689V11.9767V11.9845V11.9923V12.0001V12.0079V12.0158V12.0236V12.0314V12.0393V12.0471V12.055V12.0629V12.0707V12.0786V12.0865V12.0944V12.1023V12.1101V12.1181V12.126V12.1339V12.1418V12.1497V12.1576V12.1656V12.1735V12.1814V12.1894V12.1973V12.2053V12.2133V12.2212V12.2292V12.2372V12.2451V12.2531V12.2611V12.2691V12.2771V12.2851V12.2931V12.3011V12.3091V12.3171V12.3251V12.3331V12.3411V12.3492V12.3572V12.3652V12.3733V12.3813V12.3893V12.3974V12.4054V12.4135V12.4215V12.4296V12.4376V12.4457V12.4537V12.4618V12.4698V12.4779V12.486V12.494V12.5021V12.5102V12.5183V12.5263V12.5344V12.5425V12.5506V12.5586V12.5667V12.5748V12.5829V12.591V12.5991V12.6071V12.6152V12.6233V12.6314V12.6395V12.6476V12.6557V12.6638V12.6718V12.6799V12.688V12.6961V12.7042V12.7123V12.7204V12.7285V12.7366V12.7447V12.7527V12.7608V12.7689V12.777V12.7851V12.7932V12.8013V12.8093V12.8174V12.8255V12.8336V12.8417V12.8497V12.8578V12.8659V12.874V12.882V12.8901V12.8982V12.9062V12.9143V12.9224V12.9304V12.9385V12.9465V12.9546V12.9627V12.9707V12.9787V12.9868V12.9948V13.0029V13.0109V13.0189V13.027V13.035V13.043V13.051V13.0591V13.0671V13.0751V13.0831V13.0911V13.0991V13.1071V13.1151V13.1231V13.1311V13.139V13.147V13.155V13.163V13.1709V13.1789V13.1868V13.1948V13.2027V13.2107V13.2186V13.2266V13.2345V13.2424V13.2503V13.2583V13.2662V13.2741V13.282V13.2899V13.2977V13.3056V13.3135V13.3214V13.3292V13.3371V13.345V13.3528V13.3606V13.3685V13.3763V13.3841V13.392V13.3998V13.4076V13.4387V13.4698V13.4775V13.4853V13.493V13.5007V13.5084V13.5161V13.5238V13.5315V13.5392V13.5469V13.5546V13.5622V13.5699V13.5775V13.5852V13.5928V13.6004V13.608V13.6156V13.6232V13.6308V13.6384V13.646V13.6535V13.6611V13.6686V13.6762V13.6837V13.6912V13.6987V13.7062V13.7137V13.7212V13.7287V13.7361V13.7436V13.751V13.7585V13.7659V13.7733V13.7807V13.7881V13.7955V13.8028V13.8102V13.8176V13.8249V13.8322V13.8396V13.8469V13.8542V13.8615V13.8687V13.876V13.8833V13.8905V13.9194V13.9481V13.9552V13.9623V13.9695V13.9766V13.9837V13.9908V13.9978V14.0049V14.0119V14.019V14.026V14.033V14.04V14.047V14.054V14.0609V14.0679V14.0748V14.0817V14.0886V14.0955V14.1024V14.1093V14.1161V14.123V14.1298V14.1366V14.1434V14.1502V14.157V14.1637V14.1705V14.1772V14.1839V14.1906V14.1973V14.204V14.2107V14.2173V14.2239V14.2306V14.2372V14.2438V14.2503V14.2569V14.2634V14.27V14.2765V14.283V14.2895V14.2959V14.3024V14.3088V14.3152V14.3216V14.328V14.3344V14.3408V14.3471V14.3534V14.3598V14.3661V14.3723V14.3786V14.3848V14.3911V14.3973V14.4035V14.4097V14.4158V14.422V14.4281V14.4342V14.4403V14.4464V14.4525V14.4585V14.4645V14.4705V14.4765V14.4825V14.4885V14.4944V14.5003V14.5062V14.5121V14.518V14.5239V14.5297V14.5355V14.5413V14.5471V14.722C28.8597 17.0739 27.9507 18.6314 27.0248 19.6012C26.5615 20.0864 26.0936 20.4248 25.7327 20.6417C25.5522 20.7502 25.3987 20.8281 25.2862 20.8788C25.2299 20.9041 25.1842 20.9225 25.1507 20.9344C25.1339 20.9404 25.1207 20.9445 25.111 20.9472C25.1052 20.9488 25.1017 20.9495 25.1001 20.9498C25.0985 20.9495 25.0949 20.9487 25.0886 20.9471C25.0785 20.9444 25.0645 20.9402 25.0469 20.9341C25.0116 20.9222 24.963 20.9037 24.9031 20.8783C24.7833 20.8275 24.619 20.7495 24.4254 20.641C24.0382 20.4239 23.5347 20.0853 23.0356 19.5999C22.0382 18.6297 21.0576 17.0726 21.0576 14.722Z"
          stroke="#0B50A0"
          strokeWidth="0.1"
        />
        <path
          d="M21.0576 14.722V11.05H28.8597V11.0504V11.0567V11.0631V11.0695V11.0759V11.0824V11.0888V11.0953V11.1018V11.1083V11.1148V11.1213V11.1278V11.1344V11.141V11.1475V11.1541V11.1607V11.1674V11.174V11.1807V11.1873V11.194V11.2007V11.2074V11.2142V11.2209V11.2277V11.2344V11.2412V11.248V11.2548V11.2616V11.2685V11.2753V11.2822V11.2891V11.296V11.3029V11.3098V11.3167V11.3236V11.3306V11.3376V11.3446V11.3515V11.3586V11.3656V11.3726V11.3796V11.3867V11.3938V11.4008V11.4079V11.415V11.4222V11.4293V11.4364V11.4436V11.4507V11.4579V11.4651V11.4723V11.4795V11.4867V11.494V11.5012V11.5084V11.5157V11.523V11.5303V11.5376V11.5449V11.5522V11.5595V11.5669V11.5742V11.5816V11.5889V11.5963V11.6037V11.6111V11.6185V11.6259V11.6334V11.6632V11.9068V11.9378V11.9455V11.9533V11.9611V11.9689V11.9767V11.9845V11.9923V12.0001V12.0079V12.0158V12.0236V12.0314V12.0393V12.0471V12.055V12.0629V12.0707V12.0786V12.0865V12.0944V12.1023V12.1101V12.1181V12.126V12.1339V12.1418V12.1497V12.1576V12.1656V12.1735V12.1814V12.1894V12.1973V12.2053V12.2133V12.2212V12.2292V12.2372V12.2451V12.2531V12.2611V12.2691V12.2771V12.2851V12.2931V12.3011V12.3091V12.3171V12.3251V12.3331V12.3411V12.3492V12.3572V12.3652V12.3733V12.3813V12.3893V12.3974V12.4054V12.4135V12.4215V12.4296V12.4376V12.4457V12.4537V12.4618V12.4698V12.4779V12.486V12.494V12.5021V12.5102V12.5183V12.5263V12.5344V12.5425V12.5506V12.5586V12.5667V12.5748V12.5829V12.591V12.5991V12.6071V12.6152V12.6233V12.6314V12.6395V12.6476V12.6557V12.6638V12.6718V12.6799V12.688V12.6961V12.7042V12.7123V12.7204V12.7285V12.7366V12.7447V12.7527V12.7608V12.7689V12.777V12.7851V12.7932V12.8013V12.8093V12.8174V12.8255V12.8336V12.8417V12.8497V12.8578V12.8659V12.874V12.882V12.8901V12.8982V12.9062V12.9143V12.9224V12.9304V12.9385V12.9465V12.9546V12.9627V12.9707V12.9787V12.9868V12.9948V13.0029V13.0109V13.0189V13.027V13.035V13.043V13.051V13.0591V13.0671V13.0751V13.0831V13.0911V13.0991V13.1071V13.1151V13.1231V13.1311V13.139V13.147V13.155V13.163V13.1709V13.1789V13.1868V13.1948V13.2027V13.2107V13.2186V13.2266V13.2345V13.2424V13.2503V13.2583V13.2662V13.2741V13.282V13.2899V13.2977V13.3056V13.3135V13.3214V13.3292V13.3371V13.345V13.3528V13.3606V13.3685V13.3763V13.3841V13.392V13.3998V13.4076V13.4387V13.4698V13.4775V13.4853V13.493V13.5007V13.5084V13.5161V13.5238V13.5315V13.5392V13.5469V13.5546V13.5622V13.5699V13.5775V13.5852V13.5928V13.6004V13.608V13.6156V13.6232V13.6308V13.6384V13.646V13.6535V13.6611V13.6686V13.6762V13.6837V13.6912V13.6987V13.7062V13.7137V13.7212V13.7287V13.7361V13.7436V13.751V13.7585V13.7659V13.7733V13.7807V13.7881V13.7955V13.8028V13.8102V13.8176V13.8249V13.8322V13.8396V13.8469V13.8542V13.8615V13.8687V13.876V13.8833V13.8905V13.9194V13.9481V13.9552V13.9623V13.9695V13.9766V13.9837V13.9908V13.9978V14.0049V14.0119V14.019V14.026V14.033V14.04V14.047V14.054V14.0609V14.0679V14.0748V14.0817V14.0886V14.0955V14.1024V14.1093V14.1161V14.123V14.1298V14.1366V14.1434V14.1502V14.157V14.1637V14.1705V14.1772V14.1839V14.1906V14.1973V14.204V14.2107V14.2173V14.2239V14.2306V14.2372V14.2438V14.2503V14.2569V14.2634V14.27V14.2765V14.283V14.2895V14.2959V14.3024V14.3088V14.3152V14.3216V14.328V14.3344V14.3408V14.3471V14.3534V14.3598V14.3661V14.3723V14.3786V14.3848V14.3911V14.3973V14.4035V14.4097V14.4158V14.422V14.4281V14.4342V14.4403V14.4464V14.4525V14.4585V14.4645V14.4705V14.4765V14.4825V14.4885V14.4944V14.5003V14.5062V14.5121V14.518V14.5239V14.5297V14.5355V14.5413V14.5471V14.722C28.8597 17.0739 27.9507 18.6314 27.0248 19.6012C26.5615 20.0864 26.0936 20.4248 25.7327 20.6417C25.5522 20.7502 25.3987 20.8281 25.2862 20.8788C25.2299 20.9041 25.1842 20.9225 25.1507 20.9344C25.1339 20.9404 25.1207 20.9445 25.111 20.9472C25.1052 20.9488 25.1017 20.9495 25.1001 20.9498C25.0985 20.9495 25.0949 20.9487 25.0886 20.9471C25.0785 20.9444 25.0645 20.9402 25.0469 20.9341C25.0116 20.9222 24.963 20.9037 24.9031 20.8783C24.7833 20.8275 24.619 20.7495 24.4254 20.641C24.0382 20.4239 23.5347 20.0853 23.0356 19.5999C22.0382 18.6297 21.0576 17.0726 21.0576 14.722Z"
          stroke="#F7FCFF"
          strokeWidth="0.1"
        />
        <mask
          id={`${ids[4]}`}
          maskUnits="userSpaceOnUse"
          x="21"
          y="11"
          width="8"
          height="10"
        >
          <path
            d="M21.0576 14.722V11.05H28.8597V11.0504V11.0567V11.0631V11.0695V11.0759V11.0824V11.0888V11.0953V11.1018V11.1083V11.1148V11.1213V11.1278V11.1344V11.141V11.1475V11.1541V11.1607V11.1674V11.174V11.1807V11.1873V11.194V11.2007V11.2074V11.2142V11.2209V11.2277V11.2344V11.2412V11.248V11.2548V11.2616V11.2685V11.2753V11.2822V11.2891V11.296V11.3029V11.3098V11.3167V11.3236V11.3306V11.3376V11.3446V11.3515V11.3586V11.3656V11.3726V11.3796V11.3867V11.3938V11.4008V11.4079V11.415V11.4222V11.4293V11.4364V11.4436V11.4507V11.4579V11.4651V11.4723V11.4795V11.4867V11.494V11.5012V11.5084V11.5157V11.523V11.5303V11.5376V11.5449V11.5522V11.5595V11.5669V11.5742V11.5816V11.5889V11.5963V11.6037V11.6111V11.6185V11.6259V11.6334V11.6632V11.9068V11.9378V11.9455V11.9533V11.9611V11.9689V11.9767V11.9845V11.9923V12.0001V12.0079V12.0158V12.0236V12.0314V12.0393V12.0471V12.055V12.0629V12.0707V12.0786V12.0865V12.0944V12.1023V12.1101V12.1181V12.126V12.1339V12.1418V12.1497V12.1576V12.1656V12.1735V12.1814V12.1894V12.1973V12.2053V12.2133V12.2212V12.2292V12.2372V12.2451V12.2531V12.2611V12.2691V12.2771V12.2851V12.2931V12.3011V12.3091V12.3171V12.3251V12.3331V12.3411V12.3492V12.3572V12.3652V12.3733V12.3813V12.3893V12.3974V12.4054V12.4135V12.4215V12.4296V12.4376V12.4457V12.4537V12.4618V12.4698V12.4779V12.486V12.494V12.5021V12.5102V12.5183V12.5263V12.5344V12.5425V12.5506V12.5586V12.5667V12.5748V12.5829V12.591V12.5991V12.6071V12.6152V12.6233V12.6314V12.6395V12.6476V12.6557V12.6638V12.6718V12.6799V12.688V12.6961V12.7042V12.7123V12.7204V12.7285V12.7366V12.7447V12.7527V12.7608V12.7689V12.777V12.7851V12.7932V12.8013V12.8093V12.8174V12.8255V12.8336V12.8417V12.8497V12.8578V12.8659V12.874V12.882V12.8901V12.8982V12.9062V12.9143V12.9224V12.9304V12.9385V12.9465V12.9546V12.9627V12.9707V12.9787V12.9868V12.9948V13.0029V13.0109V13.0189V13.027V13.035V13.043V13.051V13.0591V13.0671V13.0751V13.0831V13.0911V13.0991V13.1071V13.1151V13.1231V13.1311V13.139V13.147V13.155V13.163V13.1709V13.1789V13.1868V13.1948V13.2027V13.2107V13.2186V13.2266V13.2345V13.2424V13.2503V13.2583V13.2662V13.2741V13.282V13.2899V13.2977V13.3056V13.3135V13.3214V13.3292V13.3371V13.345V13.3528V13.3606V13.3685V13.3763V13.3841V13.392V13.3998V13.4076V13.4387V13.4698V13.4775V13.4853V13.493V13.5007V13.5084V13.5161V13.5238V13.5315V13.5392V13.5469V13.5546V13.5622V13.5699V13.5775V13.5852V13.5928V13.6004V13.608V13.6156V13.6232V13.6308V13.6384V13.646V13.6535V13.6611V13.6686V13.6762V13.6837V13.6912V13.6987V13.7062V13.7137V13.7212V13.7287V13.7361V13.7436V13.751V13.7585V13.7659V13.7733V13.7807V13.7881V13.7955V13.8028V13.8102V13.8176V13.8249V13.8322V13.8396V13.8469V13.8542V13.8615V13.8687V13.876V13.8833V13.8905V13.9194V13.9481V13.9552V13.9623V13.9695V13.9766V13.9837V13.9908V13.9978V14.0049V14.0119V14.019V14.026V14.033V14.04V14.047V14.054V14.0609V14.0679V14.0748V14.0817V14.0886V14.0955V14.1024V14.1093V14.1161V14.123V14.1298V14.1366V14.1434V14.1502V14.157V14.1637V14.1705V14.1772V14.1839V14.1906V14.1973V14.204V14.2107V14.2173V14.2239V14.2306V14.2372V14.2438V14.2503V14.2569V14.2634V14.27V14.2765V14.283V14.2895V14.2959V14.3024V14.3088V14.3152V14.3216V14.328V14.3344V14.3408V14.3471V14.3534V14.3598V14.3661V14.3723V14.3786V14.3848V14.3911V14.3973V14.4035V14.4097V14.4158V14.422V14.4281V14.4342V14.4403V14.4464V14.4525V14.4585V14.4645V14.4705V14.4765V14.4825V14.4885V14.4944V14.5003V14.5062V14.5121V14.518V14.5239V14.5297V14.5355V14.5413V14.5471V14.722C28.8597 17.0739 27.9507 18.6314 27.0248 19.6012C26.5615 20.0864 26.0936 20.4248 25.7327 20.6417C25.5522 20.7502 25.3987 20.8281 25.2862 20.8788C25.2299 20.9041 25.1842 20.9225 25.1507 20.9344C25.1339 20.9404 25.1207 20.9445 25.111 20.9472C25.1052 20.9488 25.1017 20.9495 25.1001 20.9498C25.0985 20.9495 25.0949 20.9487 25.0886 20.9471C25.0785 20.9444 25.0645 20.9402 25.0469 20.9341C25.0116 20.9222 24.963 20.9037 24.9031 20.8783C24.7833 20.8275 24.619 20.7495 24.4254 20.641C24.0382 20.4239 23.5347 20.0853 23.0356 19.5999C22.0382 18.6297 21.0576 17.0726 21.0576 14.722Z"
            fill="white"
          />
          <path
            d="M21.0576 14.722V11.05H28.8597V11.0504V11.0567V11.0631V11.0695V11.0759V11.0824V11.0888V11.0953V11.1018V11.1083V11.1148V11.1213V11.1278V11.1344V11.141V11.1475V11.1541V11.1607V11.1674V11.174V11.1807V11.1873V11.194V11.2007V11.2074V11.2142V11.2209V11.2277V11.2344V11.2412V11.248V11.2548V11.2616V11.2685V11.2753V11.2822V11.2891V11.296V11.3029V11.3098V11.3167V11.3236V11.3306V11.3376V11.3446V11.3515V11.3586V11.3656V11.3726V11.3796V11.3867V11.3938V11.4008V11.4079V11.415V11.4222V11.4293V11.4364V11.4436V11.4507V11.4579V11.4651V11.4723V11.4795V11.4867V11.494V11.5012V11.5084V11.5157V11.523V11.5303V11.5376V11.5449V11.5522V11.5595V11.5669V11.5742V11.5816V11.5889V11.5963V11.6037V11.6111V11.6185V11.6259V11.6334V11.6632V11.9068V11.9378V11.9455V11.9533V11.9611V11.9689V11.9767V11.9845V11.9923V12.0001V12.0079V12.0158V12.0236V12.0314V12.0393V12.0471V12.055V12.0629V12.0707V12.0786V12.0865V12.0944V12.1023V12.1101V12.1181V12.126V12.1339V12.1418V12.1497V12.1576V12.1656V12.1735V12.1814V12.1894V12.1973V12.2053V12.2133V12.2212V12.2292V12.2372V12.2451V12.2531V12.2611V12.2691V12.2771V12.2851V12.2931V12.3011V12.3091V12.3171V12.3251V12.3331V12.3411V12.3492V12.3572V12.3652V12.3733V12.3813V12.3893V12.3974V12.4054V12.4135V12.4215V12.4296V12.4376V12.4457V12.4537V12.4618V12.4698V12.4779V12.486V12.494V12.5021V12.5102V12.5183V12.5263V12.5344V12.5425V12.5506V12.5586V12.5667V12.5748V12.5829V12.591V12.5991V12.6071V12.6152V12.6233V12.6314V12.6395V12.6476V12.6557V12.6638V12.6718V12.6799V12.688V12.6961V12.7042V12.7123V12.7204V12.7285V12.7366V12.7447V12.7527V12.7608V12.7689V12.777V12.7851V12.7932V12.8013V12.8093V12.8174V12.8255V12.8336V12.8417V12.8497V12.8578V12.8659V12.874V12.882V12.8901V12.8982V12.9062V12.9143V12.9224V12.9304V12.9385V12.9465V12.9546V12.9627V12.9707V12.9787V12.9868V12.9948V13.0029V13.0109V13.0189V13.027V13.035V13.043V13.051V13.0591V13.0671V13.0751V13.0831V13.0911V13.0991V13.1071V13.1151V13.1231V13.1311V13.139V13.147V13.155V13.163V13.1709V13.1789V13.1868V13.1948V13.2027V13.2107V13.2186V13.2266V13.2345V13.2424V13.2503V13.2583V13.2662V13.2741V13.282V13.2899V13.2977V13.3056V13.3135V13.3214V13.3292V13.3371V13.345V13.3528V13.3606V13.3685V13.3763V13.3841V13.392V13.3998V13.4076V13.4387V13.4698V13.4775V13.4853V13.493V13.5007V13.5084V13.5161V13.5238V13.5315V13.5392V13.5469V13.5546V13.5622V13.5699V13.5775V13.5852V13.5928V13.6004V13.608V13.6156V13.6232V13.6308V13.6384V13.646V13.6535V13.6611V13.6686V13.6762V13.6837V13.6912V13.6987V13.7062V13.7137V13.7212V13.7287V13.7361V13.7436V13.751V13.7585V13.7659V13.7733V13.7807V13.7881V13.7955V13.8028V13.8102V13.8176V13.8249V13.8322V13.8396V13.8469V13.8542V13.8615V13.8687V13.876V13.8833V13.8905V13.9194V13.9481V13.9552V13.9623V13.9695V13.9766V13.9837V13.9908V13.9978V14.0049V14.0119V14.019V14.026V14.033V14.04V14.047V14.054V14.0609V14.0679V14.0748V14.0817V14.0886V14.0955V14.1024V14.1093V14.1161V14.123V14.1298V14.1366V14.1434V14.1502V14.157V14.1637V14.1705V14.1772V14.1839V14.1906V14.1973V14.204V14.2107V14.2173V14.2239V14.2306V14.2372V14.2438V14.2503V14.2569V14.2634V14.27V14.2765V14.283V14.2895V14.2959V14.3024V14.3088V14.3152V14.3216V14.328V14.3344V14.3408V14.3471V14.3534V14.3598V14.3661V14.3723V14.3786V14.3848V14.3911V14.3973V14.4035V14.4097V14.4158V14.422V14.4281V14.4342V14.4403V14.4464V14.4525V14.4585V14.4645V14.4705V14.4765V14.4825V14.4885V14.4944V14.5003V14.5062V14.5121V14.518V14.5239V14.5297V14.5355V14.5413V14.5471V14.722C28.8597 17.0739 27.9507 18.6314 27.0248 19.6012C26.5615 20.0864 26.0936 20.4248 25.7327 20.6417C25.5522 20.7502 25.3987 20.8281 25.2862 20.8788C25.2299 20.9041 25.1842 20.9225 25.1507 20.9344C25.1339 20.9404 25.1207 20.9445 25.111 20.9472C25.1052 20.9488 25.1017 20.9495 25.1001 20.9498C25.0985 20.9495 25.0949 20.9487 25.0886 20.9471C25.0785 20.9444 25.0645 20.9402 25.0469 20.9341C25.0116 20.9222 24.963 20.9037 24.9031 20.8783C24.7833 20.8275 24.619 20.7495 24.4254 20.641C24.0382 20.4239 23.5347 20.0853 23.0356 19.5999C22.0382 18.6297 21.0576 17.0726 21.0576 14.722Z"
            stroke="white"
            strokeWidth="0.1"
          />
        </mask>
        <g mask={`url(#${ids[4]})`}>
          <rect x="20.5" y="10.5" width="9" height="3.4" fill="#F50100" />
          <path
            d="M24.512 14.6001C24.8 14.6001 25.376 14.2866 25.52 14.2143C26.048 13.9008 26.432 14.1902 26.744 14.3349C27.08 14.4795 27.704 14.6483 28.088 14.3349C28.472 14.0214 28.688 14.0455 28.952 14.0455C29 13.6838 29 13.3221 29 12.9122V12.6229C28.664 12.5506 28.496 12.647 28.136 12.9605C27.776 13.2739 27.368 13.2016 26.84 13.0087C26.336 12.7917 25.832 12.4059 25.328 13.0087C25.184 13.1775 24.848 13.4186 24.512 13.4186C24.152 13.4186 23.84 13.1775 23.696 13.0087C23.168 12.4059 22.688 12.7917 22.184 13.0087C21.656 13.2016 21.224 13.2739 20.864 12.9605C20.528 12.647 20.36 12.5506 20 12.6229V12.9122C20 13.3221 20.024 13.6838 20.072 14.0455C20.336 14.0455 20.528 14.0214 20.912 14.3349C21.296 14.6483 21.944 14.4795 22.256 14.3349C22.592 14.1902 22.976 13.9008 23.504 14.2143C23.648 14.2866 24.2 14.6001 24.512 14.6001H24.512Z"
            fill="#F50100"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0837 12.049C22.0837 12.049 22.3006 12.059 22.5574 12.3242C22.8143 12.5893 23.7595 12.4206 23.7595 12.2606C23.7595 12.1007 23.1859 12.0051 23.4063 11.7316C23.6267 11.4581 24 11.4576 24.3 11.6001C24.386 11.6001 24.3765 12.5356 24.5728 12.4843C25.1947 12.3217 26.1978 11.9994 26.492 12.1376C26.879 12.3196 27.1753 12.2743 27.0769 12.0133C26.9785 11.7523 26.7256 11.5891 26.2386 11.7316C25.7516 11.8741 25.8665 12.0133 25.4457 12.0133C25.0248 12.0133 24.3026 12.241 24.6234 11.7316C24.9107 11.2751 25.2535 11.2662 25.3843 11.4581C25.4513 11.5563 24.9053 11.7731 24.9053 11.8741C24.9053 12.0133 26.3117 11.6003 26.492 11.6003C26.6722 11.6003 27.1683 11.5891 27.2175 11.7316C27.2666 11.8741 27.5662 12.0048 27.3379 12.1376C27.1095 12.2705 26.733 12.3537 26.9921 12.5238C27.2511 12.694 27.9076 12.7714 27.9363 12.9484C27.965 13.1254 28.2473 13.3898 28.134 13.3898C28.0207 13.3898 27.8159 13.6391 27.6252 13.5632C27.4345 13.4873 27.4121 13.4206 27.5949 13.3591C27.7778 13.2976 27.776 13.039 27.6252 13.039C27.4744 13.039 27.4873 13.0194 27.1439 12.9288C26.8005 12.8382 26.346 12.7375 26.3734 12.9288C26.4007 13.1202 26.6332 13.5308 26.2207 13.5699C25.8082 13.6091 25.6152 13.7662 25.5349 13.6397C25.4546 13.5131 25.1676 13.3445 25.3933 13.2904C25.6189 13.2364 25.8346 13.4742 25.9158 13.4354C25.9971 13.3965 26.1724 13.258 26.0181 13.0934C25.8638 12.9288 25.5641 12.9233 25.8 12.8001C26.0358 12.6769 25.895 12.5831 25.4457 12.8382C24.9963 13.0934 24.7464 13.3102 24.3519 13.2796C23.9575 13.2489 23.7805 13.3892 23.6537 13.3479C23.5269 13.3065 22.9094 13.8049 22.7316 13.6784C22.5538 13.5519 21.9797 13.5034 22.0831 13.3479C22.1864 13.1924 22.3251 13.1123 22.4797 13.1924C22.6342 13.2724 22.7877 13.3525 22.892 13.2724C22.9962 13.1924 23.3263 12.8186 23.2506 12.7637C23.175 12.7088 22.9083 12.6147 22.4797 12.6147C22.0511 12.6147 22.0412 12.3299 21.9394 12.2001C21.8377 12.0702 22.0837 12.049 22.0837 12.049Z"
            fill="#FFD100"
          />
          <path
            d="M24.512 17C24.8 17 25.376 16.6865 25.52 16.6142C26.048 16.3007 26.432 16.5901 26.744 16.7348C27.08 16.8794 27.704 17.0482 28.088 16.7348C28.472 16.4213 28.688 16.4454 28.952 16.4454C29 16.0837 29 15.7221 29 15.3121V15.0228C28.664 14.9505 28.496 15.0469 28.136 15.3604C27.776 15.6738 27.368 15.6015 26.84 15.4086C26.336 15.1916 25.832 14.8058 25.328 15.4086C25.184 15.5774 24.848 15.8185 24.512 15.8185C24.152 15.8185 23.84 15.5774 23.696 15.4086C23.168 14.8058 22.688 15.1916 22.184 15.4086C21.656 15.6015 21.224 15.6738 20.864 15.3604C20.528 15.0469 20.36 14.9505 20 15.0228V15.3121C20 15.7221 20.024 16.0837 20.072 16.4454C20.336 16.4454 20.528 16.4213 20.912 16.7348C21.296 17.0482 21.944 16.8794 22.256 16.7348C22.592 16.5901 22.976 16.3007 23.504 16.6142C23.648 16.6865 24.2 17 24.512 17H24.512Z"
            fill="#0B50A0"
          />
          <path
            d="M24.512 19.3C24.8 19.3 25.376 18.9866 25.52 18.9143C26.048 18.6008 26.432 18.8901 26.744 19.0348C27.08 19.1795 27.704 19.3483 28.088 19.0348C28.472 18.7214 28.688 18.7455 28.952 18.7455C29 18.3838 29 18.0221 29 17.6122V17.3228C28.664 17.2505 28.496 17.347 28.136 17.6604C27.776 17.9739 27.368 17.9015 26.84 17.7086C26.336 17.4916 25.832 17.1058 25.328 17.7086C25.184 17.8774 24.848 18.1185 24.512 18.1185C24.152 18.1185 23.84 17.8774 23.696 17.7086C23.168 17.1058 22.688 17.4916 22.184 17.7086C21.656 17.9015 21.224 17.9739 20.864 17.6604C20.528 17.347 20.36 17.2505 20 17.3228V17.6122C20 18.0221 20.024 18.3838 20.072 18.7455C20.336 18.7455 20.528 18.7214 20.912 19.0348C21.296 19.3483 21.944 19.1795 22.256 19.0348C22.592 18.8901 22.976 18.6008 23.504 18.9143C23.648 18.9866 24.2 19.3 24.512 19.3H24.512Z"
            fill="#0B50A0"
          />
          <path
            d="M24.512 21.6001C24.8 21.6001 25.376 21.2866 25.52 21.2143C26.048 20.9008 26.432 21.1902 26.744 21.3349C27.08 21.4795 27.704 21.6483 28.088 21.3349C28.472 21.0214 28.688 21.0455 28.952 21.0455C29 20.6838 29 20.3221 29 19.9122V19.6229C28.664 19.5506 28.496 19.647 28.136 19.9605C27.776 20.2739 27.368 20.2016 26.84 20.0087C26.336 19.7917 25.832 19.4059 25.328 20.0087C25.184 20.1775 24.848 20.4186 24.512 20.4186C24.152 20.4186 23.84 20.1775 23.696 20.0087C23.168 19.4059 22.688 19.7917 22.184 20.0087C21.656 20.2016 21.224 20.2739 20.864 19.9605C20.528 19.647 20.36 19.5506 20 19.6229V19.9122C20 20.3221 20.024 20.6838 20.072 21.0455C20.336 21.0455 20.528 21.0214 20.912 21.3349C21.296 21.6483 21.944 21.4795 22.256 21.3349C22.592 21.1902 22.976 20.9008 23.504 21.2143C23.648 21.2866 24.2 21.6001 24.512 21.6001H24.512Z"
            fill="#0B50A0"
          />
          <path
            d="M25.0824 18.5445L25.0329 18.5184L24.9847 18.5469L24.568 18.7939L24.6905 18.2771L24.704 18.2203L24.6611 18.1806L24.2556 17.8059H24.7749H24.8446L24.8687 17.7404L25.0421 17.2694L25.2476 17.7455L25.2737 17.8059H25.3395H25.7676L25.4084 18.1853L25.3671 18.2289L25.3862 18.2858L25.5565 18.795L25.0824 18.5445Z"
            fill="#059334"
            stroke="#FFD100"
            strokeWidth="0.2"
          />
          <path
            d="M23.0824 16.5445L23.0329 16.5184L22.9847 16.5469L22.568 16.7939L22.6905 16.2771L22.704 16.2203L22.6611 16.1806L22.2556 15.8059H22.7749H22.8446L22.8687 15.7404L23.0421 15.2694L23.2476 15.7455L23.2737 15.8059H23.3395H23.7676L23.4084 16.1853L23.3671 16.2289L23.3862 16.2858L23.5565 16.795L23.0824 16.5445Z"
            fill="#059334"
            stroke="#FFD100"
            strokeWidth="0.2"
          />
          <path
            d="M27.0824 16.5445L27.0329 16.5184L26.9847 16.5469L26.568 16.7939L26.6905 16.2771L26.704 16.2203L26.6611 16.1806L26.2556 15.8059H26.7749H26.8446L26.8687 15.7404L27.0421 15.2694L27.2476 15.7455L27.2737 15.8059H27.3395H27.7676L27.4084 16.1853L27.3671 16.2289L27.3862 16.2858L27.5565 16.795L27.0824 16.5445Z"
            fill="#059334"
            stroke="#FFD100"
            strokeWidth="0.2"
          />
        </g>
        <path
          d="M20.337 20.6344C20.4288 20.831 21.0872 21.089 21.8528 20.7573C22.3733 20.5238 22.7102 20.192 23.0317 19.6022C23.1236 19.4547 23.1695 19.2704 22.9551 19.1598C22.7867 19.0615 22.5111 18.9509 22.3886 18.8526C22.3274 18.8035 22.2661 18.7666 22.2202 18.7297C22.2508 18.7543 22.2815 18.7789 22.3121 18.8158C22.6183 19.1107 22.2968 19.5408 21.9599 19.7988C21.7149 19.9831 21.2709 20.4378 20.6279 20.0077C20.4901 19.9094 20.1685 20.3149 20.337 20.6344L20.337 20.6344Z"
          fill="#FFD100"
        />
        <path
          d="M29.646 20.6344C29.5388 20.831 28.8804 21.089 28.1302 20.7573C27.6096 20.5238 27.2728 20.192 26.9359 19.6022C26.8594 19.4547 26.8134 19.2704 27.0278 19.1598C27.1962 19.0615 27.4718 18.9509 27.5943 18.8526C27.6555 18.8035 27.7015 18.7666 27.7627 18.7297C27.7321 18.7543 27.7015 18.7789 27.6709 18.8158C27.3646 19.1107 27.6862 19.5408 28.0077 19.7988C28.2527 19.9831 28.712 20.4378 29.3551 20.0077C29.4929 19.9094 29.7991 20.3149 29.646 20.6344L29.646 20.6344Z"
          fill="#FFD100"
        />
        <path
          d="M24.9916 21.691C26.2164 21.691 28.0997 21.2486 29.1102 19.7003C29.2786 19.4423 29.1102 19.3071 28.9112 19.2211C28.6968 19.1474 28.4365 18.9753 28.2987 18.8647C28.5437 19.0614 28.4978 19.1965 28.3294 19.4177C27.5485 20.4622 26.4767 20.9906 24.9916 20.9906C23.5064 20.9906 22.4346 20.4622 21.6538 19.4177C21.4853 19.1965 21.4394 19.0614 21.6691 18.8647C21.5466 18.9753 21.271 19.1474 21.0566 19.2211C20.8576 19.3071 20.6892 19.4423 20.8576 19.7003C21.8681 21.2486 23.7667 21.691 24.9916 21.691H24.9916Z"
          fill="#FFD100"
        />
        <path
          d="M22.1589 19.6144C22.1282 19.4915 21.9292 19.5407 21.868 19.6882C21.7914 19.6021 21.7148 19.5161 21.6536 19.4178C21.4699 19.1966 21.4392 19.0492 21.6995 18.8403C21.822 18.742 22.067 18.6314 22.2354 18.7543C22.5876 18.9877 22.4038 19.3687 22.1589 19.6144L22.1589 19.6144Z"
          fill="#F50100"
        />
        <path
          d="M27.8086 19.6144C27.8393 19.4915 28.0536 19.5407 28.1149 19.6882C28.1914 19.6021 28.268 19.5161 28.3292 19.4178C28.513 19.1966 28.5436 19.0492 28.268 18.8403C28.1608 18.742 27.9158 18.6314 27.7321 18.7543C27.3953 18.9877 27.5637 19.3687 27.8086 19.6144L27.8086 19.6144Z"
          fill="#F50100"
        />
        <path
          d="M23.424 9.36428C23.3037 9.2 22.9771 9.12699 22.8396 9.27302C22.7881 9.30952 22.7193 9.30952 22.6678 9.32778C22.5818 9.32778 22.4721 9.37374 22.5065 9.55628C22.599 9.55628 22.599 9.60158 22.6506 9.60158C22.6849 9.58332 22.7743 9.91816 22.9462 9.8999C23.1353 9.8999 23.3037 9.9849 23.3381 10.0214C23.3897 10.0762 23.4584 10.2222 23.3725 10.2952C23.2521 10.4047 23.1662 10.6603 23.3725 10.8611C23.5959 11.0436 24.1631 11.3174 24.7991 10.788C25.4179 10.277 26.3804 10.569 26.4491 10.7515C26.5351 10.9341 26.5695 11.0436 26.5866 11.1349C26.6038 11.2079 27.0679 11.3174 27.1367 11.3722C27.2226 11.4269 27.3429 11.4087 27.3086 11.2444C27.2398 10.7333 26.9476 10.6603 26.9132 10.423C27.0851 10.4412 27.2054 10.4412 27.2742 10.3682C27.3257 10.2952 27.3945 10.1674 27.4632 10.1309C27.5148 10.0944 27.5148 10.0579 27.4461 10.0762C27.3601 10.0944 27.3086 10.1309 27.1539 10.1127C26.7879 10.0704 26.8784 8.6858 25.6682 8.41645C24.9203 8.25 23.9877 9.39142 23.7319 9.50442C23.7264 9.50688 23.7211 9.50885 23.7162 9.51031C23.5959 9.51031 23.4928 9.45555 23.424 9.36428Z"
          fill="#059334"
        />
      </g>
    </svg>
  );
};
