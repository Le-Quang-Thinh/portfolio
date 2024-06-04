import { useEffect, useRef } from "react";
import anime from 'animejs'

export const useAnimeHomePage = () => {

  const socicalAnimation = useRef<{}>()
  const mainAvatar = useRef<any>()

  useEffect(() => {
    socicalAnimation.current = anime({
      targets: '.social .el',
      // loop: true,
      translateX: -170,
      delay: function(el: any, i: number, l: any) {
        return i * 100;
      },
      endDelay: function (el: any, i: number, l: number) {
        console.log('end')
        return (l - i) * 100;
      }
    });

    mainAvatar.current =
      
    anime.timeline({
      easing: 'easeOutExpo',
      duration: 750,
      loop: true,
    })

    mainAvatar.current.add({
      targets: '.main-avatar',
      translateX: 280,
      translateY: -50,
      rotateZ: 55,
      left: '-200px',
      bottom: '0px',
      direction: 'alternate',
      scale: 4,
      loop: true,
      easing: 'spring(1, 80, 10, 0)',
      // update: function () {
       
      // },
      // endDelay: function (el: any, i: number, l: number) {
      //   const imageEl = document.getElementById('main-avatar');
      //   imageEl?.classList.remove('bottom-0')
      //   imageEl?.classList.add('top-0')
      // }
      // rotate: '1turn'
    })

    mainAvatar.current.add({
      targets: '.main-avatar',
      translateX: 0,
      translateY: 0,
      rotateZ: 0,
      direction: 'alternate',
      scale: 1,
      easing: 'spring(1, 80, 10, 0)',
    })

    mainAvatar.current.add({
      targets: '.main-avatar',
      translateX: 200,
      translateY: 200,
      rotateZ: 125,
      left: '0px',
      bottom: '100%',
      top: '0px',
      direction: 'alternate',
      scale: 3,
      easing: 'spring(1, 80, 10, 0)',
    })

    // mainAvatar.current.add({
    //   targets: '.main-avatar',
    //   translateX: 500,
    //   translateY: -500,
    //   rotateZ: 0,
    //   direction: 'alternate',
    //   scale: 1,
    //   easing: 'spring(1, 80, 10, 0)',
    //   duration: 750
    //   // rotate: '1turn'
    // })
  })
  
  return {

  }
}
