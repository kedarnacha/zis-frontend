import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DonationItemCardVertical = () => {
  return (
    <Link href="#">
      <div className="flex border-b border-b-slate-200 py-3">
        <div className="relative aspect-video flex-1 overflow-hidden rounded-md">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-item1_4fp6LWH7n.jpg?updatedAt=1692376347958"
            fill
            alt="Item Image"
          />
        </div>
        <div className="flex w-full flex-1 flex-col px-3">
          <p className="text-[10px] text-slate-500">Yayasan Zakat</p>
          <p className="mt-2 text-xs font-semibold">Urgent Masjid Satu-satunya Rawan Roboh</p>

          <p className="mt-auto text-[10px]">
            Terkumpul{' '}
            <span className="ml-2 text-sm font-semibold text-orange-400">Rp20.000.000</span>
          </p>

          <div className="mb-2 mt-1 h-1 w-full rounded-full bg-slate-300">
            <div className="h-1 w-[65%] rounded-full bg-orange-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonationItemCardVertical;
