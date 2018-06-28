import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import reducers from './reducers'
import sagas from './sagas'

import config from 'src/config'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

let devTool
if (config.isDev) {
  devTool =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(
  connectRouter(history)(reducers),
  devTool,
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

sagaMiddleware.run(sagas)

export default store
