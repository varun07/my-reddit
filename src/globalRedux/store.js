import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

export default createStore(
  enableBatching(reducers),
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);