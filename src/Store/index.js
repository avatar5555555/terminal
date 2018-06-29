import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import reducers from './reducers'
import sagas from './sagas'

import config from 'src/config'

const { isDev, isBrowser, basename } = config

export const history = createBrowserHistory({ basename })

const sagaMiddleware = createSagaMiddleware()

// to test devtools
export const getDevTools = (ext = window.devToolsExtension) =>
  isDev && isBrowser && ext ? ext : () => fn => fn

const store = createStore(
  connectRouter(history)(reducers),
  getDevTools()(),
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

sagaMiddleware.run(sagas)

export default store
