import React, { memo } from 'react';
import Image from 'next/image'
import { useAnimeProject } from 'hooks/useAnimationProject'
import { itemType } from 'features/dataStatic/project'
import classnames from 'classnames'

const Project = (props: any) => {
  const { idxComponent, style, data } = props
  useAnimeProject({idxComponent, style})
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className={classnames(`w-1/2 relative animation-project-${idxComponent}`, style==='left' ? 'order-1' : 'order-2')}>
        {data.map((data:itemType, index: number) => {
          return (
            <div key={`alt-${index}`} className='w-full'>
              <Image
                  src={`/media/${data.image}`}
                  alt={data.alt}
                  data-x={data.x}
                  className='el h-auto'
                  width={100}
                  height={100 * 16 /9}
                  priority
                />
            </div>
          )
        })}
      </div>
      <div className={classnames('side-right w-1/2', style==='left' ? 'order-2 text-left' : 'order-1 text-right')} >
        <div className='flex justify-center items-center'>
          <div className={classnames(`w-3/4 h-auto ml2 text-main about-project-${idxComponent} text-[18px]`)}>
            <p className='header text-main text-[22px] leading-9 mb-1 about-project-txt'> 2019</p>
            <p className='text-secondly leading-9 mb-4 about-project-txt'>
              <strong className='font-bold mb-1'>Thành phố Hồ Chí Minh </strong><br />
              A more comfortable transit navigation experience
            </p>
            <a href='#' target='_blank' className='project-link text-secondly text-sm about-project-txt'>lean more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Project, () => true)
