'use client'

import { SearchIcon, XIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import ArticleCarousel from '@/components/zis/ArticleCarousel';
import FooterEmail from '@/components/zis/FooterEmail';
import Menu from '@/components/zis/Menu';

import ActionButton from './(home)/components/ActionButton';
import ProgramList from './(program)/components/ProgramList';

const Carousel = dynamic(() => import('@/components/zis/Carousel'), {
  ssr: false,
  loading: () => (
    <div className="mt-6 px-4">
      <div className="aspect-video w-full rounded-md bg-slate-200 " />
    </div>
  ),
});

const HomePage = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  return (
    <div className="relative">
      <nav className="flex w-full items-center justify-center space-x-3 bg-amber-300 p-4 py-7">
        <Image src="/zis.png" alt="Logo" width={32} height={32} />
        <div className="flex-1">
          <div className="flex w-full items-center overflow-hidden rounded-md border border-red-500 bg-slate-50 pl-4 text-left text-slate-400">
            <SearchIcon width={16} height={16} className="text-red-600 " />
            <input
              type="text"
              value={search}
              className="h-full w-full bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              placeholder="Cari Program Kebaikan"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Button size="sm" variant="destructive"
            onClick={() => {
              router.push('/program?keyword=' + search);
            }}>
            Cari
          </Button>
        </div>
      </nav>
      <div className="relative aspect-[7/2]">
        <Image src="/home_header.png" fill alt="Home header" className="z-10 object-cover" />
        <div className="absolute left-5 top-5 z-10 pr-32 text-base font-semibold">
          Bantu sesama dengan berbagai cara lewat Ziswaf Indosat
        </div>
      </div>
      <div className="relative z-40 -mt-10 px-4">
        <div className="rounded-lg bg-white p-4 shadow-lg">
          <p>Lewat Program yang telah kami sediakan, terbukti banyak orang yang telah terbantu.</p>
          <ActionButton />
        </div>
      </div>
      <Carousel />
      <Menu fromHome />
      <div className="h-3 bg-slate-100" />
      <ProgramList isHome />
      <div className="my-4 flex justify-center">
        <Link href="/program">
          <Button className="rounded-full text-slate-50" size="sm" variant="destructive">
            Lihat Lebih Banyak
          </Button>
        </Link>
      </div>
      <div className="h-3 bg-slate-100" />

      <div className="mt-5">
        <div className="mb-4 flex items-center justify-between px-4">
          <h3 className="font-semibold">Kabar Mustahiq</h3>
          <Link href="#" className="text-sm font-medium text-orange-500">
            Lihat Semua
          </Link>
        </div>
        <ArticleCarousel />
      </div>

      <div className="h-3 bg-slate-100" />
      <FooterEmail />
    </div>
  );
};

export default HomePage;
