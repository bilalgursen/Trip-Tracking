'use client'

import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

export default function Timeline() {
  const [travels, setTravels] = useState([
    { county: 'İstanbul', day: 5 },
    { county: 'Bursa', day: 2 },
    { county: 'Sakarya', day: 4 },
    { county: 'Amasya', day: 7 },
    { county: 'Erzincan', day: 9 }
  ])

  return (
    <Swiper
      className="cursor-grab select-none"
      spaceBetween={64}
      slidesPerView={2}
      breakpoints={{
        768: { slidesPerView: 4 }
      }}
    >
      {travels.map((travel, i) => (
        <SwiperSlide className="font-semibold" key={i}>
          <div className="relative flex h-14 items-center justify-center rounded-lg border border-[#bfbfbf] bg-white">
            {travel.county}
            {i !== travels.length - 1 && (
              <span className="absolute left-full animate-pulse">
                <div className="mx-1.5 flex space-x-1 text-2xl text-white">
                  {Array(2)
                    .fill(0)
                    .map(() => (
                      <FiChevronRight />
                    ))}
                </div>
              </span>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
