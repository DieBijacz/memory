import React, { useCallback, useEffect, useState } from 'react'
import Cell from './Cell'
import { gameOver, generateCells } from './BoardFunc.jsx'
import Lives from './Lives'
import { boardSizeBasedOnLevel } from './settings'

const Game = () => {
  const [level, setLevel] = useState(1)
  const [lives, setLives] = useState(3)
  const [boardSize, setBoardSize] = useState(3)
  const [cells, setCells] = useState([])
  const [wrongClick, setWrongClick] = useState(0)
  const [rightClick, setRightCLick] = useState(0)
  const [allowClicks, setAllowClicks] = useState(false)

  const cellProps = { setWrongClick, rightClick, setRightCLick, wrongClick, allowClicks, setAllowClicks }

  // INITIAL GAME
  useEffect(() => {
    generateCells(level, boardSize, setCells)
  }, [level, boardSize, setCells])

  // WRONG CLICKS
  useEffect(() => {
    if (wrongClick === 3) {
      gameOver()
      setAllowClicks(false)
      setLives(prev => prev -= 1)
    }
  }, [wrongClick, setLives, setAllowClicks])

  const changeLevel = useCallback(() => {
    setCells([])
    setRightCLick(0)
    setWrongClick(0)
    setLevel(prev => prev += 1)
    setBoardSize(boardSizeBasedOnLevel[level])
  }, [level, setLevel])

  // RIGHT LICKS
  useEffect(() => {
    if (rightClick === level + 2) {
      changeLevel()
      setAllowClicks(false)
    }
  }, [rightClick, setAllowClicks, changeLevel, level])

  return (
    <div id='memory-game'>
      <div className="stats">
        <div>Level: {level}{`(${rightClick})`}</div>
        <Lives lives={lives} />
      </div>
      <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
        {cells.map((cell, index) => <Cell cell={cell} cellProps={cellProps} key={index} />)}
      </div>
    </div >
  )
}

export default Game