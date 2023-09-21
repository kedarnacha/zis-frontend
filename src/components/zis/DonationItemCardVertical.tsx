import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DonationItemCardVertical = () => {
  return (
    <Link href="#">
      <div className="flex border-b border-b-slate-200 py-3">
        <div className="aspect-video relative flex-1 rounded-md overflow-hidden">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-item1_4fp6LWH7n.jpg?updatedAt=1692376347958"
            fill
            alt="Item Image"
          />
        </div>
        <div className="flex-1 px-3 w-full flex flex-col">
          <p className="text-[10px] text-slate-500">Yayasan Zakat</p>
          <p className="text-xs font-semibold mt-2">Urgent Masjid Satu-satunya Rawan Roboh</p>

          <p className="text-[10px] mt-auto">
            Terkumpul{' '}
            <span className="text-sm font-semibold text-orange-400 ml-2">Rp20.000.000</span>
          </p>

          <div className="w-full h-1 rounded-full bg-slate-300 mt-1 mb-2">
            <div className="w-[65%] h-1 rounded-full bg-orange-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonationItemCardVertical;
