import React, { useEffect, useState } from 'react'

const Cell = ({ cell, setWrongClick }) => {
  const { value } = cell
  const [cellState, setCellState] = useState('hidden')
  const [alreadyClicked, setAlreadyClicked] = useState(false)

  const TIME_SHOW_ON_START = 1500

  // show cells on start
  useEffect(() => {
    if (value === 1)
      setCellState('show')
    setTimeout(() => {
      setCellState('hidden')
    }, TIME_SHOW_ON_START)
  }, [value])

  function handleCellClick() {
    // allow only one click on cell
    if (alreadyClicked) return

    // update cell state
    if (value === 1) {
      setCellState('show')
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