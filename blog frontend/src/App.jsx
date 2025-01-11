import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Header,Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
