
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerActions } from 'react-router-redux'
import rootReducer from './reducers/rootReducer'
// const history = createHashHistory()

const configureStore = () => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk)

  const logger = createLogger({
    level: 'info',
    collapsed: true
  })
  middleware.push(logger)
  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    middleware.push(logger);
  }

  // const router = routerMiddleware(history)
  // middleware.push(router)

  const actionCreators = {
    ...routerActions
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators})
    : compose;
  /* eslint-enable no-underscore-dangle */

  enhancers.push(applyMiddleware(...middleware))
  const enhancer = composeEnhancers(...enhancers)
  const store = createStore(rootReducer, enhancer)

  return store
}

const store = configureStore()

export default { configureStore, store }