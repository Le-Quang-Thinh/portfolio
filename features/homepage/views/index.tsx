"use client"; 
import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import Introduce from 'features/introduce/views'
import Profile from 'features/profile/views'
import Footer from 'features/footer/views'

export default function Home() {

  return (
    <>
      <Swiper
        className="swiper-main w-full h-screen bg-regal-blue"
        spaceBetween={0}
        direction={'vertical'}
        mousewheel={true}
        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <Introduce />
        </SwiperSlide>
        <SwiperSlide>
          <Profile />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
