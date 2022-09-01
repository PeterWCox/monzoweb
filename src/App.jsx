import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import saga from './sagas';
import { Root } from './components/Root/Root';
import './style.css';
import { createRoot } from 'react-dom/client';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle, max-len
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

const App = () =>
{
  return (
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  );
}

const container = document.getElementById('mzw');
const root = createRoot(container);
root.render(<App />)
