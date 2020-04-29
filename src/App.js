import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import LandingPage from './LandingPage'
import RollinDice from './games/RollinDice/RollinDice'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/dice'>
          <RollinDice />
        </Route>
      </Switch>
    </Router>
  )
}

export { App as default }
