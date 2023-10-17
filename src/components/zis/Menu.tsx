'use client';

import { GlobeIcon, MoreHorizontal } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import EducationIcon from '../icon/EducationIcon';
import MedicalIcon from '../icon/MedicalIcon';
import ZisMonoIcon from '../icon/ZisMonoIcon';

const menu = [
  {
    name: 'Semua Kategori',
    value: '1',
    Icon: ZisMonoIcon,
  },
  {
    name: 'Kesehatan & Medis',
    value: '2',
    Icon: MedicalIcon,
  },
  {
    name: 'Pendidikan & Guru',
    value: '3',
    Icon: EducationIcon,
  },
  {
    name: 'Program Umum',
    value: '4',
    Icon: GlobeIcon,
  },
  {
    name: 'Kategori Lainnya',
    value: '5',
    Icon: MoreHorizontal,
  },
];

const Menu = () => {
  const [active, setActive] = React.useState('1');

  return (
    <div className="mt-5 px-4">
      <h3 className="font-semibold ">Pilih Program Kebaikan</h3>

      <div className="flex space-x-4 overflow-auto scroll-smooth p-4">
        {menu.map((item) => (
          <div
            onClick={() => setActive(item.value)}
            key={item.value}
            className="flex w-16 shrink-0 cursor-pointer flex-col items-center"
          >
            <div
              className={cn(
                'h-10 w-10 rounded-full items-center justify-center flex bg-slate-50 shadow-lg',
                {
                  'bg-red-500': item.value === active,
                },
              )}
            >
              <item.Icon
                className={cn('h-4 w-4 text-red-500', {
                  'text-slate-50': item.value === active,
                })}
                color={item.value === active ? '#fff' : '#ED1D26'}
              />
            </div>
            <p
              className={cn('text-[10px] text-center mt-2', {
                'text-slate-400': item.value !== active,
              })}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
