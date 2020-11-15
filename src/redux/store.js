import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/app-reducer';
import appsReducer from './reducers/apps-reducer';
import networksReducer from './reducers/networks-reducer';
import offersReducer from './reducers/offers-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  appsPage: appsReducer,
  networks: networksReducer,
  offers: offersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;