"use client"; 

import { createContext, useContext, PropsWithChildren, useMemo, useRef } from 'react'

const HomePageContext = createContext({})

export const HomepageProvider = ({ children }: PropsWithChildren) => {

  const swipperRef = useRef(null)
  const value = {
    swipperRef
  }

  const finnalValue = useMemo(
    () => value,[]
  )

  return <HomePageContext.Provider value={finnalValue}>{children}</HomePageContext.Provider>
}

export const useHomePageContext = () => {
  return useContext(HomePageContext)
}
