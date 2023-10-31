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

  const updateData = travel => {
    setData(prevState => {
      const newData = { ...prevState, activeTravel: travel }

      updateLocalStorage('data', newData)

      return newData
    })
  }

  return (
    <Context.Provider value={{ data, addData, updateData }}>
      {children}
    </Context.Provider>
  )
}
