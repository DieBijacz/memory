import React, { useEffect, useState } from 'react'
import Cell from './Cell'

const Game = () => {
  const [level, setLevel] = useState(1)
  const [boardSize, setBoardSize] = useState(3)
  const [lives, setLives] = useState(3)
  const [cells, setCells] = useState([])

  useEffect(() => {
    generateCells()
  }, [level])

  function generateCells() {
    const cells = []

    // generate value 1 cells 
    for (let i = 0; i < (level + 2); i++) {
      const cell = { value: 1 }
      cells.push(cell)
    }

    // generate value 0 cells
    for (let i = 0; i < (boardSize * boardSize) - (level + 2); i++) {
      const cell = { value: 0 }
      cells.push(cell)
    }

    setCells(cells.sort(() => (Math.random() > .5) ? 1 : -1))
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