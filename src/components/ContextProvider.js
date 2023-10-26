'use client'

import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({
    activeTravel: { city: 'Istanbul', day: 6 },
    travels: [{ city: 'Amasya', day: 4 }]
  })

  const addData = travel => {
    setData({ ...data, travels: [...data.travels, travel] })
  }

  const updateData = travel => {
    setData({ activeTravel: travel, travels: [...data.travels] })
  }

  return (
    <Context.Provider value={{ data, addData, updateData }}>
      {children}
    </Context.Provider>
  )
}
