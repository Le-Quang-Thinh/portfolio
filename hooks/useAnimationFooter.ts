import { DOMAttributes, useEffect, useRef } from "react";
import { useSwiperSlide } from 'swiper/react';
import anime from 'animejs'

export const useAnimationFooter = () => {

  const swiperSlide = useSwiperSlide();
  const socicalAnimation = useRef<any>()
  const line1 = useRef<any>()
  const line2 = useRef<any>()

  useEffect(() => {
    if(!swiperSlide.isActive) return
    if (socicalAnimation.current) {
      resetAnimationFooter()
      return
    }

    const zone:DOMAttributes = document.querySelector(".footer");
    const zoneArea = zone.getBoundingClientRect(); 
    const zoneAreaHeight = zoneArea.height;

    socicalAnimation.current = anime({
      targets: '.social .el',
      // loop: true,
      translateY: [-170, 0],
      delay: function(el: any, i: number, l: any) {
        return i * 100;
      },
      endDelay: function (el: any, i: number, l: number) {
        return (l - i) * 100;
      }
    });

    line1.current = anime({
      targets: '.line-1',
      rotateZ: 0,
      duration: 300
    });
    line2.current = anime({
      targets: '.line-2',
      rotateZ: 0,
      duration: 300
    });
    
    zone.addEventListener("pointermove", function(e) {
      positionCircle(e);
    });

    function positionCircle(e: any) {
      let number = 0
      if(!line1.current) return
      const height = zoneAreaHeight/2
      if (height> e.clientY) {
        let x = height - e.clientY
        let percent = (x / height) * 100
        number =  percent / 50
      } else {
        let x = zoneAreaHeight - e.clientY 
        let percent = 100 - (x / height) * 100
        number = -percent / 50
      }
      line1.current.set('.line-1', {
        rotateZ: number
      });
      line1.current.set('.line-2', {
        rotateZ: -number
      });
    }
  
  }, [swiperSlide.isActive])

  const resetAnimationFooter = () => {
    socicalAnimation.current.restart()
  }
  
  return {
    resetAnimationFooter
  }
}
