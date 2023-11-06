import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleCard = () => {
  return (
    <>
      <Link href="#">
        <div className="ml-5 w-60 overflow-hidden rounded-md border shadow-md transition duration-300 hover:shadow-none">
          <div className="relative aspect-video">
            <Image
              src='https://instagram.fcgk19-1.fna.fbcdn.net/v/t51.2885-15/378921964_1022322255788527_3187809593614963712_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgk19-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=An2DjcX1BMkAX9__GBz&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE5NDY3MjUxNzk0MDE4MTY1Mw%3D%3D.2-ccb7-5&oh=00_AfAoMlFs-SI_eGU80zCg2MG7hArjtklp8h_bJpsL3hzSDw&oe=6547633B&_nc_sid=ee9879'
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
    </>
  );
};

export default ArticleCard;
