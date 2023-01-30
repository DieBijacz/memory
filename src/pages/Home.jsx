import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faClock, faSquare as emptySquare } from '@fortawesome/free-regular-svg-icons'
import { faSquare as filledSquare } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div id="home-page" className='flex-1'>
      <div className="container">
        <h1>TESTS:</h1>
        <div className="card-container">
          <Link to='/memory'>
            <div className="card link center">
              <div className='squares-icon'>
                <FontAwesomeIcon icon={filledSquare} />
                <FontAwesomeIcon icon={emptySquare} />
                <FontAwesomeIcon icon={filledSquare} />
                <FontAwesomeIcon icon={filledSquare} />
              </div>
              <span className='title'>Visual Memory</span>
              <p>Remember an increasingly large board of squares.</p>
            </div>
          </Link>
          <Link to='/memory'>
            <div className="card link center">
              <FontAwesomeIcon icon={faClock} className='icon' />
              <span className='title'>Reaction Time</span>
              <p>Test your visual reflexes.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home