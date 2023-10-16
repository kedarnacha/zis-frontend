'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import useQueryAccount from '@/app/account/hooks/useQueryAccount';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Divider from '@/components/zis/Divider';
import Navbar from '@/components/zis/Navbar';
import SearchYellowSvg from '@/components/zis/SearchYellowSvg';

const content = [
  {
    title: 'Tentukan Jenis Akun & Lengkapi data diri sebelum mengajukan program',
    description:
      'Dengan Zis Indosat kamu dapat memilih sebagai personal atau institusi untuk masuk',
  },
  {
    title: 'Isi Form pembuatan Ajukan Bantuan',
    description:
      'Isi form secara lengkap dengan mengikuti instruksi yang diberikan, siapkan data yang diperlukan',
  },
  {
    title: 'Menunggu Verifikasi Pengajuan Bantuan Kamu Diterima',
    description:
      'Data yang kamu serahkan akan diperiksa oleh tim kami, tunggu sementara untuk proses persetujuan',
  },
];

const tips = [
  {
    title: 'Verifikasi Identitas & Data Dokumen',
    description: 'Lakukan verifikasi agar permohonan galang dana lebih meyakinkan orang berdonasi',
  },
  {
    title: 'Sebarkan galang dana kamu sesering mungkin',
    description: 'Makin sering disebarkan, makin besar peluang galang danamu mendapat donasi',
  },
];

const SubmitProgramPage = () => {
  const router = useRouter();
  const { data } = useQueryAccount();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    if (!data) {
      return;
    }
    if (data?.mustahiq === null) {
      setIsOpen(true);
      return;
    }

    router.push('/program/program-category');
  };

  const handleClickModal = () => {
    router.push('/program/program-category');
    setIsOpen(false);
  };

  return (
    <div className="pb-24">
      <Navbar title="Pengajuan Bantuan di Zis Indosat" />

      <div className="p-5">
        <Image
          src="/love_hand.png"
          height={377}
          width={166}
          className="w-full object-cover"
          alt="header image"
        />
      </div>

      <div className="prose -mt-5 px-5 pb-5">
        <h3 className="text-center text-slate-700">Ajukan Bantuan untuk Semua yang Membutuhkan</h3>
        <p className="text-center leading-tight">
          Lewat Zis Indosat jutaan Teman yang berdonasi ke segala jenis bantuan tiap harinya.
        </p>

        <Button
          onClick={handleClick}
          className="mt-4 w-full text-slate-50"
          size="lg"
          variant="destructive"
        >
          Ajukan Bantuan Sekarang
        </Button>
      </div>

      <Divider />

      <div className="flex w-full flex-col space-y-4 p-5">
        <h4 className="font-semibold">Cara Pengajuan Bantuan di Zis Indosat</h4>
        {content.map((item, index) => (
          <div className="flex space-x-3" key={String(index)}>
            <div className="flex-col-center mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
              <span>{index + 1}</span>
            </div>
            <div className="prose flex-1 leading-tight">
              <h4 className="text-slate-600">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <div className="flex w-full flex-col space-y-4 p-5">
        <h4 className="font-semibold">Tips Galang Dana ZIs Indosat</h4>
        <p className="text-sm font-light leading-tight">
          Agar Permohonan kamu lancar, kamu perlu memperhatikan beberapa hal berikut ini:
        </p>
        {tips.map((item, index) => (
          <div className="flex space-x-3" key={String(index)}>
            <div className="flex-col-center mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
              <span>{index + 1}</span>
            </div>
            <div className="prose flex-1 leading-tight">
              <h4 className="text-slate-600">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      <div className="p-5">
        <h2 className="font-semibold">Pertanyaan Seputar Program</h2>

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
      <Divider />

      <div className="shadow-t-sm fixed inset-x-0 bottom-0 mx-auto  max-w-md items-center border-t border-t-slate-100 bg-white p-5">
        <Button onClick={handleClick} className="w-full" size="lg" variant="destructive">
          Ajukan Bantuan Sekarang
        </Button>
      </div>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Lengkapi Data sebelum mengajukan bantuan</AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col items-center">
              <SearchYellowSvg />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={handleClickModal} variant="destructive" size="lg">
              Lengkapi Data Diri
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SubmitProgramPage;
