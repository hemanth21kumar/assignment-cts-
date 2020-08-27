import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from '../src/common-components/combineReducers';

const store = createStore(
    combineReducers,
    composeWithDevTools(applyMiddleware(thunk))
  )

export default store;