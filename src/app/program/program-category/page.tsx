import { ChevronRightIcon, GlobeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import Navbar from '@/components/zis/Navbar';
import { cn } from '@/lib/utils';

const category = [
  {
    title: 'Bantuan Pendidikan & Guru',
    description: 'Khusus untuk kebutuhan beasiswa, pembangunan sekolah, dan guru.',
  },
  {
    title: 'Bantuan Kesehatan & Medis',
    description: 'Biaya akan diberikan untuk keperluan pengobatan / perawatan penyakit.',
  },
  {
    title: 'Bantuan Umum',
    description: 'Untuk bencana alam, difabel, kegiatan sosial, dan yang lainnya.',
  },
  {
    title: 'Kategori Lainnya',
    description: 'Buat kebutuhan lainnya dan ajukan untuk tim Zis Indosat',
  },
];

const ProgramCategorySelectScreen = () => {
  return (
    <div>
      <Navbar title="Proses Proposal Program Bantuan" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Pilih Kategori Program Pengajuan Bantuan</h2>
      </div>

      <div className="p-5">
        {category.map((item, index) => (
          <Link href="/program/submit-program" key={String(index)}>
            <div
              className={cn(
                'mb-4 cursor-pointer rounded-xl border-2 border-slate-300 p-5 transition duration-300 hover:border-rose-400',
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <GlobeIcon className="h-4 w-4 text-red-500" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold leading-tight text-slate-500">{item.title}</p>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
                <ChevronRightIcon className="h-3 w-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProgramCategorySelectScreen;
