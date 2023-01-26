import React, { useState } from 'react'

const Cell = ({ cell, setWrongClick }) => {
  const { value } = cell
  const [cellState, setCellState] = useState('hidden')
  const [alreadyClicked, setAlreadyClicked] = useState(false)
  const [wrong, setWrong] = useState(false)

  function handleCellClick() {
    if (alreadyClicked) return
    if (value === 1) {
      setCellState('show')
    } else {
      setCellState('wrong')
      setWrongClick(prev => prev += 1)
    }
    setAlreadyClicked(true)
  }

  return (
    <div className={`cell ${cellState}`} onClick={handleCellClick}>{cellState}</div>
  )
}

export default Cell