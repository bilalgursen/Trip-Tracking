'use client'

import Lottie from 'lottie-react'
import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from '../providers/ContextProvider'
import weather from '@/lotties/weather'
import 'swiper/css'

export default function DetailInfo() {
  const { activeTravel } = useContext(Context)

  return (
    <div className="rounded-lg border border-[#bfbfbf] bg-white p-4 drop-shadow">
      <div className="text-2xl font-semibold text-black">
        <span className="capitalize text-[#453976]">{activeTravel.city}</span>{' '}
        İçin Hava Durumu
      </div>
      <div className="mt-4 space-y-4 rounded-lg bg-[#453976] p-4 text-white">
        <div className="flex">
          <div className="space-y-4">
            <Lottie className="h-28 w-28" animationData={weather} loop={true} />
            <div className="text-xl font-semibold">Gece Açık Gökyüzü</div>
          </div>
        </div>
        <div className="text-xl font-semibold">
          {activeTravel.day} Günlük Hava Durumu
        </div>
        <div className="h-1 rounded-full bg-[#aaaaaa]" />
        <Swiper
          className="cursor-grab select-none"
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 6 }
          }}
        >
          {Array(activeTravel.day)
            .fill(0)
            .map((_, i) => (
              <SwiperSlide key={i}>
                <div className="h-40 w-full rounded-lg bg-[#aaaaaa]" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="my-4 text-2xl font-semibold text-black">
        İlgili Oteller
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-7">
        {Array(21)
          .fill(0)
          .map((_, i) => (
            <div className="h-24 w-full rounded-lg bg-[#423670]" key={i} />
          ))}
      </div>
    </div>
  )
}
