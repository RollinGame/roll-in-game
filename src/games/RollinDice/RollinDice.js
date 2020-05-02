import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import AliasScreen from './AliasScreen'
import BetScreen from './BetScreen'
import ProtectedRoute from './ProtectedRoute'

const RollinDice = () => {
  const [alias, setAlias] = useState('')
  const [betSize, setBetSize] = useState(0)

  return (
    <Router>
      <Switch>
        <ProtectedRoute
          path='/dice/bet'
          alias={alias}
          component={BetScreen}
          betSize={betSize}
          setBetSize={setBetSize}
        />
        <Route path='/dice'>
          <AliasScreen setAlias={setAlias} alias={alias} />
        </Route>
      </Switch>
    </Router>
  )
}

export default RollinDice
