import React, { memo } from "react";
import { useAnimeIntroduce } from 'hooks/useAnimationIntroduce'

const defaultLeft = 620
const defaltSpace = 120
const line = Array.from(Array(8).keys())

const Introduce = () => {
  useAnimeIntroduce()

  return (
    <div className='w-full h-full text-black relative p-4'>
      <div className="text-3xl font-normal flex h-full w-auto items-center justify-between">
        <div className='intro flex items-start xl:ml-28 md:ml-2 lg:ml-14'>
          <div className="mr-4 ">T</div>
          <div className="animation-txt">
            <div className='text-main'>Hey i'm <strong className='text-secondly font-bold'>Thinh.</strong></div>
            <div className='text-main'>I'm  a<strong className='text-secondly font-bold'> hhhhh </strong> working ...</div>
            <div className='text-main mt-4 text-base'>currrently</div>
          </div>
        </div>
        <div className="animation-line relative right-0 bottom-0 h-[800px] w-[640px] xl:block md:hidden">
          {line.map((i: number) => {
            return (
              <div key={`line-${i}`} className={`line absolute left-[${defaultLeft - i * defaltSpace}px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]`} />
            )
          })}
          
          <div className="main-planet opacity-0 absolute left-[128px] top-[280px] w-[320px] h-[320px] rounded-full border-2 border-secondly bg-regal-blue">
            <div className='w-[320px] h-[320px] medium-planet relative top-0 left-0'>
              <div className='w-[80px] h-[80px] rounded-full border-2 border-secondly top-[25px] absolute bg-regal-blue' />
            </div>
            <div className='w-[320px] h-[320px] small-planet absolute top-0 left-0'>
              <div className='w-[40px] h-[40px] rounded-full border-2 border-secondly absolute left-[65px] top-0 bg-regal-blue' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Introduce, () => true)
