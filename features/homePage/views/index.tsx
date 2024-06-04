import React from "react";
import Image from 'next/image'
import { useAnimeHomePage } from '../hooks/anime'
import { Socials, socialType} from 'features/dataStatic/social'

// exampleArr: Array<{ id: number, msg: string}> 
export default function HomePage() {
  useAnimeHomePage()
  return (
    <div className='w-full h-full bg-white text-black relative p-4'>
      <div className="social absolute right-[-8%] bottom-10 cursor-pointer">
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
      </div>

      <div  id='main-avatar' className="main-avatar absolute  cursor-pointer">
        <Image
          src='/media/main-avatar.png'
          // className="rotate-[55deg]"
          width={150}
          height={100}
          priority
        />
      </div>
    </div>
  )
}
