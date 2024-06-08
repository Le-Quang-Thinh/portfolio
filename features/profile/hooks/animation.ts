import { useEffect, useRef } from "react";

import { useSwiperSlide } from 'swiper/react';
import anime from 'animejs'

export const useAnimeProfile = () => {
  const swiperSlide = useSwiperSlide();

  const imageRef = useRef<any>()
  const textRef = useRef<any>()

  useEffect(() => {
    if(imageRef.current) return
    imageRef.current = anime({
      targets: '.avatar',
      translateX: [-300, 150], 
      duration: 1000
    });

    textRef.current = anime({
      targets: '.animation-txt-profile .text-main',
      opacity: [0, 1],
      translateX: [300, 0], 
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el: any, i: number) => 200 * (i + 1),
      endDelay: 500
    });

  })

  useEffect(() => {
    if (swiperSlide.isActive) {
      resetAnimationIntroduce()
    }
  }, [swiperSlide.isActive])

  const resetAnimationIntroduce = () => {
    imageRef.current.restart()
    textRef.current.restart()
  }
  
  return {
    resetAnimationIntroduce
  }
}
