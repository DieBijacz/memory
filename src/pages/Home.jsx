import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="home">
      <div id='games'>
        <div className="container">
          <h1>GAMES:</h1>
          <Link to='/memory'>Memory Game</Link>
        </div>
      </div>
    </div>
  )
}

export default Home