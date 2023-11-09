'use client';

import { parseAsInteger, useQueryState } from 'next-usequerystate';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const menu = [
  {
    name: 'Semua',
    value: null,
    sort: null,
  },
  {
    name: 'Aktif',
    value: 2
  },
  {
    name: 'Belum Aktif',
    value: 3
  },
  {
    name: 'Berakhir',
    value: 4
  },
];

const PengajuanMenu = () => {
  const [pengajuan, setPengajuan] = useQueryState('pengajuan', parseAsInteger);
  const router = useRouter();

  const handleClick = (value: number | null) => {
    if (!value) {
      router.push('/program/submit-program-intro');
      return;
    }

    setPengajuan(value);
  };

  return (
    <div className="mt-5 px-4">
      <h3 className="font-semibold ">Pilih Program Kebaikan</h3>
      <div className="flex space-x-4 overflow-auto scroll-smooth p-4">
        {menu.map((item) => (
          <Button
            onClick={() => handleClick(item.value)}
            key={item.value}
            size="sm"
            className={cn('shrink-0 rounded-full', {
              'border-red-500 text-red-500': item.value !== pengajuan,
            })}
            variant={item.value === pengajuan ? 'destructive' : 'outline'}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PengajuanMenu;
