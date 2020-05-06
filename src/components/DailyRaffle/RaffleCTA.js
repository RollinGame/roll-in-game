import React from 'react'

const RaffleCTA = () => {
  return (
    <div class='raffle'>
      <div class='raffle__summary'>
        <h2>Daily Raffle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse, reprehenderit laborum
          repellat ullam ut qui assumenda sint laboriosam.
        </p>
      </div>
      <div class='raffle__countdown'>
        <h1>05:25:18</h1>
        <h3>Until Next Draw</h3>
      </div>
      <div class='raffle__cta'>
        <button>
          Bet Now
          <span>
            <div class='raffle__cta--betsize'>200 ADA</div>
          </span>
        </button>
      </div>
    </div>
  )
}

export default RaffleCTA
