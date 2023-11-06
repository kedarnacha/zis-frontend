'use client';

import '@splidejs/react-splide/css';

//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const article = [
  {
    image: 'https://scontent-cgk1-2.cdninstagram.com/v/t39.30808-6/397996568_646219124356602_4775898717298714942_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=na4cJK78HacAX9tF7kE&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyNzYyODI2NTU1MTY3MDk4Mg%3D%3D.2-ccb7-5&oh=00_AfCAhQsK2WqZSYKefXl7L1a68qccHwTnMMXI-Uv7O45vww&oe=654C855B&_nc_sid=ee9879',
    title: 'Hari Jum’at hari yang penuh keberkahan',
    desc: 'Semoga kita tetap diberikan kekuatan untuk tetap istiqamah hingga akhir nanti meraih akhirat yang baik. Semangat meraih pahala dengan melakukan ibadah dengan ikhlas. Limpahan.... '
  },
  {
    image: 'https://scontent-cgk1-2.cdninstagram.com/v/t39.30808-6/398465068_645428611102320_7885918476475721093_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDE1MzYuc2RyIn0&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=PqnYsq7GddsAX97Aoy7&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyNjUwMTgyODk0ODk3MjkwOA%3D%3D.2-ccb7-5&oh=00_AfDVWn_3Qk7k-Qd_RezrHaBfyXuZtu_41NV3Fu2Lb4nd1Q&oe=654E292A&_nc_sid=ee9879',
    title: 'ZIS INDOSAT secara langsung menyalurkan donasi lewat Kedutaan Besar Palestina',
    desc: 'Duta Besar (Dubes) Palestina untuk Indonesia, (H.E) Zuhair Al-Shun menyebutkan menjelaskan bahwa serangan sampai saat ini masih terus dilakukan oleh... '
  },
  {
    image: 'https://scontent-cgk1-2.cdninstagram.com/v/t39.30808-6/397619156_644687644509750_8758661665260404733_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=DP0eHZOH6csAX9oY-Z8&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyNTQ2MjQyOTQ0MTU3ODg4Mg%3D%3D.2-ccb7-5&oh=00_AfB2m_ZHOlEOINpMCR1hVu8qJPEsVfFKjp4-uTnQ8WSjow&oe=654B4C00&_nc_sid=ee9879',
    title: 'MENJAUHKAN SIFAT BAKHIL',
    desc: 'Sahabat, kikir adalah sikap mental yang enggan mengeluarkan sebagian hartanya yang wajib untuk dikeluarkannya seperti membayar zakat. Kikir adalah penyakit hati yang harus kita jauhi. Rasullullah SAW mengancam... '
  },
  {
    image: 'https://scontent-cgk1-2.cdninstagram.com/v/t39.30808-6/395326724_642125684765946_4041150977368594581_n.jpg?stp=dst-jpg_e35_p720x720_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=106&_nc_ohc=37sA3GRLpngAX-OVxVx&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIyMTg5NTk2MDg1NzcwNTEyNQ%3D%3D.2-ccb7-5&oh=00_AfBMvYSt4245D_dQXJVL3RnB3yoE_4nlmGyOs-I-wK4CyQ&oe=654C551C&_nc_sid=ee9879',
    title: 'Menu Buka Puasa Bareng di Masjid Nurul Taqwa',
    desc: 'Nasi Empal Gepuk ✨Senin, 26 Oktober 2023 Pukul 17.30 - habis Masjid Nurul Taqwa (Kantor IOH Pusat) Gambir Jakarta Pusat Support Program! Buka Puasa Sunnah di Masjid Nurul... '
  },
  {
    image:'https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/395288148_861040945487631_3043814727622051534_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44MDF4ODAxLnNkciJ9&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=103&_nc_ohc=zs_aIWFgfqAAX86Q12J&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIyMTc5NTEzNTk3MzM3MjUyMg%3D%3D.2-ccb7-5&oh=00_AfBSoHL8WV8bwAjiH9AvzWBsz35DxBgiCQKUdg_jHtjBjg&oe=654C7671&_nc_sid=ee9879',
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
