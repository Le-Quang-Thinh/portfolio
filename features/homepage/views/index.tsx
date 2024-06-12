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
import Project from 'features/projects/views'

import { projects } from 'features/dataStatic/project'

import { useHomePageContext } from 'contexts/homePageContext'

export default function Home() {

  const { swipperRef }=  useHomePageContext()

  const arrPage = [
    {
      component: Introduce,
      data: projects,
      style: 'normal'
    },
    {
      component: Profile,
      data: projects,
      style: 'normal'
    },
    {
      component: Project,
      data: projects,
      style: 'left'
    },
    {
      component: Project,
      data: projects,
      style: 'right'
    },
    {
      component: Project,
      data: projects,
      style: 'left'
    },
    {
      component: Footer,
      data: projects,
      style: 'normal'
    },
  ]

  return (
    <>
      <Swiper
        className="swiper-main w-full h-screen bg-regal-blue"
        spaceBetween={0}
        direction={'vertical'}
        ref={swipperRef}
        mousewheel={true}
        modules={[Mousewheel]}
      >
        {arrPage.map((item: any, idx: number) => {
          const Component = item?.component ? item?.component : item
            return (
              <SwiperSlide key={idx}>
                <Component data={item.data} style={item.style} idxComponent={idx} />
              </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
}
