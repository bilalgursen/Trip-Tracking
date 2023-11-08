'use client'

import Lottie from 'lottie-react'

import travel from '@/lotties/travel'

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie className="-mb-6 w-2/3" animationData={travel} loop={true} />
      <div className="z-10 flex h-12 w-full items-center justify-center rounded-tl-full rounded-tr-full border border-[#bfbfbf] bg-white text-2xl font-bold text-[#453976] drop-shadow">
        TripTracking
      </div>
    </div>
  )
}
