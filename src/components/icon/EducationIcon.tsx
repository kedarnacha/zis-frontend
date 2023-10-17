import React from 'react';

function EducationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_360_109174)"
        stroke={props.color ?? '#ED1D26'}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.334 7.5L10 4.167 1.667 7.5 10 10.833 18.334 7.5zm0 0v5" />
        <path d="M5 8.833v4.5c0 .663.527 1.3 1.464 1.768.938.469 2.21.732 3.536.732s2.598-.263 3.536-.732c.937-.469 1.464-1.105 1.464-1.768v-4.5" />
      </g>
      <defs>
        <clipPath id="clip0_360_109174">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default EducationIcon;
