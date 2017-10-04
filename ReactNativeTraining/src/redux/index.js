import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';

import Navigator from '../Navigator';

import { messages } from './messages/reducer';
import { groups } from './groups/reducer';
import { contacts } from './contacts/reducer';
import { chat } from './chat/reducer';

const nav = (state, action) => Navigator.router.getStateForAction(action, state) || state;

const reducers = combineReducers({
  messages,
  groups,
  contacts,
  chat,
  nav
});

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// in dev mode, we'll create the store through Reactotron
const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;
const store = createAppropriateStore(reducers, compose(...enhancers));

export default store;
