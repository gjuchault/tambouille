import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';
import apiMiddleware from './apiMiddleware';

export default () => {
  const middlewares = [thunk, apiMiddleware];

  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  return store;
};
