import { combineReducers } from 'redux';
import walletReducer from './slices/ConnectWalletSlice';
import authReducer from './slices/AuthSlice';
const rootReducer = combineReducers({
  wallet: walletReducer,
  auth: authReducer,
});

export default rootReducer;
