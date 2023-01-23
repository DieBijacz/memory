import React from 'react'

const Cell = ({ cell }) => {
  const { value } = cell

  function handleCellClick() {
    console.log(value)
  }
  return (
    <div className='cell' onClick={handleCellClick}></div>
  )
}

export default Cell