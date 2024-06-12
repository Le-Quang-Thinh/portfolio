import React, { memo } from "react";
import Image from 'next/image'
import { useAnimeProfile } from 'hooks/useAnimationProfile'

// exampleArr: Array<{ id: number, msg: string}> 
const Profile = () => {
  useAnimeProfile()
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='side-left w-1/2 relative'>
        <div className='flex justify-center items-center flex-col'>
          <Image
            src={`/media/main-avatar.png`}
            alt={'avatar'}
            className=" avatar absolute left-0"
            width={500}
            height={200}
            priority
          />
        </div>
      </div>
      <div className="side-right w-1/2">
        <div className='flex justify-center items-center about-me-text'>
          <div className='w-3/4 h-auto ml2 text-main animation-txt-profile '>
            <p className='header text-main text-[18px] leading-9 font-bold mb-1'> a bit about me</p>
            <p className='text-main text-[24px] leading-9 mb-10'>
              Thành phố Hồ Chí Minh <strong className='text-secondly font-bold'>(thường được gọi là Sài Gòn) </strong>là một thành phố ở miền nam Việt Nam nổi tiếng với vai trò nòng cốt trong chiến tranh Việt Nam. Sài Gòn cũng được biết đến với địa danh của thực dân Pháp, trong đó có Nhà thờ Đức Bà được xây dựng hoàn toàn bằng nguyên liệu nhập khẩu từ Pháp và Bưu điện trung tâm được xây dựng vào thế kỷ 19. Quán ăn nằm dọc các đường phố Sài Gòn, nhất là xung quanh chợ Bến Thành nhộn nhịp.
            </p>
            <p>
              <a href="#" target="_blank" className="company-link text-main">Drop me a line</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Profile, (prevProps, nextProps) => true)
