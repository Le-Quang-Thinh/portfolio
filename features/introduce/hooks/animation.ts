import { useEffect, useRef } from "react";
import anime from 'animejs'

export const useAnimeIntroduce = (activeIndex: number) => {

  const socicalAnimation = useRef<any>()
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

    socicalAnimation.current = anime({
      targets: '.social .el',
      // loop: true,
      translateX: -170,
      delay: function(el: any, i: number, l: any) {
        return i * 100;
      },
      endDelay: function (el: any, i: number, l: number) {
        return (l - i) * 100;
      }
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
    if (activeIndex) {
      resetAnimationIntroduce()
    }
  }, [activeIndex])

  const resetAnimationIntroduce = () => {
    console.log(animationPlanetSmall)
    socicalAnimation.current?.restart()
    animationLine.current?.restart()
    animationTxt.current?.restart()
  }
  
  return {
    resetAnimationIntroduce
  }
}
