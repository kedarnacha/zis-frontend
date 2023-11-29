'use client';

import { Stethoscope, AppleIcon, School, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { parseAsInteger, useQueryState } from 'next-usequerystate';
import React from 'react';

import { cn } from '@/lib/utils';

import EducationIcon from '../icon/EducationIcon';
import MedicalIcon from '../icon/MedicalIcon';
import ZisMonoIcon from '../icon/ZisMonoIcon';

const menu = [
  {
    name: 'Semua Kategori',
    value: null,
    Icon: ZisMonoIcon,
  },
  {
    name: 'Bantuan Kesehatan',
    value: 3,
    Icon: Stethoscope,
  },
  {
    name: 'Beasiswa Kuliah',
    value: 2,
    Icon: GraduationCap,
  },
  {
    name: 'Beasiswa Guru',
    value: 1,
    Icon: AppleIcon,
  },
  {
    name: 'Bantuan Sekolah',
    value: 4,
    Icon: School,
  },
];

const MenuMustahiq = ({ fromHome = false }: { fromHome?: boolean }) => {
  const [category, setCategory] = useQueryState('category', parseAsInteger);
  const router = useRouter();

  const handleClick = (value: number | null) => {
    if (!value) {
      router.push('/program/program-mustahiq');
      return;
    }

    if (fromHome) {
      router.push(`/program?category=${value}`);
      return;
    }

    setCategory(value);
  };

  return (
    <div className="mt-5 px-4">
      <h3 className="font-semibold text-lg">Pilih Program Serupa dengan Pengajuan Proposal Bantuan</h3>

      <div className="flex space-x-4 overflow-auto scroll-smooth p-4">
        {menu.map((item) => (
          <div
            onClick={() => handleClick(item.value)}
            key={item.value}
            className="flex w-16 shrink-0 cursor-pointer flex-col items-center"
          >
            <div
              className={cn(
                'h-10 w-10 rounded-full items-center justify-center flex bg-slate-50 shadow-lg',
                {
                  'bg-red-500': item.value === category,
                },
              )}
            >
              <item.Icon
                className={cn('h-4 w-4 text-red-500', {
                  'text-slate-50': item.value === category,
                })}
                color={item.value === category ? '#fff' : '#ED1D26'}
              />
            </div>
            <p
              className={cn('text-[10px] text-center mt-2', {
                'text-slate-400': item.value !== category,
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

export default MenuMustahiq;
