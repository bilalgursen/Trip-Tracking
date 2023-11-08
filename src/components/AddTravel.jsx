'use client'

import { nanoid } from 'nanoid'

import { useContext } from 'react'

import { Context } from '../providers/ContextProvider'

export default function AddTravel() {
  const { travels, setTravels, setActiveTravel } = useContext(Context)

  const handleSubmit = e => {
    e.preventDefault()

    addTravel({ id: nanoid(), city: e.target.city.value, day: 1 })

    e.target.city.value = ''
  }

  const addTravel = travel => {
    const newTravels = [...travels, travel]

    localStorage.setItem('activeTravel', JSON.stringify(travel))
    localStorage.setItem('travels', JSON.stringify(newTravels))

    setActiveTravel(travel)
    setTravels(newTravels)
  }

  return (
    <form className="flex space-x-4" onSubmit={e => handleSubmit(e)}>
      <input
        name="city"
        className="h-14 w-full rounded-lg border border-[#bfbfbf] px-4 text-xl font-semibold drop-shadow placeholder:font-semibold"
        type="text"
        placeholder="ex: Amasya"
      />
      <button className="h-14 w-24 rounded-lg border border-[#bfbfbf] bg-white px-4 text-xl font-semibold drop-shadow">
        Add
      </button>
    </form>
  )
}
