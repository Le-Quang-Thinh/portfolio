"use client"; 
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Introduce from 'features/introduce/views'

export default function App() {

  const [slides, setSlide] = useState<number>(0)
  return (
    <>
      <Swiper
        className="swiper-main w-full h-screen bg-regal-blue"
        spaceBetween={0}
        direction={'vertical'}
        mousewheel={true}
        onSlideChange={(slide: any) => setSlide(slide?.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <Introduce activeIndex={slides === 0} />
        </SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
