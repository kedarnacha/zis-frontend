'use client';

import { User2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import useQueryAccount from '../hooks/useQueryAccount';

const MustahiqDataEntry = () => {
  const { data } = useQueryAccount();

  return (
    <div className="flex flex-row items-center space-x-4 p-5">
      <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
        <User2 className="h-4 w-4" />
      </div>
      <div className="flex-1 space-y-2">
        <p className="font-semibold">Lihat Data Diri</p>
        {!Boolean(data?.mustahiq) && (
          <div className="flex">
            <p className="rounded-full bg-red-200 px-2 text-xs font-semibold text-red-600">
              Data Belum Lengkap
            </p>
          </div>
        )}
      </div>

      <Link href="/mustahiq">
        <Button variant="destructive" className="rounded-full">
          Lihat Data
        </Button>
      </Link>
    </div>
  );
};

export default MustahiqDataEntry;
