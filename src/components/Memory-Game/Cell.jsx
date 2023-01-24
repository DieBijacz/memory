import React, { useState } from 'react'

const Cell = ({ cell }) => {
  const { value } = cell
  const [flipped, setFlipped] = useState(false)
  const [wrong, setWrong] = useState(false)

  function handleCellClick() {
    if (value === 1) {
      setFlipped(true)
    } else {
      setWrong(true)
    }
  }

  return (
    <div className={`cell ${flipped ? 'show' : 'hide'} ${wrong && 'wrong'}`} onClick={handleCellClick}></div>
  )
}

export default Cell