import React from 'react'
import { Link } from 'react-router-dom'
import PlayersIMG from '../../images/player.svg'
var classNames = require('classnames')

const BetScreen = ({ setBetSize, betSize }) => {
  let focused20 = classNames('btn', { focused: betSize === 20 })
  let focused50 = classNames('btn', { focused: betSize === 50 })
  let focused80 = classNames('btn', { focused: betSize === 80 })
  let action = classNames('btn', 'dice-pregame-screen__action', { 'disabled-link': betSize === 0 })

  const getBet = e => {
    setBetSize(parseInt(e.target.innerHTML))
  }

  return (
    <div class='dice-pregame-screen'>
      <div class='dice-pregame-screen__container'>
        <h2>Choose Your Bet</h2>
        <div class='dice-pregame-screen__bets'>
          <div class='dice-pregame__bet'>
            <button class={focused20} onFocus={e => getBet(e)}>
              20
            </button>
            <div class='dice-pregame__bet--note'>players waiting</div>
            <div class='dice-pregame__bet--circle'>
              <img src={PlayersIMG} />
            </div>
          </div>
          <div class='dice-pregame__bet'>
            <button class={focused50} onFocus={e => getBet(e)}>
              50
            </button>
          </div>
          <div class='dice-pregame__bet'>
            <button class={focused80} onFocus={e => getBet(e)}>
              80
            </button>
            <div class='dice-pregame__bet--note'>players waiting</div>
            <div class='dice-pregame__bet--circle'>
              <img src={PlayersIMG} />
            </div>
          </div>
        </div>
        <Link class={action}>Play</Link>
        <div class='dice-pregame-screen__dice' />
      </div>
    </div>
  )
}

export default BetScreen
