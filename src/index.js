import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import './index.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import messages from 'src/i18n'
import config from 'src/config'
import theme from 'src/services/theme'
import store from 'src/store'

const { locale } = config

const renderApp = () => (
  <IntlProvider
    locale={locale}
    defaultLocale={locale}
    messages={messages[locale]}
  >
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </BrowserRouter>
  </IntlProvider>
)

ReactDOM.render(renderApp(), document.getElementById('root'))
registerServiceWorker()
