'use client'

import { useContext } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from './ContextProvider'
import 'swiper/css'

export default function Timeline() {
  const { data, updateData } = useContext(Context)

  return data.travels.length > 0 ? (
    <Swiper
      className="cursor-grab select-none !overflow-visible"
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
            {travel.city}{' '}
            <span className="absolute -left-4 -top-4  cursor-pointer rounded-lg border border-[#bfbfbf] bg-white p-1 px-3 text-xs">
              <FiPlus className="h-4 w-4" />
            </span>
            <span className="pill absolute -top-4 rounded-lg border border-[#bfbfbf] bg-white p-1 text-xs">
              {travel.day} Gün
            </span>
            <span className="absolute -right-4 -top-4 cursor-pointer rounded-lg border border-[#bfbfbf] bg-white p-1 px-3 text-xs">
              <FiMinus className="h-4 w-4" />
            </span>{' '}
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
    </Swiper>
  ) : (
    <div className="relative flex h-14 items-center justify-center rounded-lg border border-[#bfbfbf] bg-white font-semibold capitalize">
      Herhangi Bir Yolculuk Planı Yapmadınız
    </div>
  )
}
