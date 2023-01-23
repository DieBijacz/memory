import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='games' className='container'>
      <h1>GAMES:</h1>
      <Link to='/memory'>Memory Game</Link>
    </div>
  )
}

export default Home