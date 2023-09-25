import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DonationItemCard = () => {
  return (
    <Link href="#">
      <div className="w-60 shrink-0 overflow-hidden rounded-md border shadow-md transition duration-300 hover:shadow-none">
        <div className="relative aspect-video">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-item1_4fp6LWH7n.jpg?updatedAt=1692376347958"
            fill
            alt="Item Image"
          />
        </div>

        <div className="p-3">
          <p className="text-xs font-semibold">Urgent Masjid Satu-satuny a Rawan Roboh</p>
          <p className="mt-2 text-[10px] text-slate-500 ">Yayasan Zakat</p>

          <div className="mb-2 mt-3 h-1 w-full rounded-full bg-slate-300">
            <div className="h-1 w-[65%] rounded-full bg-orange-500" />
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">Rp20.000.000</p>
            </div>
            <p className="text-sm font-semibold text-slate-900">9</p>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-[10px]">Donasi Terkumpul</p>
            </div>
            <p className="text-[10px]">Hari Lagi</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonationItemCard;
