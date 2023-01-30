import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Memory from './pages/Memory'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div id='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/memory' element={<Memory />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App