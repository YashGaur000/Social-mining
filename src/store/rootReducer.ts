import { combineReducers } from 'redux';

import authReducer from './slices/AuthSlice';
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
