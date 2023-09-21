import { GlobeIcon, SearchIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DonationItemCardVertical from '@/components/zis/DonationItemCardVertical';
import { cn } from '@/lib/utils';

const Carousel = dynamic(() => import('@/components/zis/Carousel'), {
  ssr: false,
  loading: () => (
    <div className="px-4 mt-6">
      <div className="w-full aspect-video bg-slate-200 rounded-md " />
    </div>
  ),
});

const HomePage = () => {
  return (
    <div className="relative">
      <nav className="p-4 py-7 flex items-center justify-center w-full bg-amber-300 space-x-3">
        <Image src="/zis.png" alt="Logo" width={32} height={32} />
        <div className="flex-1">
          <Button
            className="bg-slate-50 border-red-500 text-slate-400 w-full text-left"
            size="sm"
            variant="outline"
          >
            <SearchIcon width={16} height={16} className="text-red-600 " />
            <div className="flex-1 ml-3">
              <p>Cari Program Kebaikan</p>
            </div>
          </Button>
        </div>
      </nav>
      <div className="relative aspect-[7/2]">
        <Image src="/home_header.png" fill alt="Home header" className="object-cover z-10" />
        <div className="absolute z-10 left-5 top-5 pr-32 font-semibold text-base">
          Bantu sesama dengan berbagai cara lewat Ziswaf Indosat
        </div>
      </div>
      <div className="px-4 -mt-10 z-40 relative">
        <div className="p-4 shadow-lg bg-white rounded-lg">
          <p>Lewat Program yang telah kami sediakan, terbukti banyak orang yang telah terbantu.</p>
          <Button
            className="text-slate-50 rounded-full w-full mt-4"
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

        <div className="flex space-x-4 px-4 overflow-auto py-4 scroll-smooth">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="w-16 cursor-pointer flex flex-col items-center flex-shrink-0"
            >
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

        <div className="flex justify-center mt-4">
          <Button className="text-slate-50 rounded-full" size="sm" variant="destructive">
            Lihat Lebih Banyak
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
