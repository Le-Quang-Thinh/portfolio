

import { DOMAttributes, HtmlHTMLAttributes, useEffect, useRef } from "react";

import { useSwiperSlide } from 'swiper/react';
import anime from 'animejs'

interface valuesTypes {
  style: string;
  idxComponent: number;
}

export const useAnimeProject = ({idxComponent, style}: valuesTypes) => {
  const swiperSlide = useSwiperSlide();
  const imageRef = useRef<any>()
  const textRef = useRef<any>()

  useEffect(() => {
    if(!swiperSlide.isActive) return
    if (imageRef.current) {
      resetAnimationProject()
      return
    }
    textRef.current = anime({
      targets: `.about-project-${idxComponent} .about-project-txt`,
      opacity: [0, 1],
      translateY: [50, 0], 
      easing: "easeOutExpo",
      duration: 1000,
      delay: (el: HtmlHTMLAttributes, i: number) => 200 * (i + 1),
      endDelay: 500
    });

    const animationProjectEl:DOMAttributes = document.querySelector(`.animation-project-${idxComponent}`);
    const animationProjectElArea = animationProjectEl.getBoundingClientRect(); 
    const animationProjectElAreaWidth = animationProjectElArea.width;

    imageRef.current = anime({
      targets: `.animation-project-${idxComponent} .el`,
      translateX: function (el: HTMLElement) {
        
        return [style === 'right' ? animationProjectElAreaWidth : 0, el.getAttribute('data-x')]
      },
      translateY: function (el: HTMLElement, i: number) {
        console.log('i', i)
        return 100 + (-100 * i);
      },
      width: 200,
      height: 200*16/9,

      rotate: function() { return anime.random(0, 45); },
      duration: function() { return anime.random(1200, 1800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'easeInOutQuad',
      // loop: true
    });


  },[swiperSlide.isActive])

  const resetAnimationProject = () => {
    // imageRef.current.restart()
    textRef.current.restart()
  }
  
  return {
    resetAnimationProject
  }
}
