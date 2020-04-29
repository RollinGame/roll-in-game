import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, alias, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (alias ? <Component {...rest} /> : <Redirect to='/dice' />)}
    />
  )
}

export default ProtectedRoute
