import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Memory from './pages/Memory'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/memory' element={<Memory />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App