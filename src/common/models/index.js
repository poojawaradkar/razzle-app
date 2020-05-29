// import { combineReducers } from 'redux';
import { reducer } from 'easy-peasy';
import counter from './counter';
import usersReducer from './usersReducer';

const model = {
  articles: reducer(usersReducer),
  counter: reducer(counter)
};

export default model;
