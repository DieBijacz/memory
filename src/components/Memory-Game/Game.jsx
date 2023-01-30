import React, { useCallback, useEffect, useState } from 'react'
import Cell from './Cell'
import { gameOver, generateCells } from './BoardFunc.jsx'
import Lives from './Lives'
import { BOARD_SIZE_GRID, BORAD_SIZE_IN_PX } from './settings'
import { faSquare as emptySquare } from '@fortawesome/free-regular-svg-icons'
import { faSquare as filledSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Game = () => {
  const [startGame, setStartGame] = useState(false)
  const [level, setLevel] = useState(1)
  const [lives, setLives] = useState(3)
  const [boardSize, setBoardSize] = useState(3)
  const [cells, setCells] = useState([])
  const [wrongClick, setWrongClick] = useState(0)
  const [rightClick, setRightCLick] = useState(0)
  const [allowClicks, setAllowClicks] = useState(false)

  const cellProps = { setWrongClick, rightClick, setRightCLick, wrongClick, allowClicks, setAllowClicks }

  function handleStart() {
    setStartGame(true)
  }

  // INITIAL GAME
  useEffect(() => {
    generateCells(level, boardSize, setCells)
  }, [level, boardSize, setCells])

  // LEVEL UP
  const changeLevel = useCallback(() => {
    setCells([])
    setRightCLick(0)
    setWrongClick(0)
    setLevel(prev => prev += 1)
    setBoardSize(BOARD_SIZE_GRID[level])
  }, [level, setLevel])

  // WRONG CLICKS
  useEffect(() => {
    if (wrongClick === 3) {
      gameOver()
      setAllowClicks(false)
      setLives(prev => prev -= 1)
    }
  }, [wrongClick, setLives, setAllowClicks])

  // RIGHT LICKS
  useEffect(() => {
    if (rightClick === level + 2) {
      changeLevel()
      setAllowClicks(false)
    }
  }, [rightClick, setAllowClicks, changeLevel, level])

  return (
    <div id='memory-game'>
      {!startGame ?
        <div className='background start-panel'>
          <div className='squares-icon'>
            <FontAwesomeIcon icon={filledSquare} />
            <FontAwesomeIcon icon={emptySquare} />
            <FontAwesomeIcon icon={filledSquare} />
            <FontAwesomeIcon icon={filledSquare} />
          </div>
          <span>Visual Memory Test</span>
          <p>Memorize the squares.</p>
          <button onClick={handleStart}>Start</button>
        </div>
        :
        <div className='background'>
          <div className="stats">
            <div>Level: {level}</div>
            <Lives lives={lives} />
          </div>
          <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)`, width: `${BORAD_SIZE_IN_PX}px`, height: `${BORAD_SIZE_IN_PX}px` }}>
            {cells.map((cell, index) => <Cell cell={cell} cellProps={cellProps} key={index} />)}
          </div>
        </div>
      }
    </div >
  )
}

export default Game