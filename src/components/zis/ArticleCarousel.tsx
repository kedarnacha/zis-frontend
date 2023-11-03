'use client';

import '@splidejs/react-splide/css';

//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const article = [
  {
    image: 'https://instagram.fcgk19-1.fna.fbcdn.net/v/t39.30808-6/398465068_645428611102320_7885918476475721093_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDE1MzYuc2RyIn0&_nc_ht=instagram.fcgk19-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=yBK6iPo_wQYAX-MjCUt&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyNjUwMTgyODk0ODk3MjkwOA%3D%3D.2-ccb7-5&oh=00_AfADL9y92Fc7TvHo3CA6ja6pvu1fzMsHVb2ONLxPsQLOwA&oe=654A34AA&_nc_sid=ee9879',
    title: 'ZIS INDOSAT secara langsung menyalurkan donasi lewat Kedutaan Besar Palestina',
    desc: 'Duta Besar (Dubes) Palestina untuk Indonesia, (H.E) Zuhair Al-Shun menyebutkan menjelaskan bahwa serangan sampai saat ini masih terus dilakukan oleh Israel. ”Mengingat dahulu perjuangan... '
  },
  {
    image: 'https://instagram.fcgk19-1.fna.fbcdn.net/v/t39.30808-6/397619156_644687644509750_8758661665260404733_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=instagram.fcgk19-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=2ypCP2hwHR4AX8ecpY7&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyNTQ2MjQyOTQ0MTU3ODg4Mg%3D%3D.2-ccb7-5&oh=00_AfAILudoEzbGy3rE9kY4s1sqUvKIAqIGjvGSBjXpnaKwVw&oe=65475780&_nc_sid=ee9879',
    title: 'Zakat menjauhkan sifat bakhil',
    desc: 'Sahabat, kikir adalah sikap mental yang enggan mengeluarkan sebagian hartanya yang wajib untuk dikeluarkannya seperti membayar zakat. Kikir adalah penyakit hati yang harus kita jauhi. Rasullullah SAW mengancam... '
  },
  {
    image: 'https://instagram.fcgk19-1.fna.fbcdn.net/v/t51.2885-15/383048218_738917864729750_4276462142872887564_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk19-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=jLG5-cpQ2D0AX85Z1ir&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIwMDg5MzY0ODgxMTkyMjc4MQ%3D%3D.2-ccb7-5&oh=00_AfCU-HlLfI8wdSJVhhyRR0M2fY9sL6FKqMAcviZp27v6Gg&oe=654727BC&_nc_sid=ee9879',
    title: 'Yuk! Gotong Royong - Bangun Rumah Di Surga, Dengan Bangun Masjid Di Dunia',
    desc: 'Dalam hadis yang diriwayatkan oleh Muslim, Rasulullah SAW bersabda, _"Barangsiapa yang membangun masjid karena Allah, maka Allah akan membangun baginya sebuah rumah di surga." Yuk lipatgandakan... '
  },
  {
    image: 'https://instagram.fcgk19-1.fna.fbcdn.net/v/t51.2885-15/378921964_1022322255788527_3187809593614963712_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk19-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=An2DjcX1BMkAX9__GBz&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE5NDY3MjUxNzk0MDE4MTY1Mw%3D%3D.2-ccb7-5&oh=00_AfAoMlFs-SI_eGU80zCg2MG7hArjtklp8h_bJpsL3hzSDw&oe=6547633B&_nc_sid=ee9879',
    title: 'Sumber air bersih di Kampung Depok Barakan hampir habis',
    desc: 'Badan Penanggulangan Bencana Daerah (BPBD) Kabupaten Purwakarta mewaspadai potensi kekeringan pada musim kemarau kali ini, terlebih ada fenomena El Nino. "Hasil pemetaan tim kami, ada 16 desa yang masuk... '
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
                    alt="Item Image"
                  />
                </div>

                <div className="p-3">
                  <p className="text-xs font-semibold">
                    TZIS INDOSAT secara langsung menyalurkan donasi lewat Kedutaan Besar Palestina
                  </p>
                  <p className="mt-2 text-xs text-slate-700 ">
                    Duta Besar (Dubes) Palestina untuk Indonesia, (H.E) Zuhair Al-Shun menyebutkan menjelaskan bahwa serangan sampai saat ini masih terus dilakukan oleh Israel.
                    ”Mengingat dahulu perjuangan...{' '}
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
