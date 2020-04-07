import React from 'react'
// import { css, jsx } from '@emotion/core'
// import leftArrow from '../img/left-arrow.svg'
// import rightArrow from '../img/right-arrow.svg'

const Arrow = ({ direction, handleClick }) => (
  <div onClick={handleClick}>
    {direction === 'right' ? <div class='arrow arrow--right' /> : <div class='arrow arrow--left' />}
  </div>
)

export default Arrow