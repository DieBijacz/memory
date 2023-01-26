import React, { useEffect, useState } from 'react'
import Cell from './Cell'
import { gameOver, generateCells, showGoodCells } from './BoardFunc.jsx'
import Lives from './Lives'

const Game = () => {
  const [level, setLevel] = useState(1)
  const [wrongClick, setWrongClick] = useState(0)
  const [boardSize, setBoardSize] = useState(3)
  const [lives, setLives] = useState(3)
  const [cells, setCells] = useState([])

  useEffect(() => {
    generateCells(level, boardSize, setCells)
    showGoodCells(cells)
  }, [level, boardSize, setCells])

  useEffect(() => {
    if (wrongClick === 3) gameOver()
  }, [wrongClick])

  return (
    <div id='memory-game'>
      <div className="stats">
        <div>Level: {level}</div>
        <Lives lives={lives} />
      </div>
      <div className="board">
        {cells.map((cell, index) => <Cell setWrongClick={setWrongClick} key={index} cell={cell} id={index} />)}
      </div>
    </div >
  )
}

export default Game