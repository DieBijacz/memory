import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import { gameOver, generateCells } from './BoardFunc.jsx'
import Lives from './Lives'

const Game = () => {
  const [level, setLevel] = useState(1)
  const [lives, setLives] = useState(3)
  const [boardSize, setBoardSize] = useState(3)
  const [cells, setCells] = useState([])
  const [wrongClick, setWrongClick] = useState(0)

  // INITIAL GAME
  useEffect(() => {
    generateCells(level, boardSize, setCells)
  }, [level, boardSize, setCells])

  // WRONG CLICKS
  useEffect(() => {
    if (wrongClick === 3) {
      gameOver()
      setLives(prev => prev -= 1)
    }
  }, [wrongClick, setLives])

  return (
    <div id='memory-game'>
      <div className="stats">
        <div>Level: {level}</div>
        <Lives lives={lives} />
      </div>
      <div className="board">
        {cells.map((cell, index) => <Cell setWrongClick={setWrongClick} key={index} cell={cell} />)}
      </div>
    </div >
  )
}

export default Game