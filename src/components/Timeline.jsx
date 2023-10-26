'use client'

import { useContext } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from './ContextProvider'
import 'swiper/css'

export default function Timeline() {
  const { data, updateData } = useContext(Context)

  return (
    <Swiper
      className="cursor-grab select-none"
      spaceBetween={64}
      slidesPerView={2}
      breakpoints={{
        768: { slidesPerView: 4 }
      }}
    >
      {data.travels.map((travel, i) => (
        <SwiperSlide key={i}>
          <div
            className="relative flex h-14 items-center justify-center rounded-lg border border-[#bfbfbf] bg-white font-semibold capitalize"
            onMouseOver={() => updateData(travel)}
          >
            {travel.city} {travel.day} Gün
            {i !== data.travels.length - 1 && (
              <span className="absolute left-full animate-pulse">
                <div className="mx-1.5 flex space-x-1 text-2xl text-white">
                  {Array(2)
                    .fill(0)
                    .map((_, i) => (
                      <FiChevronRight key={i} />
                    ))}
                </div>
              </span>
            )}
          </div>
        </SwiperSlide>
      ))}

      {!data.travels.length > 0 && (
        <div className="relative flex h-14 items-center justify-center rounded-lg border border-[#bfbfbf] bg-white font-semibold capitalize">
          Herhangi Bir Yolculuk Planı Yapmadınız
        </div>
      )}
    </Swiper>
  )
}
