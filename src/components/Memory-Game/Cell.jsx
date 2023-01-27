import React, { useEffect, useState } from 'react'
import { TIME_SHOW_ON_START } from './settings'

const Cell = ({ cell, cellProps }) => {
  const { setWrongClick, rightClick, setRightCLick, wrongClick, allowClicks, setAllowClicks } = cellProps
  const [cellState, setCellState] = useState('hidden')
  const [alreadyClicked, setAlreadyClicked] = useState(false)

  // SHOW CELLS ON START
  useEffect(() => {
    if (cell.value === 1)
      setCellState('show')
    setTimeout(() => {
      setCellState('hidden')
      setAllowClicks(true)
    }, TIME_SHOW_ON_START)
  }, [cell.value, setAllowClicks])

  function handleCellClick() {
    // allow only one click on cell
    if (alreadyClicked || !allowClicks) return

    // update cell state
    if (cell.value === 1) {
      setCellState('show')
      setRightCLick(prev => prev += 1)
    } else {
      setCellState('wrong')
      setWrongClick(prev => prev += 1)
    }
    setAlreadyClicked(true)
  }

  return (
    <div className={`cell ${cellState}`} onClick={handleCellClick}></div>
  )
}

export default Cell