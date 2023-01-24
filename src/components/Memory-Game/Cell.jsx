import React, { useState } from 'react'

const Cell = ({ cell }) => {
  console.log(cell)
  const [flipped, setFlipped] = useState(false)

  function handleCellClick() {
    console.log(flipped)
    setFlipped(true)
  }
  return (
    <div className={`cell ${flipped ? 'show' : 'hide'}`} onClick={handleCellClick}></div>
  )
}

export default Cell