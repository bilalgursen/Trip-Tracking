'use client'

import { useState } from 'react'

export default function Timeline() {
  const [travels, setTravels] = useState([
    { county: 'İstanbul', day: 5 },
    { county: 'Sakarya', day: 3 }
  ])

  return (
    <div className="col-span-full h-auto overflow-y-auto p-6 px-14 lg:col-span-1">
      <div>
        <div className="indicator my-4 w-full cursor-pointer">
          <div className="grid h-20 w-full place-items-center rounded bg-slate-50 ring-1 ring-lime-400 ring-offset-4 ring-offset-lime-600 hover:ring-orange-400 hover:ring-offset-orange-600">
            <span className="text-3xl  font-semibold">Start Point</span>
          </div>
        </div>
      </div>
      {travels.map((travel, i) => (
        <div key={i}>
          <div className="divider divider-horizontal ml-auto mr-auto h-24 animate-pulse"></div>
          <div className="indicator my-4 w-full cursor-pointer">
            <span className="indicator-item badge badge-xs badge-primary z-10 me-4 mt-2 border-none bg-orange-600 p-3">
              {travel.day} Gün
            </span>

            <div className="grid h-20 w-full place-items-center rounded bg-slate-50 ring-1 ring-lime-400 ring-offset-4 ring-offset-lime-600 hover:ring-orange-400 hover:ring-offset-orange-600">
              <span className="text-3xl  font-semibold">{travel.county}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
