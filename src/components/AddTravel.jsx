'use client'

import { useContext } from 'react'

import { Context } from './ContextProvider'

export default function AddTravel() {
  const { addData } = useContext(Context)

  function handleSubmit(e) {
    e.preventDefault()

    addData({ city: e.target.city.value, day: 12 })

    e.target.city.value = ''
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
