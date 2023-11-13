'use client';

import '@splidejs/react-splide/css';

//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const article = [
  {
    image: '/Berita1.png',
    title: 'Hari Jum’at hari yang penuh keberkahan',
    desc: 'Semoga kita tetap diberikan kekuatan untuk tetap istiqamah hingga akhir nanti meraih akhirat yang baik. Semangat meraih pahala dengan melakukan ibadah dengan ikhlas. Limpahan.... '
  },
  {
    image: '/Berita2.png',
    title: 'ZIS INDOSAT secara langsung menyalurkan donasi lewat Kedutaan Besar Palestina',
    desc: 'Duta Besar (Dubes) Palestina untuk Indonesia, (H.E) Zuhair Al-Shun menyebutkan menjelaskan bahwa serangan sampai saat ini masih terus dilakukan oleh... '
  },
  {
    image: '/Berita3.png',
    title: 'MENJAUHKAN SIFAT BAKHIL',
    desc: 'Sahabat, kikir adalah sikap mental yang enggan mengeluarkan sebagian hartanya yang wajib untuk dikeluarkannya seperti membayar zakat. Kikir adalah penyakit hati yang harus kita jauhi. Rasullullah SAW mengancam... '
  },
  {
    image: '/Berita4.png',
    title: 'Menu Buka Puasa Bareng di Masjid Nurul Taqwa',
    desc: 'Nasi Empal Gepuk ✨Senin, 26 Oktober 2023 Pukul 17.30 - habis Masjid Nurul Taqwa (Kantor IOH Pusat) Gambir Jakarta Pusat Support Program! Buka Puasa Sunnah di Masjid Nurul... '
  },
  {
    image:'/Berita5.png',
    title:'Innalillahi Wainnainnaa lillaahi wa innaa ilaihi raaji’uun',
    desc:'Keluarga Besat ZISWAF INDOSAT Turut Berduka Cita Atas Meninggalnya: Ibu Hj. Ai Sukaesih Ibunda dari bapak Irvan Nugraha (CEO Rumah Zakat) Wafat pada Kamis... '
  }
]

const ArticleCarousel = () => {
  return (
    <Splide
      hasTrack={false}
      aria-label="Banner"
      options={{
        type: 'loop',
        arrows: false,
        autoplay: false,
        autoWidth: true,
      }}
      className="custom-splide"
    >
      <SplideTrack>
        {article.map((slide) => (
          <SplideSlide key={String(slide)} className="pb-10">
            <Link href="#">
              <div className="ml-5 w-60 overflow-hidden rounded-md border shadow-md transition duration-300 hover:shadow-none">
                <div className="relative aspect-video">
                  <Image
                    src={slide.image}
                    fill
                    className='object-cover'
                    alt="Item Image"
                  />
                </div>

                <div className="p-3">
                  <p className="text-xs font-semibold">
                    {slide.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-700 ">
                    {slide.desc}{' '}
                    <span className="cursor-pointer text-amber-500">Baca selengkapnya</span>
                  </p>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default ArticleCarousel;
