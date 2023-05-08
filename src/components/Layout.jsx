import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className="h-screen overflow-hidden">
    <NavBar />
    <div className="flex">
      <Sidebar />
      <div className='pt-[70px] w-full h-screen overflow-y-scroll customScrollbar1 '>{children}</div>
    </div>
  </div>
  )
}

export default Layout