import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from 'src/Containers/MainPage'

const Router = () => (
  <Switch>
    <Route path="/" component={MainPage} exact />
  </Switch>
)

export default Router
