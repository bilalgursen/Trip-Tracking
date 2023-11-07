'use client'

import { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({
    activeTravel: { city: 'Istanbul', day: 6 },
    travels: []
  })

  useEffect(() => {
    const storedData = localStorage.getItem('data')

    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }, [])

  const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const addData = travel => {
    setData(prevState => {
      const newTravels = [...prevState.travels, travel]
      const newData = { ...prevState, travels: newTravels }

      updateLocalStorage('data', newData)

      return newData
    })
  }

  function handlePlus(city) {
    setData(prevState => {
      const newTravels = prevState.travels.map(travel => {
        if (travel.city === city) {
          return { ...travel, day: travel.day++ }
        }
        return travel
      })

      const newData = { ...prevState, travels: newTravels }

      updateLocalStorage('data', newData)

      return newData
    })
  }

  function handleMinus(city) {
    setData(prevState => {
      const newTravels = prevState.travels.map(travel => {
        if (travel.city === city && travel.day > 0) {
          return { ...travel, day: travel.day-- }
        }
        return travel
      })

      const newData = { ...prevState, travels: newTravels }

      updateLocalStorage('data', newData)

      return newData
    })
  }

  const updateData = travel => {
    setData(prevState => {
      const newData = { ...prevState, activeTravel: travel }

      updateLocalStorage('data', newData)

      return newData
    })
  }

  return (
    <Context.Provider
      value={{ data, addData, updateData, handlePlus, handleMinus }}
    >
      {children}
    </Context.Provider>
  )
}
