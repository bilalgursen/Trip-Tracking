'use client'

import { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  // Başlangıçta verileri boş olarak başlatın.
  const [data, setData] = useState({
    activeTravel: { city: 'Istanbul', day: 6 },
    travels: [{ city: 'Amasya', day: 4 }]
  })

  // LocalStorage'dan verileri çeken bir işlev oluşturun
  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('dataset')
    if (storedData) {
      return JSON.parse(storedData)
    }
    return data // LocalStorage'da veri yoksa, mevcut veriyi kullan
  }

  // Sayfa yüklendiğinde LocalStorage'dan verileri çekin
  useEffect(() => {
    const storedData = getDataFromLocalStorage()
    setData(storedData)
  }, [])

  // Verileri güncellediğinizde LocalStorage'a kaydedin
  useEffect(() => {
    localStorage.setItem('dataset', JSON.stringify(data))
  }, [data])

  const addData = travel => {
    const updatedData = { ...data, travels: [...data.travels, travel] }
    setData(updatedData)
  }

  const updateData = travel => {
    const updatedData = { activeTravel: travel, travels: [...data.travels] }
    setData(updatedData)
  }

  return (
    <Context.Provider value={{ data, addData, updateData }}>
      {children}
    </Context.Provider>
  )
}
