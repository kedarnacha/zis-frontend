'use client';

import { formatDistance } from 'date-fns';
import { id as indo } from 'date-fns/locale';
import { ChevronLeft, Download, HomeIcon, Share } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import DataLayout from '@/components/zis/DataLayout';
import { useAuthState } from '@/store/useAuthState';
import { TYPE_MUZAKI } from '@/utils/constants';
import { formatter } from '@/utils/number';

import useQueryDetailProgram from '../../hooks/useQueryDetailProgram';

const ProgramDetailPage = () => {
  const router = useRouter();
  const authState = useAuthState();

  const handleBack = () => {
    router.back();
  };

  const param = useParams();
  const id = param?.id as string;

  const { data, isError, isLoading } = useQueryDetailProgram(id);

  const imageUrl = `${process.env.NEXT_PUBLIC_UNSAFE_URL}/public/${data?.data.program_banner.banners_path}`;

  const percentage =
    ((data?.data?.total_donation ?? 0) / (data?.data?.program_target_amount ?? 0)) * 100;

  const distance = formatDistance(
    new Date(data?.data?.program_end_date ?? Date.now()),
    new Date(),
    {
      locale: indo,
    },
  );

  return (
    <DataLayout isLoading={isLoading} isError={isError} className="h-[80dvh]">
      <div className="relative w-full">
        <div className="to-black-90 absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-gradient-to-b from-black/50 p-5">
          <Button onClick={handleBack} className="h-8 w-8 rounded-full p-0" variant="secondary">
            <ChevronLeft size={16} />
          </Button>
          <Button className="rounded-full" variant="secondary">
            <Share size={16} className="mr-2" />
            Bagikan
          </Button>
        </div>
        <Image
          src={imageUrl}
          height={375}
          width={230}
          alt="Item Image"
          className="w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h1 className="font-bold">{data?.data.program_title}</h1>
        <p className="mt-2 text-sm font-light">{data?.data.program_short_desc ?? ''}</p>

        <div className="mb-2 mt-5 h-1 w-full rounded-full bg-slate-300">
          <div className="h-1 rounded-full bg-orange-500" style={{ width: `${percentage}%` }} />
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex-1">
            <p className="text font-semibold text-slate-900">
              {formatter.format(data?.data?.total_donation ?? 0)}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm">Donasi Terkumpul</p>
          </div>
          <p className="text-sm">{distance} Lagi</p>
        </div>
      </div>
      <div className="h-3 bg-slate-100" />
      <div className="prose prose-fuchsia p-5 leading-normal">
        <h4 className="font-semibold">Tentang Program Ini</h4>

        {(data?.data.program_description ?? '').split('\n').map((text, index) => (
          <p key={index} className="font-light">
            {text}
          </p>
        ))}
      </div>
      <div className="h-3 bg-slate-100" />
      <div className="p-5">
        <h2 className="font-semibold">Informasi Pengunaan Dana</h2>

        <div className="mt-5 rounded-lg border border-slate-300 px-3 py-5">
          <div className="flex items-center border-b border-b-slate-300 pb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <HomeIcon className="text-orange-500" size={16} />
                </div>
                <div className="flex-1 leading-tight">
                  <p className="font-semibold">Sudah</p>
                  <p className="font-semibold">Dicairkan</p>
                </div>
              </div>

              <p className="ml-2 mt-5">Rp 1.123.123</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <HomeIcon className="text-orange-500" size={16} />
                </div>
                <div className="flex-1 leading-tight">
                  <p className="font-semibold">Belum</p>
                  <p className="font-semibold">Dicairkan</p>
                </div>
              </div>

              <p className="ml-2 mt-5">Rp 1.123.123</p>
            </div>
          </div>
          <p className="mt-5 font-light">
            Data akan kembali diperbaharui setiap kali ada penarikan dana dilakukan oleh Mustahiq
            atau perima bantuan yang bersangkutan.
          </p>
        </div>
      </div>
      <div className="p-5">
        <h2 className="font-semibold">Total Transaksi sampai saat ini</h2>

        <div className="mt-5 flex items-center">
          <div className="flex-1 text-slate-500">Jumlah Donasi</div>

          <div className="font-medium text-black">1233 transaksi</div>
        </div>

        <div className="mt-5 flex items-center">
          <div className="flex-1 text-slate-500">Dana Terkumpul</div>

          <div className="font-medium text-black">Rp 123.123.123</div>
        </div>

        <button className="mt-5 flex w-full items-center justify-between rounded-lg border border-slate-200 p-2">
          <span>Unduh laporan distribusi</span>
          <Download size={16} className="text-orange-500" />
        </button>
      </div>

      <div className="h-3 bg-slate-100" />
      <div className="p-5">
        <h2 className="font-semibold">Informasi Pengunaan Dana</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Apakah Zis Indosat memberikan bantuan langsung?
            </AccordionTrigger>
            <AccordionContent>Lorem ipsum dolor sit amet.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Bagaimana jika donasi yang diberikan tidak sesuai target?
            </AccordionTrigger>
            <AccordionContent>Lorem ipsum dolor sit amet consectetur.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex-1 text-left font-normal">
              Apakah Zis Indosat tidak memungut biaya potongan?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {authState?.user?.user_type === TYPE_MUZAKI && (
        <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-md items-center space-x-4 border-t border-t-slate-100 bg-white p-5">
          <Link href="/program/1/recurring-donation" className="w-full flex-1">
            <Button className="w-full border-red-500 text-red-500" size="lg" variant="outline">
              Sedekah Rutin
            </Button>
          </Link>
          <Link href="/program/1/donate" className="w-full flex-1">
            <Button className="w-full" size="lg" variant="destructive">
              Bantu Sekarang
            </Button>
          </Link>
        </div>
      )}
    </DataLayout>
  );
};

export default ProgramDetailPage;
