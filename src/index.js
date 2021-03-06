import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './redux/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    )

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
