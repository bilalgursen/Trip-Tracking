'use client'

import { useState } from 'react'
import { BiChevronRight, BiPlus } from 'react-icons/bi'

export default function Home() {
  const [travels, setTravels] = useState([
    { county: 'İstanbul', day: 5 },
    { county: 'Sakarya', day: 3 }
  ])

  return (
    <div className="grid grid-cols-main-grid gap-1">
      {/* Head */}
      <div className="col-span-full p-4">
        <div className="navbar bg-slate-50 text-base-300 rounded-full shadow-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-4xl gap-0">
              <span className="me-0 text-lime-700">Trip</span>
              <span className="font-bold text-orange-600">Tracking</span>
            </a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Aside Menü */}
      <div className="p-6 px-14 col-span-full lg:col-span-1 h-auto lg:h-screen">
        {travels.map((travel, i) => (
          <div key={i}>
            <div className="indicator w-full my-4 cursor-pointer">
              <span className="indicator-item badge badge-xs badge-primary border-none bg-orange-600 me-4 mt-2 z-10 p-3">
                {travel.day} Gün
              </span>

              <div className="grid w-full h-20 bg-slate-50 place-items-center rounded ring-1 ring-lime-400 ring-offset-4 ring-offset-lime-600 hover:ring-orange-400 hover:ring-offset-orange-600">
                <span className="text-3xl  font-semibold">{travel.county}</span>
              </div>
            </div>
            <div className="divider animate-pulse divider-horizontal h-24 mr-auto ml-auto"></div>
          </div>
        ))}
        <div
          className="indicator w-full my-4 cursor-pointer animate-pulse"
          onClick={() =>
            setTravels((prevState) => [
              ...prevState,
              {
                county: 'Amasya',
                day: 4
              }
            ])
          }
        >
          <div className="grid w-full h-20 bg-gradient-to-t from-slate-600 to-slate-400 place-items-center rounded ring-1 ring-slate-400 ring-offset-4 ring-offset-slate-600 hover:ring-orange-400 hover:ring-offset-orange-600">
            <span className="text-6xl font-semibold">+</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4 flex-col justify-center p-6 col-span-full lg:col-span-1 self-start items-stretch">
        <div className="flex text-xl justify-between overflow-x-auto">
          <div className="py-4 px-8 bg-white rounded shadow-md flex font-medium text-black items-center justify-center">
            Amasya
          </div>
          <span className="text-4xl flex items-center animate-pulse">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <BiChevronRight key={i} />
              ))}
          </span>
          <div className="py-4 px-8 bg-white rounded shadow-md flex font-medium text-black items-center justify-center">
            İstanbul
          </div>
          <span className="text-4xl flex items-center animate-pulse">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <BiChevronRight key={i} />
              ))}
          </span>
          <div className="text-4xl py-4 px-8 bg-white rounded shadow-md flex justify-center items-center text-[#453976]">
            <BiPlus />
          </div>
        </div>
        <div className="p-12 bg-white rounded shadow-md">
          <div className="text-3xl font-normal text-black">
            <span className="text-[#453976]">İstanbul</span> İçin Hava Durumu
          </div>
          <div className="w-full flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row space-x-0 2xl:space-x-4 rounded bg-gradient-to-t from-orange-700 to-orange-500 text-white p-8 mt-8">
            <div className="w-64">
              <img
                className="flex-none h-32"
                src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg"
              />
              <div className="text-xl font-medium">Parçalı Bulutlu</div>
            </div>
            <div className="w-full flex flex-col space-y-4 2xl:space-y-0 justify-between">
              <div className="flex text-xl font-medium justify-between w-full">
                <div>
                  <div>İstanbul</div>
                  <div>Türkiye</div>
                </div>
                <div>
                  <div>23°C</div>
                  <div>Sıcaklık</div>
                </div>
                <div>
                  <div>51%</div>
                  <div>Nem</div>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <div>Yağmur</div>
                  <div>51%</div>
                </div>
                <div>
                  <div>Hissedilen</div>
                  <div>28°C</div>
                </div>
                <div>
                  <div>Rüzgar</div>
                  <div>54km</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-3xl font-normal text-black my-8">
            İlgili Oteller
          </div>
          <div className="gap-4 grid grid-cols-2 2xl:grid-cols-5">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div className="rounded overflow-hidden">
                  <img
                    className="h-24 w-full object-cover transition-all bg-[#423670] hover:scale-105"
                    src={`https://picsum.photos/500?random=${Math.random()}`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
