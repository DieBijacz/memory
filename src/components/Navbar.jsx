import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/dashboard'>DASHBOARD</Link></li>
      </ul>
    </div>
  )
}

export default Navbar