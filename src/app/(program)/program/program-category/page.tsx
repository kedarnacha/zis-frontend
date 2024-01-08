'use client';

import { ChevronRightIcon, Stethoscope, AppleIcon, School, GraduationCap, Theater, CircleDollarSign, MessagesSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '@/components/zis/Navbar';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { ProgramSchema } from '@/schema/program';
import { Button } from '@/components/ui/button';

const category = [
  {
    id: 2,
    title: 'Beasiswa Kuliah',
    description: 'Khusus untuk kebutuhan beasiswa kuliah.',
    Icon:GraduationCap,
  },
  {
    id: 3,
    title: 'Bantuan Kesehatan',
    description: 'Biaya akan diberikan untuk keperluan pengobatan / perawatan penyakit.',
    Icon: Stethoscope,
  },
  {
    id: 1,
    title: 'Beasiswa Guru',
    description: 'Khusus untuk kebutuhan beasiswa guru.',
    Icon:AppleIcon,
  },
  {
    id: 4,
    title: 'Bantuan Sekolah',
    description: 'Khusus untuk kebutuhan beasiswa sekolah.',
    Icon: School,
  },
  {
    id: 5,
    title: 'Sarpras Dakwah',
    description: 'Buat kebutuhan sarana prasarana untuk bantuan dakwah yang akan ajukan kepada tim Zis Indosat',
    Icon: Theater,
  },
  {
    id: 6,
    title: 'Bantuan Ekonomi',
    description: 'Buat kebutuhan bantuan ekonomi kepada yang membutuhkan dan diajukan kepada tim Zis Indosat',
    Icon: CircleDollarSign,
  },
  {
    id: 7,
    title: 'Bantuan Sosial',
    description: 'Untuk bencana alam, difabel, kegiatan sosial, dan yang lainnya.',
    Icon: MessagesSquare,
  },
];
const ProgramCategorySelectScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>();
  const [id,setId] = React.useState<number | undefined>()
  const form = useFormContext<ProgramSchema>();

  const watchAmount = form.watch('program_category_id');

  console.log(form.watch())
  return (
    <div>
      <Navbar title="Proses Proposal Program Bantuan" />

      <div className="border-b-8 border-b-slate-100 p-5">
        <h2 className="font-semibold text-slate-500">Pilih Kategori Program Pengajuan Bantuan</h2>
      </div>

      <div className="p-5">
        {category.map((item, index) => (
          // <Link href="/program/submit-program" key={String(index)}>
          <div
            className={cn(
              'mb-4 cursor-pointer rounded-xl border-2 p-5 transition duration-300',
              selectedIndex === index ? 'border-rose-400' : 'border-slate-300',
            )}
            onClick={() => {
              form.setValue('program_category_id', item.id);
              setSelectedIndex(index);
              setId(item.id)
            }}
            key={index}
          >
            <div className="flex items-center space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <item.Icon className="h-4 w-4 text-red-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold leading-tight text-slate-500">{item.title}</p>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
              <ChevronRightIcon className="h-3 w-3" />
            </div>
          </div>
          // </Link>
        ))}
      </div>
      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto w-full max-w-md border-t border-t-slate-100 bg-white p-5">
        <Link href={Boolean(watchAmount) ? `/program/program-mustahiq?category=${id}` : '#'}>
          <Button
            disabled={!Boolean(watchAmount)}
            type="button"
            role="button"
            className="w-full "
            size="lg"
            variant="destructive"
          >
            Selanjutnya
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramCategorySelectScreen;
