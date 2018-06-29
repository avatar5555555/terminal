// @flow

import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import './index.css'

import Router from 'src/router'
import Bar from 'src/Components/Bar'
import messages from 'src/i18n'
import config from 'src/config'
import theme from 'src/services/theme'
import store from 'src/store'

const { locale } = config

const App = () => (
  <IntlProvider
    locale={locale}
    defaultLocale={locale}
    messages={messages[locale]}
  >
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Fragment>
            <Bar />
            <Router />
            <ToastContainer />
          </Fragment>
        </Provider>
      </MuiThemeProvider>
    </BrowserRouter>
  </IntlProvider>
)

export default App
