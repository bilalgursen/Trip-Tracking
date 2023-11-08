'use client'

import { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [activeTravel, setActiveTravel] = useState({ city: 'İstanbul', day: 6 })
  const [travels, setTravels] = useState([])

  useEffect(() => {
    const storedTravels = localStorage.getItem('travels')
    const storedActiveTravel = localStorage.getItem('activeTravel')

    storedTravels && setTravels(JSON.parse(storedTravels))
    storedActiveTravel && setActiveTravel(JSON.parse(storedActiveTravel))
  }, [])

  return (
    <Context.Provider
      value={{ travels, setTravels, activeTravel, setActiveTravel }}
    >
      {children}
    </Context.Provider>
  )
}
