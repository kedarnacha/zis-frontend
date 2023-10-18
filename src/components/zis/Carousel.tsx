'use client';

import '@splidejs/react-splide/css';

//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import useQueryBanner from '@/app/(home)/hooks/useQueryBanner';

const Carousel = () => {
  const { data, isLoading } = useQueryBanner();

  const banners = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="mt-6 px-4">
        <div className="aspect-video w-full rounded-md bg-slate-200 " />
      </div>
    );
  }

  return (
    <Splide
      aria-label="Banner"
      options={{
        type: 'loop',
        gap: '1rem',
        arrows: false,
        autoplay: true,
      }}
    >
      {banners.map((slide) => (
        <SplideSlide key={String(slide.program_id)} className="pb-2">
          <Link href={`/program/${slide.program_id}`}>
            <div className="relative mx-4 mt-6 aspect-video overflow-hidden rounded-md bg-slate-100 shadow-md">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/public/${slide.program_banner.banners_path}`}
                alt={`Carousel-${slide.program_id}`}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
