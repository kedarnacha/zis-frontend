import React from 'react';

function SuccessSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={131}
      height={130}
      viewBox="0 0 131 130"
      fill="none"
      {...props}
    >
      <circle cx={56} cy={68.5} r={47.5} fill="#F9D548" />
      <path
        d="M16.931 72.724L30.79 47.779a1 1 0 011.645-.152l24.698 29.825a1 1 0 001.609-.094l41.094-63.334a1 1 0 011.538-.17l20.428 19.962c.388.38.402 1.001.031 1.398l-63.23 67.642a1 1 0 01-1.316.128L17.219 74.02a1 1 0 01-.288-1.296z"
        fill="#EE888C"
      />
      <path
        d="M17.004 76.847L30.8 53.576a1 1 0 011.61-.153l24.745 28.004a1 1 0 001.572-.093l41.12-59.392a1 1 0 011.498-.168l20.368 18.654a1 1 0 01.017 1.46l-63.175 60.579a.999.999 0 01-1.212.132l-40-24.388a1 1 0 01-.34-1.364z"
        fill="#9D0A11"
      />
      <path
        d="M45 91.5l13 9 13.5-13M32.5 57l-6 10M102 27.5L118 42l-6.5 6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path d="M57.5 107.5l-14-7.5 14 11 13-13-13 9.5z" fill="#1A1919" />
    </svg>
  );
}

export default SuccessSvg;
