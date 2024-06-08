import React, { memo } from "react";
import Image from 'next/image'
import { useAnimeProfile } from '../hooks/animation'
import { Socials, socialType } from 'features/dataStatic/social'

const Footer = () => {
  useAnimeProfile()
  return (
    <div className='w-full h-full flex justify-center items-center relative footer'>
      <div className="social cursor-pointer flex justify-center items-center flex-col w-1/2">
        <div className="flex justify-center items-center ">
        {Socials.map((data:socialType, index: number) => {
          return (
            <div key={`alt-${index}`} className="el mb-4">
              <Image
                  src={`/media/${data.image}`}
                  alt={data.alt}
                  className="m-6"
                  width={85}
                  height={30}
                  priority
                />
            </div>
          )
        })}
        </div>
        <div className="w-full mt-10">
          <div className="h-[2px] w-full bg-main rotate-2 line-1"></div>
          <div className="h-[2px] w-full bg-main rotate-[-2deg] line-2"></div>
      </div>
      </div>
      <div className="absolute bottom-28 text-secondly text-lg">Last update: 2024</div>
    </div>
  )
}

export default memo(Footer, () => true)
