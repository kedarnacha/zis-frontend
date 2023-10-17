import React from 'react';

function MedicalIcon(props: React.SVGProps<SVGSVGElement>) {
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
        clipPath="url(#clip0_360_109164)"
        stroke={props.color ?? '#ED1D26'}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.666 6.666V5a1.667 1.667 0 011.667-1.667h3.333A1.667 1.667 0 0113.333 5v1.666M3.334 8.334a1.667 1.667 0 011.667-1.667h10a1.667 1.667 0 011.666 1.667V15a1.667 1.667 0 01-1.666 1.667H5A1.667 1.667 0 013.334 15V8.334zM8.334 11.667h3.333M10 10v3.333" />
      </g>
      <defs>
        <clipPath id="clip0_360_109164">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MedicalIcon;
