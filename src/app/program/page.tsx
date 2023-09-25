import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';
import DonationItemCardVertical from '@/components/zis/DonationItemCardVertical';
import FooterEmail from '@/components/zis/FooterEmail';
import Menu from '@/components/zis/Menu';
import { cn } from '@/lib/utils';

const page = () => {
  return (
    <div>
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

      <Menu />
      <div className="flex space-x-4 overflow-auto scroll-smooth p-4">
        {['Menu', 'Segera Berakhir', 'Jumlah Donatur', 'Program Berakhir'].map((item) => {
          return (
            <Button
              key={item}
              size="sm"
              className={cn('shrink-0 rounded-full', {
                'border-red-500 text-red-500': item !== 'Menu',
              })}
              variant={item === 'Menu' ? 'destructive' : 'outline'}
            >
              {item}
            </Button>
          );
        })}
      </div>
      <div className="h-3 bg-slate-100" />
      <div className="my-5 px-4">
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
      <div className="h-3 bg-slate-100" />
      <FooterEmail />
    </div>
  );
};

export default page;
