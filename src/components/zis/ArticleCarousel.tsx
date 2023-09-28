'use client';

import '@splidejs/react-splide/css';

//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';

import ArticleCard from './ArticleCard';

const slides = [1, 2, 3, 4, 5];

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
        {slides.map((slide) => (
          <SplideSlide key={String(slide)} className="pb-10">
            <ArticleCard />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default ArticleCarousel;
