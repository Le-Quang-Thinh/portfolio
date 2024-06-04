"use client"; 
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import HomePage from 'features/homePage/views'
export default function App() {

  const pagination = {
    clickable: true
  };

  return (
    <>
      <Swiper
        className="swiper-main w-full h-screen"
        spaceBetween={0}
        direction={'vertical'}
        mousewheel={true}
        pagination={{
          type: 'progressbar'
        }}
        modules={[Pagination, Mousewheel]}
      >
        <SwiperSlide>
            <HomePage />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="swiper-experiant w-full h-full"
            spaceBetween={0}
            mousewheel={true}
            pagination={pagination}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>Vertical Slide 1</SwiperSlide>
            <SwiperSlide>Vertical Slide 2</SwiperSlide>
            <SwiperSlide>Vertical Slide 3</SwiperSlide>
            <SwiperSlide>Vertical Slide 4</SwiperSlide>
            <SwiperSlide>Vertical Slide 5</SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
