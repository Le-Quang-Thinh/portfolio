import { useEffect, useRef } from "react";
import { useSwiperSlide } from 'swiper/react';
import anime from 'animejs'

export const useAnimeIntroduce = () => {
  const swiperSlide = useSwiperSlide();

  const animationLine = useRef<any>()
  const animationTxt = useRef<any>()
  const animationPlanetMedium = useRef<any>()
  const animationPlanetSmall = useRef<any>()

  useEffect(() => {
    if(animationTxt.current) return
    animationTxt.current = anime({
      targets: '.animation-txt .text-main',
      opacity: [0, 1],
      translateY: [100, 0], 
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el: any, i: number) => 200 * (i + 1),
      endDelay: 500
    });

    animationLine.current = anime.timeline({
      width: '0px',
      easing: 'easeInOutQuad',
    });

    animationLine.current.add({
      targets: '.animation-line .line',
      width: [0, 1600],
      easing: 'easeInOutQuad',
      delay: (el: any, i: number) => 25 * i,
    })

    animationPlanetMedium.current = anime({
      targets: '.medium-planet',
      rotateZ: [0, 360],
      duration: 30000,
      easing: 'linear',
      loop: true,
      delay: 0,
      perspective: 1000

    });

    animationPlanetSmall.current = anime({
      targets: '.small-planet',
      rotateZ: [0, 360],
      duration: 6000,
      easing: 'linear',
      loop: true,
      delay: 0,
      perspective: 1000
    });
  })

  useEffect(() => {
    if (swiperSlide.isActive) {
      resetAnimationIntroduce()
    }
  }, [swiperSlide.isActive])

  const resetAnimationIntroduce = () => {
    animationLine.current?.restart()
    animationTxt.current?.restart()
  }
  
  return {
    resetAnimationIntroduce
  }
}
