'use client';

import React, { useState } from 'react';

import MustahiqIcon from '@/components/icon/MustahiqIcon';
import MuzakiIcon from '@/components/icon/MuzakiIcon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const selection = [
  {
    icon: MuzakiIcon,
    label1: 'Saya Muzaki,',
    label2: 'Berbagi kebaikan lewat donasi',
    description:
      'Masuk sebagai Muzaki atau donatur untuk berbagi kebaikan lewat program Zis Indosat',
    id: 'muzaki',
  },
  {
    icon: MustahiqIcon,
    label1: 'Saya Mustahiq,',
    label2: 'Saya ingin mengajukan bantuan',
    description:
      'Masuk sebagai Muzaki atau donatur untuk berbagi kebaikan lewat program Zis Indosat',
    id: 'mustahiq',
  },
];

const SelectRoleContent = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <div className="p-5">
        <h3 className="mb-4 font-semibold">Masuk Sebagai</h3>

        {selection.map((item) => (
          <div
            onClick={() => setSelected(item.id)}
            key={item.id}
            className={cn(
              'mb-4 cursor-pointer rounded-xl border-2 border-slate-300 p-5 transition duration-300 hover:border-rose-400',
              {
                'border-red-500': selected === item.id,
              },
            )}
          >
            <div className="flex items-center space-x-4">
              <item.icon />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight text-slate-500">{item.label1}</p>
                <p className="text-sm font-semibold leading-tight text-slate-500">{item.label2}</p>
              </div>
            </div>
            <p className="mt-4 text-xs">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Button className="w-full" size="lg" variant="destructive" disabled={!selected}>
          Selanjutnya
        </Button>
      </div>
    </>
  );
};

export default SelectRoleContent;
