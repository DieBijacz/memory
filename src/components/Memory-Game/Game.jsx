import React, { useState } from 'react'
import Cell from './Cell'

const Game = () => {
  const [cells, setCells] = useState([
    { value: 0 },
    { value: 1 },
    { value: 1 },
    { value: 1 },
    { value: 1 },
    { value: 1 },
    { value: 1 },
    { value: 1 },
    { value: 1 },
  ])

  return (
    <div id='memory-game'>
      <div className="stats">
        <div>Level: 1</div>
        <div>Lives: # # #</div>
      </div>
      <div className="board">
        {cells.map((cell, index) => <Cell key={index} cell={cell} id={index} />)}
      </div>
    </div >
  )
}

export default Game