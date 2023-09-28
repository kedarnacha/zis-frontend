import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleCard = () => {
  return (
    <Link href="#">
      <div className="ml-5 w-60 overflow-hidden rounded-md border shadow-md transition duration-300 hover:shadow-none">
        <div className="relative aspect-video">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-item1_4fp6LWH7n.jpg?updatedAt=1692376347958"
            fill
            alt="Item Image"
          />
        </div>

        <div className="p-3">
          <p className="text-xs font-semibold">
            Tak Punya Tempat Tidur Layak, Mari Kita bantu sesama
          </p>
          <p className="mt-2 text-xs text-slate-700 ">
            Ruang di perut kamu hampir penuh oleh Si Kecil. Hal ini bisa jadi alasan selera makan
            kamu menurun. Jika sulit mengha...{' '}
            <span className="cursor-pointer text-amber-500">Baca selengkapnya</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
