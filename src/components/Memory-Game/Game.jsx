import React, { useCallback, useEffect, useState } from 'react'
import Cell from './Cell'
import { generateCells, saveScore } from './BoardFunc.jsx'
import Lives from './Lives'
import { BOARD_SIZE_GRID, BORAD_SIZE_IN_PX } from './settings'
import { faSquare as emptySquare } from '@fortawesome/free-regular-svg-icons'
import { faSquare as filledSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Game = () => {
  const [displayPanel, setDisplayPanel] = useState('game-over')
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
  }, [level, boardSize, setCells, lives])

  const clearCells = useCallback(() => {
    setCells([])
    setWrongClick(0)
  }, [])

  // LEVEL UP
  const changeLevel = useCallback(() => {
    setCells([])
    setRightCLick(0)
    setWrongClick(0)
    setLevel(prev => prev += 1)
    setBoardSize(BOARD_SIZE_GRID[level])
  }, [level, setLevel])

  // 3 WRONG CLICKS
  useEffect(() => {
    if (lives === 0) setDisplayPanel('game-over')
    if (wrongClick === 3) {
      setAllowClicks(false)
      setTimeout(() => {
        setLives(prev => prev -= 1)
        clearCells()
      }, 1000)
    }
  }, [wrongClick, setLives, setAllowClicks, clearCells])

  // RIGHT CLICKS
  useEffect(() => {
    if (rightClick === level + 2) {
      changeLevel()
      setAllowClicks(false)
    }
  }, [rightClick, setAllowClicks, changeLevel, level])

  return (
    <div id='memory-game'>

      {/* START GAME */}
      {displayPanel === 'start-game' && <>
        <div className='background panel'>
          <div className='squares-icon'>
            <FontAwesomeIcon icon={filledSquare} />
            <FontAwesomeIcon icon={emptySquare} />
            <FontAwesomeIcon icon={filledSquare} />
            <FontAwesomeIcon icon={filledSquare} />
          </div>
          <span>Visual Memory Test</span>
          <p>Memorize the squares.</p>
          <button onClick={() => setDisplayPanel('game-panel')}>Start</button>
        </div>
      </>}

      {/* GAME */}
      {displayPanel === 'game-panel' && <>
        <div className='background'>
          <div className="stats">
            <div>Level: {level}</div>
            <Lives lives={lives} />
          </div>
          <div className="board" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)`, width: `${BORAD_SIZE_IN_PX}px`, height: `${BORAD_SIZE_IN_PX}px` }}>
            {cells.map((cell, index) => <Cell cell={cell} cellProps={cellProps} key={index} />)}
          </div>
        </div>
      </>}

      {/* GAME OVER */}
      {displayPanel === 'game-over' && <>
        <div className='background panel'>
          <div className='squares-icon'>
            <FontAwesomeIcon icon={filledSquare} />
            <FontAwesomeIcon icon={emptySquare} />
            <FontAwesomeIcon icon={filledSquare} />
            <FontAwesomeIcon icon={filledSquare} />
          </div>
          <p>Visual Memory Test</p>
          <span>Level {level}</span>
          <p>Save your score to see how you compare.</p>
          <div className='buttons'>
            <button onClick={saveScore}>Save score</button>
            <button onClick={() => setDisplayPanel('game-panel')}>Try Again</button>
          </div>
        </div>
      </>}
    </div >
  )
}

export default Game