import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import MainPage from 'src/Containers/MainPage'
import Form from 'src/Containers/Form'
import { history } from 'src/store'

const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/payment" component={Form} exact />
    </Switch>
  </ConnectedRouter>
)

export default Router
