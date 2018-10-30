import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from 'react-hot-loader'
import App from '../src/App';
import configureStore from './state/configureStore'

const store = configureStore.store

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>
    
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRoot = require('./App') // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={configureStore.store} history={configureStore.history} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
