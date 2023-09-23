import { GlobeIcon, SearchIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import DonationItemCardVertical from '@/components/zis/DonationItemCardVertical';
import { cn } from '@/lib/utils';

const Carousel = dynamic(() => import('@/components/zis/Carousel'), {
  ssr: false,
  loading: () => (
    <div className="mt-6 px-4">
      <div className="aspect-video w-full rounded-md bg-slate-200 " />
    </div>
  ),
});

const HomePage = () => {
  return (
    <div className="relative">
      <nav className="flex w-full items-center justify-center space-x-3 bg-amber-300 p-4 py-7">
        <Image src="/zis.png" alt="Logo" width={32} height={32} />
        <div className="flex-1">
          <Button
            className="w-full border-red-500 bg-slate-50 text-left text-slate-400"
            size="sm"
            variant="outline"
          >
            <SearchIcon width={16} height={16} className="text-red-600 " />
            <div className="ml-3 flex-1">
              <p>Cari Program Kebaikan</p>
            </div>
          </Button>
        </div>
      </nav>
      <div className="relative aspect-[7/2]">
        <Image src="/home_header.png" fill alt="Home header" className="z-10 object-cover" />
        <div className="absolute left-5 top-5 z-10 pr-32 text-base font-semibold">
          Bantu sesama dengan berbagai cara lewat Ziswaf Indosat
        </div>
      </div>
      <div className="relative z-40 -mt-10 px-4">
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <p>Lewat Program yang telah kami sediakan, terbukti banyak orang yang telah terbantu.</p>
          <Button
            className="mt-4 w-full rounded-full text-slate-50"
            size="sm"
            variant="destructive"
          >
            Yuk Donasi Sekarang!
          </Button>
        </div>
      </div>
      <Carousel />
      <div className="mt-5 px-4">
        <h3 className="font-semibold ">Pilih Program Kebaikan</h3>

        <div className="flex space-x-4 overflow-auto scroll-smooth p-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex w-16 shrink-0 cursor-pointer flex-col items-center">
              <div
                className={cn(
                  'h-10 w-10 rounded-full items-center justify-center flex bg-slate-50 shadow-lg',
                  {
                    'bg-red-500': item === 1,
                  },
                )}
              >
                <GlobeIcon
                  className={cn('h-4 w-4 text-red-500', {
                    'text-slate-50': item === 1,
                  })}
                />
              </div>
              <p
                className={cn('text-[10px] text-center mt-2', {
                  'text-slate-400': item !== 1,
                })}
              >
                Program Umum
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-3 bg-slate-100" />
      <div className="mt-5 px-4">
        <DonationItemCardVertical />
        <DonationItemCardVertical />
        <DonationItemCardVertical />
        <DonationItemCardVertical />

        <div className="mt-4 flex justify-center">
          <Button className="rounded-full text-slate-50" size="sm" variant="destructive">
            Lihat Lebih Banyak
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
