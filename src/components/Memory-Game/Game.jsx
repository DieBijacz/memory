import React, { useEffect, useState } from 'react'
import Cell from './Cell'

const Game = () => {
  const [level, setLevel] = useState(1)
  const [lives, setLives] = useState(3)
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

  useEffect(() => {
    generateCells(level * 3)
  }, [level])

  function generateCells(numOfCells) {
    console.log(numOfCells)
  }

  return (
    <div id='memory-game'>
      <div className="stats">
        <div>Level: {level}</div>
        <div>Lives: # # #</div>
      </div>
      <div className="board">
        {cells.map((cell, index) => <Cell key={index} cell={cell} id={index} />)}
      </div>
    </div >
  )
}

export default Game