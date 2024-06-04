// import Navbar from './navbar'
// import Footer from './footer'
import React, { ReactNode } from 'react'

export default function Layout({
  children,
}: {
  children: ReactNode
})  {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
