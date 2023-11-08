'use client'

import { useContext } from 'react'
import { FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Context } from '../providers/ContextProvider'
import Badge from './ui/badge'
import 'swiper/css'

export default function Timeline() {
  const { activeTravel, setActiveTravel, travels, setTravels } =
    useContext(Context)

  const updateLocalStorage = (activeTravel, travels) => {
    localStorage.setItem('activeTravel', JSON.stringify(activeTravel))
    localStorage.setItem('travels', JSON.stringify(travels))
  }

  const handleDayChange = (id, change) => {
    const updatedTravels = travels
      .map(travel => {
        if (travel.id === id && travel.day + change > 0) {
          return { ...travel, day: travel.day + change }
        }

        return travel
      })
      .filter(travel => travel)

    const newActiveDay = activeTravel.day + change
    const defaultTravel = { city: 'İstanbul', day: 6 }

    const activeTravelToSet =
      newActiveDay > 0
        ? { ...activeTravel, day: newActiveDay }
        : updatedTravels[0] || defaultTravel

    setActiveTravel(activeTravelToSet)
    setTravels(updatedTravels)
    updateLocalStorage(activeTravelToSet, updatedTravels)
  }

  return travels.length > 0 ? (
    <Swiper
      className="cursor-grab select-none"
      spaceBetween={64}
      slidesPerView={2}
      breakpoints={{
        768: { slidesPerView: 4 }
      }}
    >
      {travels.map((travel, i) => (
        <SwiperSlide key={i}>
          <div
            className="flex h-14 items-center justify-center rounded-lg border border-[#bfbfbf] bg-white font-semibold capitalize"
            onMouseOver={() => updateData(travel)}
          >
            {travel.city}{' '}
            <Badge
              className="left-1 top-1 h-6 w-6"
              onClick={() => handleDayChange(travel.id, -1)}
            >
              <FiMinus />
            </Badge>
            <Badge className="top-1 h-6 text-xs">{travel.day} Gün</Badge>
            <Badge
              className="right-1 top-1 h-6 w-6"
              onClick={() => handleDayChange(travel.id, 1)}
            >
              <FiPlus />
            </Badge>{' '}
            {i !== travels.length - 1 && (
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
