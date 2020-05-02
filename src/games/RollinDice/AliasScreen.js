import React from 'react'
import { Link } from 'react-router-dom'
import BetScreen from './BetScreen'

const AliasScreen = ({ setAlias, alias }) => {
  return (
    // <Router>
    <div class='dice-pregame-screen'>
      <div class='dice-pregame-screen__container'>
        <h2>Type your alias</h2>
        <input value={alias} onChange={e => setAlias(e.target.value)} />
        <Link to='/dice/bet' class='btn dice-pregame-screen__action'>
          next
        </Link>
        <div class='dice-pregame-screen__dice' />
      </div>
    </div>

  // </Router>
  )
}

export default AliasScreen
