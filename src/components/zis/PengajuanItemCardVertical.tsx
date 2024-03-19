import { formatDistance } from 'date-fns';
import { id } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Program } from '@/schema/program';
import { formatter } from '@/utils/number';

const PengajuanItemCardVertical = ({ program }: { program: Program }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_UNSAFE_URL}/public/${program.program_banner.banners_path}`;

  const percentage = (program.total_donation / program.program_target_amount) * 100;

  const distance = formatDistance(new Date(program.program_end_date), new Date(), {
    locale: id,
  });

  return (
    <Link href={`/program/${program.program_id}/submit-proposal`}>
      <div className="flex border-b border-b-slate-200 py-3">
        <div className="relative aspect-[480/320] flex-1 overflow-hidden rounded-md">
          <Image src={imageUrl} fill alt="Item Image" className="object-cover" />
        </div>
        <div className="flex w-full flex-1 flex-col px-3">
          <p className="mt-2 text-xs font-semibold">{program.program_title}</p>
          <div className="flex items-center">
            <p className="text-[10px] text-slate-500">
              {program?.program_institusi?.institusi_nama ?? 'ZIS Indosat'}
            </p>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_91_4411)">
                <path
                  d="M6.00521 1.00562C6.3941 1.00564 6.76967 1.1473 7.06171 1.40412L7.13871 1.47662L7.48771 1.82562C7.58349 1.92077 7.70856 1.98084 7.84271 1.99612L7.91021 2.00012H8.41021C8.81881 2.00009 9.21195 2.1564 9.50899 2.43699C9.80603 2.71757 9.98447 3.10117 10.0077 3.50912L10.0102 3.60012V4.10012C10.0102 4.23512 10.0562 4.36662 10.1392 4.47162L10.1842 4.52162L10.5327 4.87062C10.8216 5.15784 10.99 5.54443 11.0037 5.95155C11.0173 6.35867 10.8752 6.75568 10.6062 7.06162L10.5337 7.13862L10.1847 7.48762C10.0896 7.5834 10.0295 7.70847 10.0142 7.84262L10.0102 7.91012V8.41012C10.0102 8.81872 9.85392 9.21186 9.57334 9.5089C9.29275 9.80594 8.90915 9.98438 8.50121 10.0076L8.41021 10.0101H7.91021C7.7754 10.0102 7.64453 10.0556 7.53871 10.1391L7.48871 10.1841L7.13971 10.5326C6.85248 10.8215 6.4659 10.9899 6.05877 11.0036C5.65165 11.0172 5.25464 10.8751 4.94871 10.6061L4.87171 10.5336L4.52271 10.1846C4.42693 10.0895 4.30185 10.0294 4.16771 10.0141L4.10021 10.0101H3.60021C3.1916 10.0101 2.79846 9.85383 2.50142 9.57325C2.20438 9.29266 2.02595 8.90906 2.00271 8.50112L2.00021 8.41012V7.91012C2.00016 7.77531 1.95472 7.64444 1.87121 7.53862L1.82621 7.48862L1.47771 7.13962C1.18885 6.85239 1.02042 6.46581 1.00676 6.05868C0.993102 5.65156 1.13525 5.25455 1.40421 4.94862L1.47671 4.87162L1.82571 4.52262C1.92086 4.42684 1.98093 4.30176 1.99621 4.16762L2.00021 4.10012V3.60012L2.00271 3.50912C2.02503 3.11684 2.19092 2.74649 2.46875 2.46866C2.74658 2.19083 3.11693 2.02494 3.50921 2.00262L3.60021 2.00012H4.10021C4.23501 2.00007 4.36588 1.95463 4.47171 1.87112L4.52171 1.82612L4.87071 1.47762C5.01937 1.32806 5.19614 1.20937 5.39084 1.12836C5.58554 1.04736 5.79433 1.00565 6.00521 1.00562ZM7.85371 4.64662C7.75994 4.55288 7.63279 4.50022 7.50021 4.50022C7.36762 4.50022 7.24047 4.55288 7.14671 4.64662L5.50021 6.29262L4.85371 5.64662L4.80671 5.60512C4.70621 5.52741 4.5799 5.49087 4.45344 5.50292C4.32698 5.51496 4.20985 5.57469 4.12583 5.66998C4.04181 5.76526 3.99721 5.88895 4.00109 6.01592C4.00497 6.1429 4.05703 6.26364 4.14671 6.35362L5.14671 7.35362L5.19371 7.39512C5.28991 7.46974 5.41003 7.5067 5.53155 7.49906C5.65306 7.49142 5.76761 7.4397 5.85371 7.35362L7.85371 5.35362L7.89521 5.30662C7.96983 5.21041 8.00679 5.09029 7.99915 4.96877C7.99151 4.84726 7.93979 4.73271 7.85371 4.64662Z"
                  fill="#F14A51"
                />
              </g>
              <defs>
                <clipPath id="clip0_91_4411">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="mb-2 mt-auto h-1 w-full rounded-full bg-slate-300">
            <div className="h-1 rounded-full bg-orange-500" style={{ width: `${percentage}%` }} />
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                {formatter.format(program.total_donation)}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-[10px]">Donasi Terkumpul</p>
            </div>
            <p className="text-[10px]">{distance} lagi</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PengajuanItemCardVertical;
