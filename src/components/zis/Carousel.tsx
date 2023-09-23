'use client';

import '@splidejs/react-splide/css';

//@ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import React from 'react';

const Carousel = () => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: 'loop',
        gap: '1rem',
        arrows: false,
        autoplay: true,
      }}
    >
      <SplideSlide>
        <div className="relative mx-4 mt-6 aspect-video overflow-hidden rounded-md">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-carousel1_51xPIr38Y.jpeg?updatedAt=1692372579001"
            alt="Carousel1"
            fill
            className="object-cover"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative mx-4 mt-6 aspect-video overflow-hidden rounded-md">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-carousel1_51xPIr38Y.jpeg?updatedAt=1692372579001"
            alt="Carousel1"
            fill
            className="object-cover"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative mx-4 mt-6 aspect-video overflow-hidden rounded-md">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-carousel1_51xPIr38Y.jpeg?updatedAt=1692372579001"
            alt="Carousel1"
            fill
            className="object-cover"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="relative mx-4 mt-6 aspect-video overflow-hidden rounded-md">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-carousel1_51xPIr38Y.jpeg?updatedAt=1692372579001"
            alt="Carousel1"
            fill
            className="object-cover"
          />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
