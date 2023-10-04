'use client';

import { ChevronLeft, Download, HomeIcon, Share } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const ProgramDetailPage = () => {
  return (
    <div>
      <div className="relative w-full">
        <div className="to-black-90 absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-gradient-to-b from-black/50 p-5">
          <Link href="/">
            <Button className="h-8 w-8 rounded-full p-0" variant="secondary">
              <ChevronLeft size={16} />
            </Button>
          </Link>
          <Button className="rounded-full" variant="secondary">
            <Share size={16} className="mr-2" />
            Bagikan
          </Button>
        </div>
        <Image
          src="https://ik.imagekit.io/iyansr/zis-item1_4fp6LWH7n.jpg?updatedAt=1692376347958"
          height={375}
          width={230}
          alt="Item Image"
          className="w-full object-cover"
        />
      </div>

      <div className="p-5">
        <h1 className="font-bold">
          Tak Punya Tempat Tidur Layak, Mari Bangun Ponpes Hafidz Kasur Tidur yang Super Nyaman
        </h1>

        <div className="mb-2 mt-5 h-1 w-full rounded-full bg-slate-300">
          <div className="h-1 w-[65%] rounded-full bg-orange-500" />
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex-1">
            <p className="text font-semibold text-slate-900">Rp20.000.000</p>
          </div>
          <p className="text font-semibold text-slate-900">9</p>
        </div>
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm">Donasi Terkumpul</p>
          </div>
          <p className="text-sm">Hari Lagi</p>
        </div>
      </div>
      <div className="h-3 bg-slate-100" />
      <div className="p-5">
        <h2 className="font-semibold">Tentang Program Ini</h2>

        <p className="mt-5 font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, non dolorem corrupti
          tempore culpa, accusamus, exercitationem ipsa eius nostrum id quas quidem totam esse
          saepe! Maiores ex temporibus dolorem doloremque.
        </p>
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

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto flex w-full max-w-md items-center space-x-4 border-t border-t-slate-100 bg-white p-5">
        <Button className="w-full border-red-500 text-red-500" size="lg" variant="outline">
          Sedekah Rutin
        </Button>
        <Button className="w-full" size="lg" variant="destructive">
          Bantu Sekarang
        </Button>
      </div>
    </div>
  );
};

export default ProgramDetailPage;
