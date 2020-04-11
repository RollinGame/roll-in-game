import React from 'react'

const Arrow = ({ direction, handleClick }) => (
  <div onClick={handleClick}>
    {direction === 'right' ? <div class='arrow arrow--right' /> : <div class='arrow arrow--left' />}
  </div>
)

export default Arrow