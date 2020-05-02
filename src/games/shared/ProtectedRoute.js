import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, alias, fallbackPath, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (alias ? <Component {...rest} /> : <Redirect to={fallbackPath} />)}
    />
  )
}

export default ProtectedRoute
