import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const enahncers = process.env.NODE_ENV === "production" ? applyMiddleware(ReduxThunk) : composeWithDevTools(applyMiddleware(ReduxThunk))

export default createStore(
  enableBatching(reducers),
  enahncers,
);