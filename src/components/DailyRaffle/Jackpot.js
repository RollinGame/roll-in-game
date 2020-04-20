import React from 'react'

const Jackpot = ({ currentAmount }) => {
  return (
    <div class='raffle__jackpot'>
      <div>
        {currentAmount} <span>ada</span>
      </div>
    </div>
  )
}

Jackpot.defaultProps = {
  currentAmount: 1000
}

export default Jackpot
