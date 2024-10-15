import { combineReducers } from 'redux';
import walletReducer from './slices/ConnectWalletSlice';

const rootReducer = combineReducers({
  wallet: walletReducer,
});

export default rootReducer;
