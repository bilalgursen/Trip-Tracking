'use client'

import { useContext } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from './ContextProvider'
import Badge from './ui/badge'
import 'swiper/css'

export default function Timeline() {
  const { data, updateData } = useContext(Context)
  const { activeTravel } = data

  const handleDayChange = changeAmount => {
    // Mevcut seyahati kopyalamak için sprit operatörü
    const updatedTravel = { ...activeTravel }
    console.log(data)

    // Day değerini artır veya azalt
    updatedTravel.day += changeAmount

    // Verileri güncelle
    updateData(updatedTravel)
  }

  return data.travels.length > 0 ? (
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
            {travel.city}{' '}
            <Badge className="left-0" onClick={() => handleDayChange(1)}>
              <FiPlus className="h-4 w-4" />
            </Badge>
            <Badge>{travel.day} Gün</Badge>
            <Badge className="right-0" onClick={() => handleDayChange(-1)}>
              <FiMinus className="h-4 w-4" />
            </Badge>{' '}
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
