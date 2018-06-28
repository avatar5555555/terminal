// @flow
import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Router from 'src/router'
import Bar from 'src/Components/Bar'

const App = () => (
  <Fragment>
    <Bar />
    <Router />
    <ToastContainer />
  </Fragment>
)

export default App
