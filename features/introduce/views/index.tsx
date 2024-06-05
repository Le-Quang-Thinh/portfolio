import React, { memo } from "react";
import Image from 'next/image'
import { useAnimeIntroduce } from '../hooks/animation'
import { Socials, socialType } from 'features/dataStatic/social'

// exampleArr: Array<{ id: number, msg: string}> 
const Introduce = (props: any) => {
  useAnimeIntroduce(props?.activeIndex)
  return (
    <div className='w-full h-full text-black relative p-4'>
      {/* <div className="social absolute right-[-8%] bottom-10 cursor-pointer">
        {Socials.map((data:socialType, index: number) => {
          return (
            <div key={`alt-${index}`} className="el mb-4">
              <Image
                  src={`/media/${data.image}`}
                  alt={data.alt}
                  className="hover:dark:invert"
                  width={85}
                  height={30}
                  priority
                />
            </div>
          )
        })}
      </div> */}
      <div className="text-3xl font-normal flex h-full w-auto items-center justify-between">
        <div className='intro flex items-start ml-28'>
          <div className="mr-4 ">T</div>
          <div className="animation-txt">
            <div className='text-main'>Hey i'm <strong className='text-secondly font-bold'>Thinh.</strong></div>
            <div className='text-main'>I'm  a<strong className='text-secondly font-bold'> hhhhh </strong> working ...</div>
            <div className='text-main mt-4 text-base'>currrently</div>
          </div>
        </div>
        <div className="animation-line relative right-0 bottom-0 h-[800px] w-[640px]">
          <div className='line absolute left-[620px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className='line absolute left-[500px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className='line absolute left-[380px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className='line absolute left-[260px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className='line absolute left-[140px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className='line absolute left-[20px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className='line absolute left-[-100px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className='line absolute left-[-220px] bottom-0 bg-secondly origin-[0%_50%] w-[0px] h-[1px] rotate-[-45deg]'></div>
          <div className="main-planet absolute left-[128px] top-[280px] w-[320px] h-[320px] rounded-full border-2 border-secondly bg-regal-blue">
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

export default memo(Introduce, (prevProps, nextProps) => prevProps.activeIndex === nextProps.activeIndex)
