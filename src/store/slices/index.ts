import { combineReducers } from '@reduxjs/toolkit';
import contextReducer from './contextSlice';
import encodesSlice from './encodesSlice';

const reducers = combineReducers({
  context: contextReducer,
  encodes: encodesSlice
});

export default reducers;
