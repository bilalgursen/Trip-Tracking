'use client'

import Lottie from 'lottie-react'
import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'

import { Context } from './ContextProvider'
import weather from './weather.json'
import 'swiper/css'

export default function DetailInfo() {
  const { data } = useContext(Context)

  return (
    <div className="rounded-lg border border-[#bfbfbf] bg-white p-4 drop-shadow">
      <div className="text-2xl font-semibold text-black">
        <span className="capitalize text-[#453976]">
          {data.activeTravel.city}
        </span>{' '}
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
          {data.activeTravel.day} Günlük Hava Durumu
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
          {Array(data.activeTravel.day)
            .fill(0)
            .map((_, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-[#aaaaaa]">
                  <Image
                    className="object-cover"
                    src="https://fakeimg.pl/100x500"
                    alt="lorem"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                  />
                </div>
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
            <div
              className="relative h-24 w-full overflow-hidden rounded-lg bg-[#423670]"
              key={i}
            >
              <Image
                className="object-cover"
                src="https://fakeimg.pl/100x100"
                alt="lorem"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
          ))}
      </div>
    </div>
  )
}
