import React from 'react';

function ZisMonoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.546.6H4.455A3.855 3.855 0 00.6 4.455v7.665h18.8V4.455A3.855 3.855 0 0015.546.6zM19.4 12.72H.6v2.825A3.855 3.855 0 004.455 19.4h11.09a3.854 3.854 0 003.855-3.854V12.72zM4.455 0A4.455 4.455 0 000 4.455v11.09A4.455 4.455 0 004.455 20h11.09A4.455 4.455 0 0020 15.546V4.455A4.455 4.455 0 0015.546 0H4.455zm10.363 3.699c.318.076 1.11.347 1.728.822l-.5.913c-.561-.365-1.882-.968-2.682-.457-1 .64-.091 1.279.136 1.37.033.013.11.038.222.074.668.216 2.538.82 3.005 1.524.546.822.182 2.512-1.272 2.831-1.455.32-2.864.183-4.046-.959L12 8.904c.727.67 2.491 1.662 3.727.274.167-.32.1-1.032-1.5-1.324-2-.365-2.636-1.553-2.545-2.375.09-.821 1.045-2.054 3.136-1.78zM13 15.187l-.182.365c-.303-.121-.909-.283-.909.046 0 .11.243.167.364.183.273.045.818.264.818.776 0 .64-.864.64-1.182.548-.318-.091-.5-.183-.59-.229l.272-.365c.273.137 1 .32 1 .046 0-.188-.308-.283-.645-.387l-.219-.07c-.409-.137-.409-.593-.227-.822.182-.228.636-.456 1.5-.091zm-9.91-.868h.455v2.831h-.454v-2.83zm12.955-.032h.5v.744h.33v.476h-.33v.821s0 .229.092.274c.09.046.272.037.272.037v.466c-.909.09-.864-.699-.864-.699v-.9h-.272v-.475h.272v-.744zm-6.09 1.135a.634.634 0 00-.637.631c0 .342.277.632.636.632.36 0 .637-.29.637-.632a.634.634 0 00-.637-.631zm0 1.727c.602 0 1.09-.49 1.09-1.096 0-.605-.488-1.096-1.09-1.096-.603 0-1.092.491-1.092 1.096 0 .606.489 1.096 1.091 1.096zm4.454-1.726a.634.634 0 00-.636.631c0 .342.277.632.636.632.36 0 .637-.29.637-.632a.634.634 0 00-.637-.631zm0 1.727c.238 0 .458-.076.637-.206v.206h.454v-2.1h-.454v.114a1.082 1.082 0 00-.637-.205c-.602 0-1.09.49-1.09 1.095 0 .606.488 1.096 1.09 1.096zM8.5 14h-.486v1.142a1.093 1.093 0 00-1.695.912c0 .606.488 1.097 1.09 1.097.587 0 1.066-.466 1.09-1.05H8.5V14zm-.486 1.858v.393a.635.635 0 01-.605.435.634.634 0 01-.636-.631c0-.342.277-.632.636-.632.287 0 .522.186.605.435zm-2.924-.854a.727.727 0 00-.545.228v-.182h-.454v2.1h.454v-1.507c.51-.438.848-.121.954.092H5.5v1.415h.455v-1.415h-.001c0-.411-.5-.73-.864-.73zM9.272 3.836H10.5v7.123H9.272V3.836zm-1.18 1.096H8.09V3.835H3v1.187h3.569l-3.57 4.886H3v1.05h5.182V9.68H4.627l3.464-4.748z"
        stroke={props.color ?? '#fff'}
      />
    </svg>
  );
}

export default ZisMonoIcon;
